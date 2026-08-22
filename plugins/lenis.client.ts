import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Smoothing factor per frame — lower is heavier/slower to settle. */
const LERP = 0.09

export default defineNuxtPlugin({
  name: 'lenis',
  // ScrollTrigger has to be registered before we start driving it from here.
  dependsOn: ['gsap'],
  setup() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    /**
     * Lenis intercepts wheel/touch input and interpolates the real window
     * scroll position towards the target every frame, so momentum keeps
     * running after the input stops instead of snapping 1:1 to the wheel.
     */
    const lenis = reducedMotion
      ? null
      : new Lenis({
          lerp: LERP,
          // Driven from the GSAP ticker below, so no internal rAF loop.
          autoRaf: false,
        })

    if (lenis) {
      // One clock for both: GSAP's ticker advances Lenis, and every Lenis
      // scroll step immediately re-evaluates ScrollTriggers. Sharing the tick
      // keeps scroll-linked animations from lagging a frame behind the page.
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time) => lenis.raf(time * 1000))
      // GSAP's lag smoothing would freeze the ticker after a slow frame, which
      // reads as a visible hitch in scroll-driven motion.
      gsap.ticker.lagSmoothing(0)
    }

    /**
     * Delegated so every in-page anchor link (nav, GlassButton, future ones)
     * gets a smooth scroll for free instead of the browser's instant jump —
     * through Lenis, so anchor jumps decelerate exactly like wheel scrolling.
     */
    document.addEventListener('click', (e) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!(anchor instanceof HTMLAnchorElement)) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return

      const target = document.querySelector(hash)
      if (!(target instanceof HTMLElement)) return

      e.preventDefault()
      history.pushState(null, '', hash)

      if (lenis)
        lenis.scrollTo(target, { duration: 1.2 })
      else
        target.scrollIntoView()
    })

    return {
      provide: { lenis },
    }
  },
})
