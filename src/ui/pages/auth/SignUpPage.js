import { expect } from '../../../common/helpers/pw';
import { BasePage } from '../BasePage';
import { ROUTES } from '../../constants/pageRoutes';
import { SweetAlert } from '../../components/SweetAlert';

export class SignUpPage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this._url = ROUTES.register;
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', {
      name: 'Sign up',
    });
    this.errorMessage = page.getByRole('list').nth(1);
    this.sweetAlert = new SweetAlert(page, userId);
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

  async confirmSuccessfulRegistration() {
    if (process.env.ENV_TYPE === 'local') {
      await this.sweetAlert.assertVisible();
      await this.sweetAlert.assertTitle('Welcome!');
      await this.sweetAlert.assertMessage('Your registration was successful!');
      await this.sweetAlert.clickOkButton();
    }
  }

  async assertErrorMessageContainsText(messageText) {
    await this.step(`Assert the '${messageText}' error is shown`, async () => {
      if (process.env.ENV_TYPE === 'local') {
        await this.sweetAlert.assertVisible();
        await this.sweetAlert.assertTitle('Registration failed!');
        await this.sweetAlert.assertMessage(messageText);
        await this.sweetAlert.clickOkButton();
      } else {
        await expect(this.errorMessage).toContainText(messageText);
      }
    });
  }
}
