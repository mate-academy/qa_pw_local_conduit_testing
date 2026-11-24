export const TITLE_CANNOT_BE_EMPTY =
  process.env.ENV_TYPE === 'local'
    ? 'You must set the article title.'
    : 'Article title cannot be empty';
