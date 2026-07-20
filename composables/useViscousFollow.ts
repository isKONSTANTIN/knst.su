import { gsap } from 'gsap'

/**
 * Drags a section's foreground content down toward the boundary with the
 * next section as the user scrolls through it. A numeric `scrub` gives it a
 * "viscous" lag — content trails the scroll position, then catches up —
 * rather than tracking the scrollbar rigidly 1:1. Must be called from
 * inside an active `gsap.context()` scope (cleanup happens via ctx.revert()).
 *
 * The scroll RANGE this scrubs over is a fixed fraction of the viewport
 * height, not a semantic point like 'bottom bottom' or 'bottom top'. Those
 * are derived from the section's actual rendered height, which — for a
 * min-h-screen section — is often only a little taller than the viewport,
 * producing a scroll range as short as a few tens of pixels. A lagged
 * scrub needs real scroll distance to ease across; on a near-zero range the
 * raw scroll-linked target flips from 0 to 1 almost instantly, so the lag
 * keeps re-targeting mid-flight and the result is a jumpy snap to some
 * arbitrary in-between value instead of a smooth arrival. A fixed
 * viewport-relative range decouples the scrub from that per-section
 * variance, so it behaves the same everywhere.
 *
 * The DISTANCE has to respect each section's actual layout: a flat
 * viewport-relative distance with no per-section check overshoots when
 * content is close to filling the section already. So this aims for
 * `distanceRatio` of the viewport height, but hard-caps it at the
 * section's real measured available room — the current gap between the
 * content's bottom edge and the section's bottom edge.
 *
 * Below the `md` breakpoint, content stacks (text column, then image,
 * one under the other) instead of sitting side by side, which makes it
 * much taller and leaves far less of that room — on sections with more
 * buttons/links that stacked height eats into the gap enough that even
 * the capped distance was still dragging the image uncomfortably close to
 * (or past) the section's bottom edge. Mobile gets a much smaller target
 * ratio and a bigger margin so it stays clearly inside the section
 * regardless of how tall the stacked content gets.
 */
/** Holds output at 0 until `threshold` progress, then ramps 0..1 over the rest. */
function thresholdEase(threshold: number) {
  return (p: number) => (p < threshold ? 0 : (p - threshold) / (1 - threshold))
}

export function useViscousFollow(
  target: HTMLElement,
  scroller: HTMLElement,
  distanceRatio = 0.45,
  margin = 16,
  lag = 0,
  startThreshold = 0,
) {
  const isMobile = window.innerWidth < 768
  const ratio = isMobile ? 0.08 : distanceRatio
  const marginPx = isMobile ? 100 : margin

  const desired = window.innerHeight * ratio
  const targetRect = target.getBoundingClientRect()
  const scrollerRect = scroller.getBoundingClientRect()
  const roomBelow = scrollerRect.bottom - targetRect.bottom - marginPx
  const distance = Math.max(Math.min(desired, roomBelow), 0)

  return gsap.to(target, {
    y: distance,
    ease: thresholdEase(startThreshold),
    scrollTrigger: {
      trigger: scroller,
      start: 'top top',
      end: () => `+=${window.innerHeight * 0.6}`,
      scrub: lag,
    },
  })
}
