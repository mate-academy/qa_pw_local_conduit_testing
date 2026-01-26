export class SweetAlertHelper {
  constructor(page) {
    this.page = page;
    this.modal = page.locator('.swal-modal');
    this.button = page.locator('.swal-button');
    this.text = page.locator('.swal-text');
    this.title = page.locator('.swal-title');
  }

  async waitAndClose(timeout = 3000) {
    try {
      await this.page.waitForTimeout(500);
      
      const isVisible = await this.modal.isVisible();
      if (isVisible) {
        await this.button.click();
        await this.modal.waitFor({ state: 'hidden', timeout });
      }
    } catch (error) {
    }
  }

  async isVisible() {
    try {
      return await this.modal.isVisible();
    } catch (error) {
      return false;
    }
  }
}
