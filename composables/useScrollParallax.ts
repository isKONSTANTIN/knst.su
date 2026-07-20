import { gsap } from 'gsap'

/**
 * Classic scroll-linked vertical parallax (scrubbed to scroll position).
 * Must be called from inside an active `gsap.context()` scope — the
 * context owns cleanup (ctx.revert() kills the ScrollTrigger it creates).
 */
export function useScrollParallax(target: HTMLElement, scroller: HTMLElement, distance = 15) {
  return gsap.to(target, {
    yPercent: -distance,
    ease: 'none',
    scrollTrigger: {
      trigger: scroller,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}
