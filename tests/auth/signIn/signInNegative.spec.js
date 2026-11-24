import { test } from '../../_fixtures/fixtures';
import { SignInPage } from '../../../src/ui/pages/auth/SignInPage';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import {
  EMPTY_EMAIL_MESSAGE,
  EMPTY_PASSWORD_MESSAGE,
  INVALID_EMAIL_OR_PASSWORD_MESSAGE,
} from '../../../src/ui/constants/authErrorMessages';

test.use({ contextsNumber: 2 });

const testParameters = [
  {
    getEmail: user => user.email,
    getPassword: () => '',
    message: EMPTY_PASSWORD_MESSAGE,
    title: 'empty password',
  },
  {
    getEmail: () => '',
    getPassword: user => user.password,
    message: EMPTY_EMAIL_MESSAGE,
    title: 'empty email',
  },
  {
    getEmail: user => user.email,
    getPassword: () => '1',
    message: INVALID_EMAIL_OR_PASSWORD_MESSAGE,
    title: 'wrong password',
  },
];

test.describe('Sign in negative tests', () => {
  testParameters.forEach(({ getEmail, getPassword, message, title }) => {
    test(`Sign in with ${title}`, async ({ pages, user }) => {
      await signUpUser(pages[0], user);

      const signInPage = new SignInPage(pages[1]);

      await signInPage.open();
      await signInPage.fillEmailField(getEmail(user));
      await signInPage.fillPasswordField(getPassword(user));
      await signInPage.clickSignInButton();
      await signInPage.assertErrorMessageContainsText(message);
    });
  });
});
