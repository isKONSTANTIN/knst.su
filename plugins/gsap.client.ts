import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText)

  /**
   * Delegated so every in-page anchor link (nav, GlassButton, future ones)
   * gets a smooth GSAP scroll for free instead of the browser's instant jump.
   */
  document.addEventListener('click', (e) => {
    const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
    if (!(anchor instanceof HTMLAnchorElement)) return

    const hash = anchor.getAttribute('href')
    if (!hash || hash === '#') return

    const target = document.querySelector(hash)
    if (!target) return

    e.preventDefault()
    history.pushState(null, '', hash)
    gsap.to(window, { duration: 1, scrollTo: target, ease: 'power2.inOut' })
  })
})
