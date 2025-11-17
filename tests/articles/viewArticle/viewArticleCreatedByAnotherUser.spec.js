import { test } from '../../_fixtures/fixtures';
import { ViewArticlePage } from '../../../src/ui/pages/article/ViewArticlePage';
import { createArticle } from '../../../src/ui/actions/articles/createArticle';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { BasePage } from '../../../src/ui/pages/BasePage';

test.use({ contextsNumber: 2, usersNumber: 2 });

test.beforeEach(async ({ pages, users, articleWithoutTags }) => {
  const basePage0 = new BasePage(pages[0]);
  const basePage1 = new BasePage(pages[1]);
  await signUpUser(pages[0], users[0], 1);
  await basePage0.closeSwalIfVisible();
  await signUpUser(pages[1], users[1], 2);
  await basePage1.closeSwalIfVisible();
  await createArticle(pages[0], articleWithoutTags, 1);
});

test('View an article created by another user', async ({
  articleWithoutTags,
  pages,
  users,
}) => {
  const viewArticlePage = new ViewArticlePage(pages[1], 2);

  await viewArticlePage.open(articleWithoutTags.url);

  await viewArticlePage.assertArticleTitleIsVisible(articleWithoutTags.title);
  await viewArticlePage.assertArticleTextIsVisible(articleWithoutTags.text);
  await viewArticlePage.assertArticleAuthorNameIsVisible(users[0].username);
});
