const isLocal = process.env.ENV_TYPE === 'local';

export const EMPTY_USERNAME_MESSAGE = isLocal
  ? 'Username field required.'
  : 'username:Username must start with a letter, ' +
    'have no spaces, and be 2 - 40 characters.';

export const INVALID_EMAIL_MESSAGE = isLocal
  ? 'Email field required.'
  : 'email:This email does not seem valid.';

export const EMPTY_EMAIL_MESSAGE = isLocal
  ? 'Email field required.'
  : "email:can't be blank";

export const EMPTY_PASSWORD_MESSAGE = isLocal
  ? 'Password field required.'
  : "password:can't be blank";

export const INVALID_EMAIL_OR_PASSWORD_MESSAGE = isLocal
  ? 'Invalid user credentials.'
  : 'email or password:is invalid';
