import { pickErrorMessage } from '../../common/helpers/errorDisplay';

export const EMPTY_USERNAME_MESSAGE = pickErrorMessage(
  `username:Username\
  must start with a letter, have no spaces, and be 2 - 40 characters.`,
  'Username field required.',
);
export const INVALID_EMAIL_MESSAGE = pickErrorMessage(
  `email:This email does not seem valid.`,
  'Email field required.',
);
export const EMPTY_EMAIL_MESSAGE = pickErrorMessage(
  `email:can't be blank`,
  'Email field required.',
);
export const EMPTY_PASSWORD_MESSAGE = pickErrorMessage(
  `password:can't be blank`,
  'Password field required.',
);
export const SIGN_IN_EMPTY_PASSWORD_MESSAGE = pickErrorMessage(
  `password:can't be blank`,
  'Invalid user credentials.',
);
export const INVALID_EMAIL_OR_PASSWORD_MESSAGE = pickErrorMessage(
  `email or password:is invalid`,
  'Invalid user credentials.',
);
