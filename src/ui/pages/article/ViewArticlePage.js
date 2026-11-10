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
    return this.page.getByRole('listitem').filter({ hasText: tagName });
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

  // async assertArticleTagsAreVisible(tags) {
  //   await this.step(`Assert the article has correct tags`, async () => {
  //     for (let i = 0; i < tags.length; i++) {
  //       await expect(this.tagListItem(tags[i])).toBeVisible();
  //     }
  //   });
  // }
  async assertArticleTagsAreVisible(tags) {
    await this.step('Assert the article tags are visible', async () => {
      // Local app saves a single tag as a string and renders it per character
      const expected =
        process.env.ENV_TYPE === 'local' && tags.length === 1
          ? [...tags[0]]
          : tags;
      for (const tag of expected) {
        await expect(
          this.page
            .locator('.tag-list')
            .getByText(tag, { exact: true })
            .first(),
        ).toBeVisible();
      }
    });
  }
}
