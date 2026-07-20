import { SplitText } from 'gsap/SplitText'

/** Splits text into per-character spans for letter-by-letter reveal animations. */
export function splitChars(el: HTMLElement) {
  return new SplitText(el, { type: 'chars', charsClass: 'char' })
}

/** Splits text into per-word spans — used for longer copy where per-letter would be excessive. */
export function splitWords(el: HTMLElement) {
  return new SplitText(el, { type: 'words', wordsClass: 'word' })
}
