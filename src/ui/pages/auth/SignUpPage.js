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
    this.errorMessage = page.getByRole('list').nth(1);
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
      const inlineErrorsText =
        (await this.errorMessage.textContent().catch(() => ''))?.trim() || '';

      if (inlineErrorsText) {
        await expect(this.errorMessage).toContainText(messageText);
        return;
      }

      const swalDialog = this.page.locator('.swal-modal');
      await expect(swalDialog).toBeVisible();
      await expect(swalDialog).toContainText('Registration failed!');

      const okButton = this.page.getByRole('button', { name: 'OK' });
      if (await okButton.isVisible({ timeout: 1000 }).catch(() => false)) {
        await okButton.click();
      }
    });
  }
}
