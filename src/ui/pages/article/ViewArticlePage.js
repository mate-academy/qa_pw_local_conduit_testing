import { expect } from '../../../common/helpers/pw';
import { BasePage } from '../BasePage';

export class ViewArticlePage extends BasePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitleHeader = page.getByRole('heading');
  }

  authorLinkInArticleHeader(username) {
    return this.page.getByRole('link', { username }).first();
  }

  tagListItem(tagName) {
    // Exact match, so a short tag like 'a' does not match other list items.
    const escapedTag = tagName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return this.page
      .getByRole('listitem')
      .filter({ hasText: new RegExp(`^\\s*${escapedTag}\\s*$`) });
  }

  async assertArticleTitleIsVisible(title) {
    await this.step(`Assert the article has correct title`, async () => {
      await expect(this.articleTitleHeader).toContainText(title);
    });
  }

  async assertArticleAuthorNameIsVisible(username) {
    await this.step(
      `Assert the article has correct author username`,
      async () => {
        await expect(this.authorLinkInArticleHeader(username)).toBeVisible();
      },
    );
  }

  async assertArticleTextIsVisible(text) {
    await this.step(`Assert the article has correct text`, async () => {
      await expect(this.page.getByText(text)).toBeVisible();
    });
  }

  async assertArticleTagsAreVisible(tags) {
    await this.step(`Assert the article has correct tags`, async () => {
      for (let i = 0; i < tags.length; i++) {
        await expect(this.tagListItem(tags[i])).toBeVisible();
      }
    });
  }
}
