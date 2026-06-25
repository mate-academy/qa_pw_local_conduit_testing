import { expect } from '../../../common/helpers/pw';
import { BasePage } from '../BasePage';
import { ROUTES } from '../../constants/pageRoutes';

export class SignInPage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);
    this._url = ROUTES.login;
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.errorMessage = page.locator('.swal-text');
    this.popupConfirmButton = page.getByRole('button', { name: 'OK' });
  }

  async open(directUrl = undefined) {
    await this.step(`Open ${this._pageName()} page`, async () => {
      const url = directUrl ? directUrl : this.url();
      await this.page.goto(url);
      await this.page.waitForLoadState('domcontentloaded');
      await this.emailField.waitFor({ state: 'visible' });
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

  async clickSignInButton() {
    await this.step(`Click the 'Sign in' button`, async () => {
      await this.signInButton.click();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await this.step(`Assert the '${messageText}' error is shown`, async () => {
      await expect(this.errorMessage).toContainText(messageText);
      if (await this.popupConfirmButton.isVisible()) {
        await this.popupConfirmButton.click();
        await expect(this.errorMessage).toBeHidden();
      }
    });
  }
}
