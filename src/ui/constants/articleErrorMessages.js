import { pickErrorMessage } from '../../common/helpers/errorDisplay';

// Local shows only the 'Oops!' title here, the message text is not rendered.
export const TITLE_CANNOT_BE_EMPTY = pickErrorMessage(
  'Article title cannot be empty',
  'Oops!',
);
