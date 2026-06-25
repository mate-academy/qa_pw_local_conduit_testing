import { expect } from '../../../common/helpers/pw';
import { BasePage } from '../BasePage';
import { ROUTES } from '../../constants/pageRoutes';

export class SignUpPage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = ROUTES.register;
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.popupMessage = page.locator('.swal-text');
    this.popupConfirmButton = page.getByRole('button', { name: 'OK' });
  }

  async open(directUrl = undefined) {
    await this.step(`Open ${this._pageName()} page`, async () => {
      const url = directUrl ? directUrl : this.url();
      await this.page.goto(url);
      await this.page.waitForLoadState('domcontentloaded');
      await this.usernameField.waitFor({ state: 'visible' });
    });
  }

  async fillUsernameField(username) {
    await this.step(`Fill the 'Username' field`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillEmailField(email) {
    await this.step(`Fill the 'Email' field`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    await this.step(`Fill the 'Password' field`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickSignUpButton() {
    await this.step(`Click the 'Sign up' button`, async () => {
      await this.signUpButton.click();
    });
  }

  async submitSignUpForm(user) {
    await this.step(`Fill the 'Sign up' form`, async () => {
      await this.fillUsernameField(user.username);
      await this.fillEmailField(user.email);
      await this.fillPasswordField(user.password);
      await this.clickSignUpButton();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await this.step(`Assert the '${messageText}' error is shown`, async () => {
      await expect(this.popupMessage).toContainText(messageText);
    });
  }

  async assertConfirmationPopupText(messageText) {
    await this.step(
      `Assert the confirmation popup contains the '${messageText}' message`,
      async () => {
        await expect(this.popupMessage).toContainText(messageText);
        if (await this.popupConfirmButton.isVisible()) {
          await this.popupConfirmButton.click();
        }
      },
    );
  }

  async assertOpened() {
    await this.step(`Assert ${this._pageName()} page is opened`, async () => {
      await this.page.waitForURL('**/#/register');
      await expect(this.page).toHaveURL(/#\/register$/);
      await this.usernameField.waitFor({ state: 'visible' });
    });
  }
}
