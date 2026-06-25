import { BaseHeader } from './BaseHeader';

export class ExternalHeader extends BaseHeader {
  #signUpLink;
  #signInLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#signUpLink = this.page.getByRole('link', { name: 'Sign up' });
    this.#signInLink = this.page.getByRole('link', { name: 'Sign in' });
  }

  async clickSignUpLink() {
    await this.step(`Click 'Sign Up' link`, async () => {
      console.log('[ExternalHeader.clickSignUpLink] clicking Sign up');
      await this.#signUpLink.click();
      console.log(
        `[ExternalHeader.clickSignUpLink] after click url: ${this.page.url()}`,
      );
    });
  }

  async clickSignInLink() {
    await this.step(`Click 'Sign In' link`, async () => {
      await this.#signInLink.click();
    });
  }
}
