import { expect } from '../../../common/pwHelpers/pw';
import { BasePage } from '../BasePage';
import { InternalHeader } from '../../components/header/InternalHeader';

export class EditArticlePage extends BasePage {
  constructor(page, userId = 0, slug = '') {
    super(page, userId);

    // URL strony edycji artykułu pobrany z env + dynamiczny slug
    this._url = `${process.env.ARTICLE_EDITOR_ROUTE}/${slug}`;

    this.header = new InternalHeader(this.page, userId);

    // Stabilny selektor nagłówka artykułu
    this.articleTitleHeader = page.locator('h1.article-title');
  }

  async assertArticleTitle(title) {
    if (!title) throw new Error('assertArticleTitle: title is undefined');

    await this.step('Assert the article has correct title', async () => {
      await expect(this.articleTitleHeader).toContainText(title);
    });
  }

  async assertArticleText(text) {
    if (!text) throw new Error('assertArticleText: text is undefined');

    await this.step('Assert the article has correct text', async () => {
      await expect(this.page.getByText(text)).toBeVisible();
    });
  }
}
