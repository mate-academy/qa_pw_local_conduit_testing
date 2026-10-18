import { BaseHomePage } from './BaseHomePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { YourFeedTab } from '../../components/YourFeedTab';

export class InternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this.header = new InternalHeader(this.page, userId);
    this.yourFeed = new YourFeedTab(this.page, userId);
    // SweetAlert drops 'swal-overlay--show-modal' on close but keeps the node
    // in the DOM, so scoping to the open overlay stops matching a closed one.
    this.welcomeDialog = this.page
      .locator('.swal-overlay--show-modal')
      .getByRole('dialog')
      .filter({ hasText: 'Welcome!' });
    this.okButton = this.welcomeDialog.getByRole('button', { name: 'OK' });
  }

  async confirmWelcomeDialog() {
    await this.step(`Confirm dialog with OK button`, async () => {
      await this.okButton.click();
    });
  }
}
