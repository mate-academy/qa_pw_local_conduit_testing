import { expect } from '../../../common/helpers/pw';
import { BasePage } from '../BasePage';
import { InternalHeader } from '../../components/header/InternalHeader';
import { ROUTES } from '../../constants/pageRoutes';
import { SweetAlert } from '../../components/SweetAlert';

export class CreateArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);

    this._url = ROUTES.articleEditor;
    this.header = new InternalHeader(this.page, userId);
    this.titleField = page.getByPlaceholder('Article Title');
    this.descriptionField = page.getByPlaceholder(`What's this article about?`);
    this.textField = page.getByPlaceholder('Write your article (in markdown)');
    this.tagField = page.getByPlaceholder('Enter tags');
    this.publishArticleButton = page.getByRole('button', {
      name: 'Publish Article',
    });
    this.errorMessage = page.getByRole('list').nth(1);
    this.sweetAlert = new SweetAlert(page, userId);
  }

  async fillTitleField(title) {
    await this.step(`Fill the 'Title' field`, async () => {
      await this.titleField.fill(title);
    });
  }

  async fillDescriptionField(description) {
    await this.step(`Fill the 'Description' field`, async () => {
      await this.descriptionField.fill(description);
    });
  }

  async fillTextField(text) {
    await this.step(`Fill the 'Text' field`, async () => {
      await this.textField.fill(text);
    });
  }

  async fillTagsField(tags) {
    await this.step(`Fill the 'Tags' field`, async () => {
      for (const tag of tags) {
        await this.tagField.fill(tag);
        await this.tagField.press('Enter');
      }
    });
  }

  async clickPublishArticleButton() {
    await this.step(`Click the 'Publish Article' button`, async () => {
      await this.publishArticleButton.click();
    });
  }

  async submitCreateArticleForm(article) {
    await this.step(`Submit the 'Create Article' form`, async () => {
      await this.fillTitleField(article.title);
      await this.fillDescriptionField(article.description);
      await this.fillTextField(article.text);

      if (article.tags.length > 0) {
        await this.fillTagsField(article.tags);
      }

      await this.clickPublishArticleButton();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await this.step(`Assert the '${messageText}' error is shown`, async () => {
      if (process.env.ENV_TYPE === 'local') {
        await this.sweetAlert.assertVisible();
        await this.sweetAlert.assertTitle('Oops!');
        await this.sweetAlert.assertMessage(messageText);
        await this.sweetAlert.clickOkButton();
      } else {
        await expect(this.errorMessage).toContainText(messageText);
      }
    });
  }
}
