import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class SweetAlert extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);

    this.modal = page.locator('.swal-overlay--show-modal .swal-modal');
    this.title = this.modal.locator('.swal-title');
    this.message = this.modal.locator('.swal-text');
    this.okButton = this.modal.getByRole('button', {
      name: 'OK',
      exact: true,
    });
  }

  async assertVisible() {
    await this.step('Assert SweetAlert is visible', async () => {
      await expect(this.modal).toBeVisible();
    });
  }

  async assertTitle(title) {
    await this.step(`Assert SweetAlert title is '${title}'`, async () => {
      await expect(this.title).toHaveText(title);
    });
  }

  async assertMessage(message) {
    await this.step(`Assert SweetAlert message is '${message}'`, async () => {
      await expect(this.message).toHaveText(message);
    });
  }

  async clickOkButton() {
    await this.step('Click SweetAlert OK button', async () => {
      await this.okButton.click();
      await expect(this.modal).toBeHidden();
    });
  }
}
