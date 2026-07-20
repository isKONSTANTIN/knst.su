<template>
  <div id="main" ref="rootEl" class="hero min-h-screen relative overflow-hidden">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <img
        ref="bgImageEl"
        src="/site-background.jpg"
        class="h-[135%] w-[120%] max-w-none -ml-[10%] object-cover"
        loading="eager"
        fetchpriority="high"
        alt=""
      />
    </div>
    <div class="absolute inset-0 -z-10 bg-ink-950/10"></div>

    <div ref="contentEl" class="hero-content flex-col xl:flex-row xl:justify-between w-11/12 xl:items-start gap-16">
      <div class="max-w-xl">
        <div ref="headlineEl" class="opacity-0 font-display text-3xl xl:text-7xl font-super-bold text-stone-100 text-center xl:text-left mt-16 xl:mt-0">
          <p>Hi, I'm</p>
          <p class="shine text-nowrap">Konstantin</p>
        </div>
        <p ref="copyEl" class="opacity-0 mt-5 text-stone-200 text-center xl:text-left max-w-md font-bold">
          A fullstack developer. I build products end-to-end and I'm genuinely into solving real business problems, not just shipping code.
        </p>

        <div ref="ctaWrapEl" class="opacity-0 flex gap-2 mt-5 flex-wrap justify-center items-center xl:justify-start">
          <GlassButton to="#finwave">
            <template #icon><IconBriefcase class="size-5" stroke-width="2" /></template>
            My Projects
          </GlassButton>

          <GlassButton :to="contacts.github">
            <template #icon><IconGithub /></template>
            My Github
          </GlassButton>

          <GlassButton :to="contacts.telegram">
            <template #icon><IconTelegram /></template>
            My Telegram
          </GlassButton>
        </div>
      </div>

      <div class="flex flex-col justify-center max-w-96">
        <p ref="interestsHeadingEl" class="opacity-0 font-display font-extrabold text-3xl xl:text-4xl text-stone-100 text-center">
          Interests
        </p>
        <div ref="skillsWrapEl" class="opacity-0 flex gap-2 mt-3 flex-wrap">
          <div v-for="skill in skills" :key="skill" class="flex-1">
            <div class="skill">
              {{ skill }}
            </div>
          </div>
        </div>
        <p ref="andMoreEl" class="opacity-0 font-bold text-right"> ... and more</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { contacts, skills } from '~/data/site'

const rootEl = ref<HTMLElement | null>(null)
const contentEl = ref<HTMLElement | null>(null)
const bgImageEl = ref<HTMLElement | null>(null)
const headlineEl = ref<HTMLElement | null>(null)
const copyEl = ref<HTMLElement | null>(null)
const ctaWrapEl = ref<HTMLElement | null>(null)
const interestsHeadingEl = ref<HTMLElement | null>(null)
const skillsWrapEl = ref<HTMLElement | null>(null)
const andMoreEl = ref<HTMLElement | null>(null)

/**
 * Containers start hidden behind a static `opacity-0` class so nothing flashes
 * fully-visible between first paint and the timeline starting (fonts loading
 * plus the timeline's own delay can take a while). They get un-hidden in the
 * same tick the fromTo calls below make their actual reveal targets invisible.
 */
const revealTargets = () =>
  [headlineEl.value, copyEl.value, ctaWrapEl.value, interestsHeadingEl.value, skillsWrapEl.value, andMoreEl.value]
    .filter((el): el is HTMLElement => el !== null)

let ctx: gsap.Context | undefined
/** Guards against the component unmounting while `document.fonts.ready` is still pending. */
let alive = true

onMounted(async () => {
  await document.fonts?.ready
  if (!alive) return

  try {
    ctx = gsap.context(() => {
      const headlineSplit = splitChars(headlineEl.value!)
      const copySplit = splitWords(copyEl.value!)

      gsap.set(revealTargets(), { opacity: 1 })

      const tl = gsap.timeline({ delay: 0.6, defaults: { ease: 'sine.out' } })

      tl.fromTo(headlineSplit.chars, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.02 })
        .fromTo(copySplit.words, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.012 }, '-=0.25')
        .fromTo(ctaWrapEl.value!.children, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 }, '-=0.2')
        .fromTo(interestsHeadingEl.value!, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.35')
        .fromTo(skillsWrapEl.value!.children, { autoAlpha: 0, scale: 0.85 }, { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.02 }, '-=0.3')
        .fromTo(andMoreEl.value!, { autoAlpha: 0, y: 4 }, { autoAlpha: 0.6, y: 0, duration: 0.4 })

      if (bgImageEl.value) useScrollParallax(bgImageEl.value, rootEl.value!)

      // No rise phase: the hero is on screen from first paint, so there's no
      // "not yet arrived" state for it to anticipate.
      useViscousFollow(contentEl.value!, rootEl.value!, { rise: false })
    }, rootEl.value!)
  } catch (err) {
    // With ssr: false there is no non-JS render path, so a thrown animation
    // would otherwise leave the hero permanently blank behind opacity-0.
    console.error('[me] hero reveal failed, showing content unanimated', err)
    ctx?.revert()
    ctx = undefined
    gsap.set(revealTargets(), { opacity: 1, visibility: 'visible' })
  }
})

onUnmounted(() => {
  alive = false
  // SplitText instances register themselves with the active context, so
  // reverting it undoes the splits too.
  ctx?.revert()
})
</script>

<style scoped>
.skill {
  @apply transition-colors rounded-md scrim-interactive py-1.5 px-3 font-bold text-stone-200 text-lg text-center text-nowrap;
  /* Backdrop-blur is expensive with ~18 pills repainting on mobile GPUs —
     keep the dark tint but only turn blur on from `sm:` up. */
  @apply !backdrop-blur-none sm:!backdrop-blur-lg;
}

@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.shine {
  background: linear-gradient(
      60deg,
      #f5f5f4 39%,
      #22d3ee 40%,
      #4f46e5 41%,
      #f5f5f4 51%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite;
}

.font-super-bold {
  font-weight: 1000;
}
</style>
