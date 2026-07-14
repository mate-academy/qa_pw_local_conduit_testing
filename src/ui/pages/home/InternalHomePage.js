import { BaseHomePage } from './BaseHomePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { YourFeedTab } from '../../components/YourFeedTab';

export class InternalHomePage extends BaseHomePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this.header = new InternalHeader(this.page, userId);
    this.yourFeed = new YourFeedTab(this.page, userId);
    this.successOkButton = page.getByRole('button', { name: 'OK' });
  }

  async clickOkButton() {
    await this.step(`Clisck OK button after registration`, async () => {
      await this.successOkButton.click();
    });
  }
}
