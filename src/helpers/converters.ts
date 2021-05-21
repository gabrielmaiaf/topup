/* eslint-disable import/prefer-default-export */

export function convertRemToPixels(rem: number): number {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
