import { expect } from '../../../common/helpers/pw';
import { BasePage } from '../BasePage';

export class ViewArticlePage extends BasePage {
  constructor(page, userId = 0) {
    super(page, userId);

    // Stabilny selektor tytułu artykułu
    this.articleTitleHeader = page.locator('h1.article-title');
  }

  authorLinkInArticleHeader(username) {
    if (!username)
      throw new Error('authorLinkInArticleHeader: username is undefined');

    // Stabilniejszy selektor linku autora
    return this.page.locator('a.author').filter({ hasText: username }).first();
  }

  tagListItem(tagName) {
    if (!tagName) throw new Error('tagListItem: tagName is undefined');

    // Stabilniejszy selektor tagów (dostosuj klasę do lokalnej aplikacji)
    return this.page.locator('.tag-list li').filter({ hasText: tagName });
  }

  async assertArticleTitleIsVisible(title) {
    if (!title)
      throw new Error('assertArticleTitleIsVisible: title is undefined');

    await this.step(`Assert the article has correct title`, async () => {
      await expect(this.articleTitleHeader).toContainText(title);
    });
  }

  async assertArticleAuthorNameIsVisible(username) {
    if (!username)
      throw new Error(
        'assertArticleAuthorNameIsVisible: username is undefined',
      );

    await this.step(
      `Assert the article has correct author username`,
      async () => {
        await expect(this.authorLinkInArticleHeader(username)).toBeVisible();
      },
    );
  }

  async assertArticleTextIsVisible(text) {
    if (!text) throw new Error('assertArticleTextIsVisible: text is undefined');

    await this.step(`Assert the article has correct text`, async () => {
      await expect(this.page.getByText(text)).toBeVisible();
    });
  }

  async assertArticleTagsAreVisible(tags = []) {
    if (!Array.isArray(tags))
      throw new Error('assertArticleTagsAreVisible: tags must be an array');

    await this.step(`Assert the article has correct tags`, async () => {
      for (const tag of tags) {
        await expect(this.tagListItem(tag)).toBeVisible();
      }
    });
  }
}
