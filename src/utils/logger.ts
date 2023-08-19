/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-console */
export function debugLog(...msg: unknown[]) {
  console.debug(new Date() + ':> ', msg);
}
export function sendErrorMessage(msg: unknown = '') {
  console.trace();
  console.log(new Date() + ':> ', msg);
}
export function sendlogMessage(msg: unknown = '') {
  console.trace();
  // eslint-disable-next-line no-console
  console.log(new Date() + ':> ', msg);
}
