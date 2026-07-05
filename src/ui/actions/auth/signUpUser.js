import { SignUpPage } from '../../pages/auth/SignUpPage';
import { InternalHomePage } from '../../pages/home/InternalHomePage';
import { testStep } from '../../../common/helpers/pw';

export async function signUpUser(page, user, userId = 0) {
  await testStep(
    `Sign up user`,
    async () => {
      const signUpPage = new SignUpPage(page, userId);
      const homePage = new InternalHomePage(page, userId);

      await signUpPage.open();
      await signUpPage.submitSignUpForm(user);

      await homePage.yourFeed.assertTabLinkVisible();

      // Local app shows SweetAlert after successful registration and it can block clicks.
      const okButton = page.getByRole('button', { name: 'OK' });
      if (await okButton.isVisible({ timeout: 1000 }).catch(() => false)) {
        await okButton.click();
      }
    },
    userId,
  );
}
