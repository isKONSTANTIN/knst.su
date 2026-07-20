import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Follows a section's foreground content across its whole entrance +
 * pass-through: it RISES up out of place while the section is still arriving
 * from below the fold, settles back to its natural position right as the
 * section's top reaches the top of the viewport, then drags DOWN toward the
 * boundary with the next section as the user keeps scrolling through it.
 *
 * Rather than tracking the scrollbar live, this follows with LATENCY: scroll
 * progress is sampled and applied at most once every SAMPLE_DELAY seconds — a
 * throttle, not a debounce — so continuous scrolling still produces a steady
 * trickle of catch-up moves instead of going silent until the user stops. Each
 * sample eases smoothly to the position matching progress at that moment, and
 * the last scroll update (even mid-motion) always gets one final catch-up
 * sample once scrolling stops.
 *
 * Must be called from inside an active `gsap.context()` scope — the matchMedia
 * this returns registers itself with that context, so `ctx.revert()` tears
 * down everything below.
 *
 * The scroll RANGE this tracks is a fixed multiple of the viewport height, not
 * a semantic point like 'bottom bottom'. Those derive from the section's actual
 * rendered height, which — for a min-h-screen section — is often only a little
 * taller than the viewport, producing a scroll range as short as a few tens of
 * pixels. On a near-zero range the raw scroll-linked progress flips from 0 to 1
 * almost instantly, which would make the eventual catch-up motion jump to some
 * arbitrary in-between value instead of a clean arrival. 'top bottom' →
 * 'top top' is always exactly one viewport height of scroll no matter how tall
 * the section is, which is what makes it safe to use as the rise phase.
 */

/** Breathing room kept between the content's bottom edge and the section's. */
const MARGIN = 16
/** Throttle interval for scroll sampling. */
const SAMPLE_DELAY = 0.15
/** How far above its resting place the content floats while still approaching. */
const RISE_DISTANCE = 700
/**
 * Absolute cap on the drag, not viewport-relative: content is centered within
 * the section, so on a very tall viewport (2K/4K) the measured room around it
 * grows just as large as the section does, and capping only at
 * `window.innerHeight` let the drag travel nearly that whole height — a huge,
 * jarring sweep on big screens. A flat px ceiling (matching RISE_DISTANCE's own
 * flat scale) keeps the motion feeling the same regardless of display size.
 */
const MAX_DISTANCE = 500
/** Extra scroll past 'top top', as a fraction of viewport height, spent dragging down. */
const FOLLOW_RATIO = 0.6
/**
 * Matches the `xl` breakpoint the sections themselves stack at
 * ('flex-col xl:flex-row'), NOT `md`. Below it, text and image stack into one
 * tall column instead of sitting side by side — RISE_DISTANCE/MAX_DISTANCE are
 * flat px values with no per-viewport cap, and on a stacked, much-taller block
 * they can push content most of the way off-screen. An earlier `md` (768) here
 * left a gap between 768 and 1280 where content was already stacked and tall
 * but this movement was still active. Simplest correct fix: don't move the
 * content at all below the same breakpoint the layout itself uses to stack.
 */
const DESKTOP = '(min-width: 1280px)'

/**
 * @param rise  The hero section is on screen from first paint, with no
 *   scroll-in to rise out of — there's no "not yet arrived" state for it to
 *   anticipate. Pass false there to get the plain drag-down behavior (tracks
 *   from 'top top', no rise phase).
 */
export function useViscousFollow(
  target: HTMLElement,
  scroller: HTMLElement,
  { rise = true }: { rise?: boolean } = {},
) {
  // matchMedia rather than a one-shot `window.innerWidth` check: the latter is
  // only ever evaluated at mount, so resizing across the breakpoint left the
  // effect stuck on (content dragging around a stacked mobile layout) or stuck
  // off. gsap tears the whole callback down when the query stops matching,
  // which also resets the transform back to y: 0.
  return gsap.matchMedia().add(DESKTOP, () => {
    // The tracked range is 'top bottom' (section not yet arrived) through
    // 'top top' (arrived — always exactly one viewport height later) through
    // the follow-through. arriveP is where 'top top' falls within that combined
    // 0..1 progress; it's only exactly 1/totalRatio because `start` is the raw,
    // unshifted 'top bottom'. Don't offset `start` here (e.g. for a "gap") —
    // that would decouple arriveP from where 'top top' actually falls, settling
    // the block at the wrong scroll position. A gap belongs on independent
    // one-shot triggers (like the reveal in ProjectSection.vue), not on this
    // continuous progress-mapped one.
    const totalRatio = rise ? 1 + FOLLOW_RATIO : FOLLOW_RATIO
    const arriveP = rise ? 1 / totalRatio : 0

    /**
     * How far the content may actually drag. A flat MAX_DISTANCE with no
     * per-section check overshoots when content already nearly fills the
     * section, so it's capped at the real measured room below the content.
     */
    let distance = 0

    const measure = () => {
      // getBoundingClientRect() reports the element where it is currently
      // drawn, our own transform included. Subtract it, or each re-measure
      // would feed the current offset back in and shrink the room every time.
      const currentY = Number(gsap.getProperty(target, 'y')) || 0
      const targetBottom = target.getBoundingClientRect().bottom - currentY
      const roomBelow = scroller.getBoundingClientRect().bottom - targetBottom - MARGIN

      distance = Math.max(Math.min(MAX_DISTANCE, roomBelow), 0)
    }

    const valueAt = (p: number) => {
      if (p < arriveP) return -RISE_DISTANCE * (1 - p / arriveP)
      return distance * ((p - arriveP) / (1 - arriveP))
    }

    // quickTo retargets one underlying tween in place instead of killing and
    // restarting a fresh gsap.to() on every sample. A brand-new tween replayed
    // every SAMPLE_DELAY seconds spends most of its duration in an eased "ramp
    // up" that never finishes before the next sample overwrites it — net
    // visible motion close to zero. quickTo keeps velocity continuous across
    // retargets, so it neither stalls under slow continuous scrolling nor
    // freezes when a new sample lands mid-flight.
    const quickY = gsap.quickTo(target, 'y', { duration: 1.3, ease: 'power3.out' })

    let pendingCall: gsap.core.Tween | null = null
    let latestProgress = 0

    const st = ScrollTrigger.create({
      trigger: scroller,
      start: rise ? 'top bottom' : 'top top',
      end: () => `+=${window.innerHeight * totalRatio}`,
      // Re-measure on every refresh (resize, font swap, the lazy-loaded project
      // image finally arriving). Without this, `distance` stayed frozen at
      // whatever the layout looked like at mount while `end` kept updating.
      invalidateOnRefresh: true,
      onRefresh: measure,
      onUpdate: (self) => {
        latestProgress = self.progress
        if (pendingCall) return

        pendingCall = gsap.delayedCall(SAMPLE_DELAY, () => {
          pendingCall = null
          quickY(valueAt(latestProgress))
        })
      },
    })

    measure()

    // Paint the correct rise/settle position immediately instead of waiting for
    // the first throttled sample, so a section already past 'top bottom' at
    // mount doesn't flash at y: 0 before its first scroll event.
    latestProgress = st.progress
    gsap.set(target, { y: valueAt(st.progress) })

    // The throttle's delayedCall is created inside onUpdate — outside the
    // synchronous scope this callback runs in — so gsap's context never sees
    // it. This cleanup, which runs both on unmount and on leaving the
    // breakpoint, is what actually kills it.
    return () => {
      pendingCall?.kill()
      pendingCall = null
    }
  })
}
