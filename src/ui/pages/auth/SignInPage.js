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
    this.errorMessage = page.getByRole('list').nth(1);
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

  async assertSignInError(expectedText) {
    await this.step('Assert the Sign in error is shown', async () => {
      if (process.env.ERROR_DISPLAY === 'modal') {
        const modal = this.page.locator('.swal-modal');
        await expect(modal).toBeVisible();
        await expect(modal.locator('.swal-title')).toHaveText('Login failed!');
      } else {
        await this.assertErrorMessageContainsText(expectedText);
      }
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await this.step(`Assert the '${messageText}' error is shown`, async () => {
      await expect(this.errorMessage).toContainText(messageText);
    });
  }
}
