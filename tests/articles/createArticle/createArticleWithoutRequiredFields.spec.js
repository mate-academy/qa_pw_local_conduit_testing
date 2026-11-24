import { expect } from '@playwright/test';
import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { TITLE_CANNOT_BE_EMPTY } from '../../../src/ui/constants/articleErrorMessages';

const isLocal = process.env.ENV_TYPE === 'local';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

async function assertLocalArticleCreationError({ page, createArticlePage }) {
  const [response] = await Promise.all([
    page.waitForResponse(
      response =>
        new URL(response.url()).pathname.endsWith('/articles') &&
        response.request().method() === 'POST',
    ),
    createArticlePage.clickPublishArticleButton(),
  ]);

  await test.step('Assert article creation is rejected', async () => {
    expect(response.status()).toBe(400);

    const responseBody = await response.json();

    expect(responseBody.errors.body).toContain(TITLE_CANNOT_BE_EMPTY);
  });

  await createArticlePage.sweetAlert.assertVisible();
  await createArticlePage.sweetAlert.assertTitle('Oops!');
  await createArticlePage.sweetAlert.clickOkButton();
  await createArticlePage.assertOpened();
}

async function assertStagingArticleCreationError({ createArticlePage }) {
  await createArticlePage.clickPublishArticleButton();
  await createArticlePage.assertErrorMessageContainsText(TITLE_CANNOT_BE_EMPTY);
}

const assertArticleCreationError = isLocal
  ? assertLocalArticleCreationError
  : assertStagingArticleCreationError;

test('Create an article without required fields', async ({
  page,
  internalHomePage,
  createArticlePage,
}) => {
  await internalHomePage.header.clickNewArticleLink();

  await assertArticleCreationError({ page, createArticlePage });
});
