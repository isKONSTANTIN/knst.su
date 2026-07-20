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
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </template>
            My Projects
          </GlassButton>

          <GlassButton to="https://github.com/isKONSTANTIN/">
            <template #icon><IconGithub /></template>
            My Github
          </GlassButton>

          <GlassButton to="https://t.me/cotantin">
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
          <div class="flex-1" v-for="skill in skills" :key="skill">
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

<script setup>
import { gsap } from 'gsap'

const skills = ref([
  "Java",
  "Go",
  "Nuxt",
  "TypeScript",
  "Jooq",
  "PostgreSQL",
  "Prometheus",
  "Grafana",
  "PWA",
  "LXC",
  "Docker",
  "Proxmox",
  "Nginx",
  "Ray Marching",
  "OpenGL",
  "CI/CD",
  "LWJGL",
  "AI"
]);

const rootEl = ref(null)
const contentEl = ref(null)
const bgImageEl = ref(null)
const headlineEl = ref(null)
const copyEl = ref(null)
const ctaWrapEl = ref(null)
const interestsHeadingEl = ref(null)
const skillsWrapEl = ref(null)
const andMoreEl = ref(null)

let ctx
let splits = []

onMounted(async () => {
  await document.fonts?.ready

  ctx = gsap.context(() => {
    const headlineSplit = splitChars(headlineEl.value)
    const copySplit = splitWords(copyEl.value)
    splits.push(headlineSplit, copySplit)

    // The containers were hidden via a static `opacity-0` class so nothing
    // flashes fully-visible between first paint and this point (fonts
    // loading + the timeline's own delay can take a while). Un-hide the
    // containers now — in the same tick — while the actual reveal targets
    // (chars/words/children, set up below via fromTo) stay individually
    // invisible until the timeline animates them in.
    gsap.set([headlineEl.value, copyEl.value, ctaWrapEl.value, interestsHeadingEl.value, skillsWrapEl.value, andMoreEl.value], { opacity: 1 })

    const tl = gsap.timeline({ delay: 0.6, defaults: { ease: 'sine.out' } })

    tl.fromTo(headlineSplit.chars, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.02 })
      .fromTo(copySplit.words, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.012 }, '-=0.25')
      .fromTo(ctaWrapEl.value.children, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 }, '-=0.2')
      .fromTo(interestsHeadingEl.value, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.35')
      .fromTo(skillsWrapEl.value.children, { autoAlpha: 0, scale: 0.85 }, { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.02 }, '-=0.3')
      .fromTo(andMoreEl.value, { autoAlpha: 0, y: 4 }, { autoAlpha: 0.6, y: 0, duration: 0.4 })

    const bgEl = bgImageEl.value?.$el ?? bgImageEl.value
    if (bgEl) useScrollParallax(bgEl, rootEl.value, 15)

    useViscousFollow(contentEl.value, rootEl.value, { rise: false })
  }, rootEl.value)
})

onUnmounted(() => {
  ctx?.revert()
  splits.forEach((s) => s?.revert())
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
