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
    this.okButton = page.getByRole('button', { name: 'OK' });
    this.errorMessage = page.getByRole('list').nth(1);
  }

  async open() {
    await this.step(`Open Sign up page via navigation`, async () => {
      await this.page.goto('/');

      await this.page.getByRole('link', { name: 'Sign up' }).click();

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

  async clickOkButton() {
    await this.step(`Click 'OK' button on success modal`, async () => {
      if (process.env.ENV_TYPE === 'local') {
        await this.okButton
          .waitFor({ state: 'visible', timeout: 5000 })
          .catch(() => {});
        if (await this.okButton.isVisible()) {
          await this.okButton.click();
        }
      }
    });
  }

  async submitSignUpForm(user) {
    await this.step(`Fill the 'Sign up' form`, async () => {
      await this.fillUsernameField(user.username);
      await this.fillEmailField(user.email);
      await this.fillPasswordField(user.password);
      await this.clickSignUpButton();
      await this.clickOkButton();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await this.step(`Assert the '${messageText}' error is shown`, async () => {
      await expect(this.errorMessage).toContainText(messageText);
    });
  }
}
