/* eslint-disable no-console */
export function debugLog(...msg: unknown[]) {
  console.debug(`${new Date().toISOString()} :> `, msg);
}
export function sendErrorMessage(...msg: unknown[]) {
  console.trace();
  console.log(`${new Date().toISOString()} :> `, msg);
}
export function sendlogMessage(msg: unknown = '') {
  console.trace();
  // eslint-disable-next-line no-console
  console.log(`${new Date().toISOString()} :> `, msg);
}
