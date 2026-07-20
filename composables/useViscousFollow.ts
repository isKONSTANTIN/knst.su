import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Follows a section's foreground content across its whole entrance +
 * pass-through: it RISES up out of place while the section is still
 * arriving from below the fold, settles back to its natural position
 * right as the section's top reaches the top of the viewport, then drags
 * DOWN toward the boundary with the next section as the user keeps
 * scrolling through it. Rather than tracking the scrollbar live, this
 * follows with LATENCY: scroll progress is sampled and applied at most
 * once every `delay` seconds — a throttle, not a debounce — so
 * continuous scrolling still produces a steady trickle of catch-up moves
 * instead of going silent until the user stops. Each sample eases
 * smoothly to the position matching progress at that moment, and the last
 * scroll update (even mid-motion) always gets one final catch-up sample
 * `delay` seconds later once scrolling stops. Must be called from inside
 * an active `gsap.context()` scope (cleanup happens via ctx.revert()).
 *
 * The scroll RANGE this tracks is a fixed multiple of the viewport
 * height, not a semantic point like 'bottom bottom' or 'bottom top'. Those
 * are derived from the section's actual rendered height, which — for a
 * min-h-screen section — is often only a little taller than the viewport,
 * producing a scroll range as short as a few tens of pixels. On a
 * near-zero range the raw scroll-linked progress flips from 0 to 1 almost
 * instantly, which would make the eventual catch-up motion jump to some
 * arbitrary in-between value instead of a clean arrival. A fixed
 * viewport-relative range decouples progress from that per-section
 * variance, so it behaves the same everywhere. 'top bottom' → 'top top'
 * is always exactly one viewport height of scroll no matter how tall the
 * section is, which is what makes it safe to use as the rise phase.
 *
 * The DISTANCE has to respect each section's actual layout: a flat
 * `maxDistance` px with no per-section check overshoots when content is
 * close to filling the section already, so this hard-caps it at the
 * section's real measured available room — the current gap between the
 * content's bottom edge and the section's bottom edge — whichever is
 * smaller. `maxDistance` is a flat px value rather than viewport-relative
 * on purpose: content sits centered in the section, so the measured room
 * grows right along with a tall viewport (2K/4K displays), and without an
 * absolute ceiling the drag would sweep nearly the full screen height on
 * big monitors.
 *
 * Below the `md` breakpoint this whole composable is a no-op (see the
 * early return): content stacks (text column, then image, one under the
 * other) instead of sitting side by side, making the section much taller
 * and leaving far less of that room, and `riseDistance`/`maxDistance`
 * being flat px values has no per-viewport awareness of that — so on a
 * short mobile screen either could push content most of the way off
 * frame. Simplest correct fix there is no movement at all.
 */
/** Holds output at 0 until `threshold` progress, then ramps 0..1 over the rest. */
function thresholdEase(threshold: number) {
  return (p: number) => (p < threshold ? 0 : (p - threshold) / (1 - threshold))
}

export function useViscousFollow(
  target: HTMLElement,
  scroller: HTMLElement,
  {
    margin = 16,
    delay = 0.15,
    startThreshold = 0.0,
    riseDistance = 700,
    // Absolute cap, not viewport-relative: content is centered within
    // the section, so on a very tall viewport (2K/4K displays) the
    // measured room above/below it grows just as large as the section
    // does, and capping only at `window.innerHeight` let the drag travel
    // nearly that whole height — a huge, jarring sweep on big screens.
    // A flat px ceiling (matching riseDistance's own flat scale) keeps
    // the motion feeling the same regardless of display size.
    maxDistance = 500,
    /**
     * The hero section is on screen from first paint, with no scroll-in
     * to rise out of — there's no "not yet arrived" state for it to
     * anticipate. Set false there to fall back to the plain drag-down
     * behavior (tracks from 'top top', no rise phase).
     */
    rise = true,
  }: {
    margin?: number
    delay?: number
    startThreshold?: number
    riseDistance?: number
    maxDistance?: number
    rise?: boolean
  } = {},
) {
  // Must match the `xl` breakpoint ProjectSection.vue/me.vue actually
  // stack content at ('hero-content flex-col xl:flex-row'), NOT `md`.
  // Below that, text and image stack into one tall column instead of
  // sitting side by side — riseDistance/maxDistance are flat px values
  // with no per-viewport cap, and on a stacked, much-taller block they
  // can push content most of the way off-screen. Using `md` (768) here
  // left a gap between 768 and 1280 where content was already stacked
  // and tall but this movement was still active — the exact confound
  // that made everything below `xl` behave inconsistently. Simplest
  // correct fix: don't move the content at all below the same
  // breakpoint the layout itself uses to stack.
  if (window.innerWidth < 1280) return null

  const targetRect = target.getBoundingClientRect()
  const scrollerRect = scroller.getBoundingClientRect()
  const roomBelow = scrollerRect.bottom - targetRect.bottom - margin
  const distance = Math.max(Math.min(maxDistance, roomBelow), 0)
  const fallEase = thresholdEase(startThreshold)
  const followRatio = 0.6

  // Range is 'top bottom' (section not yet arrived) through 'top top'
  // (arrived — always exactly 1 viewport height later) through the
  // existing 0.6-viewport-height follow-through. arriveP is where
  // 'top top' falls within that combined 0..1 progress — it's only
  // exactly 1/totalRatio because 'start' is the raw, unshifted 'top
  // bottom': that's what guarantees 'top bottom' → 'top top' is exactly
  // one viewport height. Don't offset `start` here (e.g. for a "gap") —
  // that would decouple arriveP from where 'top top' actually falls in
  // the range, settling the block at the wrong scroll position. A
  // gap/lead belongs on independent one-shot triggers (like the
  // content-reveal one in ProjectSection.vue), not on this continuous
  // progress-mapped one. Without `rise`, this collapses back to the
  // original plain drag-down: track starts at 'top top' and there's no
  // phase before arriveP (arriveP = 0).
  const totalRatio = rise ? 1 + followRatio : followRatio
  const arriveP = rise ? 1 / totalRatio : 0

  const valueAt = (p: number) => {
    if (p < arriveP) {
      const t = p / arriveP
      return -riseDistance * (1 - t)
    }
    const t = (p - arriveP) / (1 - arriveP)
    return distance * fallEase(t)
  }

  // quickTo retargets the same underlying tween in place instead of
  // killing/restarting a fresh gsap.to() on every sample. A brand-new
  // tween replayed every `delay` seconds spends most of its duration in
  // an eased "ramp up" that never finishes before the next sample
  // overwrites it — net visible motion is close to zero. quickTo keeps
  // velocity continuous across retargets, so it neither stalls under slow
  // continuous scrolling nor freezes when a new sample lands mid-flight.
  const quickY = gsap.quickTo(target, 'y', { duration: 1.3, ease: 'power3.out' })

  let pendingCall: gsap.core.Tween | null = null
  let latestProgress = 0

  const st = ScrollTrigger.create({
    trigger: scroller,
    start: rise ? 'top bottom' : 'top top',
    end: () => `+=${window.innerHeight * totalRatio}`,
    onUpdate: (self) => {
      latestProgress = self.progress
      if (pendingCall) return
      pendingCall = gsap.delayedCall(delay, () => {
        pendingCall = null
        quickY(valueAt(latestProgress))
      })
    },
    onKill: () => {
      pendingCall?.kill()
      pendingCall = null
    },
  })

  // Paint the correct rise/settle position immediately instead of
  // waiting for the first throttled sample, so sections already past
  // 'top bottom' at mount (e.g. the hero section, visible on load) don't
  // flash at y:0 before their first scroll event.
  latestProgress = st.progress
  gsap.set(target, { y: valueAt(st.progress) })

  return st
}
