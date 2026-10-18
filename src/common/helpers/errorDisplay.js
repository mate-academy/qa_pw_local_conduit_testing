// Local Conduit shows validation errors in a SweetAlert dialog,
// staging renders them inline in the form's error list.
export function isErrorDialog() {
  return process.env.ERROR_DISPLAY === 'dialog';
}

export function pickErrorMessage(inlineText, dialogText) {
  return isErrorDialog() ? dialogText : inlineText;
}

export function errorMessageLocator(page) {
  if (isErrorDialog()) {
    return page.locator('.swal-overlay--show-modal .swal-modal');
  }
  return page.getByRole('list').nth(1);
}
