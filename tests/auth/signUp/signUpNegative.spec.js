import { test } from '../../_fixtures/fixtures';
import messages from '../../../src/ui/messages';

test.describe('Sign up negative tests', () => {
  test('Sign up with empty username', async ({ user, signUpPage }) => {
    await signUpPage.open();
    await signUpPage.fillEmailField(user.email);
    await signUpPage.fillPasswordField(user.password);
    await signUpPage.clickSignUpButton();
    await signUpPage.assertErrorMessageContainsText(
      messages.EMPTY_USERNAME_MESSAGE,
    );
  });

  test('Sign up with empty email', async ({ user, signUpPage }) => {
    await signUpPage.open();
    await signUpPage.fillUsernameField(user.username);
    await signUpPage.fillPasswordField(user.password);
    await signUpPage.clickSignUpButton();
    await signUpPage.assertErrorMessageContainsText(
      messages.INVALID_EMAIL_MESSAGE,
    );
  });

  test('Sign up with empty password', async ({ user, signUpPage }) => {
    await signUpPage.open();
    await signUpPage.fillUsernameField(user.username);
    await signUpPage.fillEmailField(user.email);
    await signUpPage.clickSignUpButton();
    await signUpPage.assertErrorMessageContainsText(
      messages.SIGN_UP_EMPTY_PASSWORD_MESSAGE,
    );
  });
});
