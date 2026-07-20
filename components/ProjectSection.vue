<template>
  <div :id="id">
    <div ref="rootEl" class="min-h-screen relative flex flex-col overflow-hidden">
      <div
        v-if="background.type === 'gradient'"
        class="absolute inset-0 -z-10 gradient-flow"
        :style="{
          backgroundImage: `linear-gradient(135deg, ${background.from}, ${background.to}, ${background.from}, ${background.to})`,
          backgroundSize: '400% 400%',
        }"
      />
      <template v-else>
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <NuxtImg
            ref="bgImageEl"
            :src="background.src"
            class="h-[135%] w-[120%] max-w-none -ml-[10%] object-cover"
            format="webp"
            quality="100"
            width="2560"
            loading="eager"
            alt=""
          />
        </div>
        <div class="absolute inset-0 -z-10 bg-ink-950/45" />
      </template>

      <div class="hero flex-1">
        <div ref="contentEl" class="hero-content flex-col xl:flex-row xl:justify-between w-11/12 gap-16">
          <div ref="textEl" class="text-center xl:text-left flex flex-col justify-center items-center xl:items-start max-w-md">
            <div ref="titleEl" class="opacity-0 font-display text-3xl xl:text-5xl font-bold text-stone-100">
              {{ title }}
            </div>

            <p ref="descEl" class="opacity-0 mt-6 font-medium text-stone-200 max-w-lg">{{ description }}</p>
            <p v-if="stack" ref="stackEl" class="opacity-0 mt-2 text-stone-300/80">{{ stack }}</p>

            <div ref="linksWrapEl" class="opacity-0 flex gap-2 mt-5 flex-wrap justify-center items-center xl:justify-start">
              <GlassButton v-for="link in links" :key="link.href" :to="link.href">
                <template #icon>
                  <component :is="link.icon" />
                </template>
                {{ link.label }}
              </GlassButton>
            </div>
          </div>

          <div ref="imageWrapEl" class="opacity-0 flex xl:w-1/2 items-center justify-center">
            <img
              v-if="image.src.endsWith('.svg')"
              :src="image.src"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
            />
            <NuxtImg
              v-else
              :src="image.src"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              format="webp"
              loading="lazy"
              class="max-w-72 max-h-72 xl:max-h-96 xl:max-w-96 w-auto h-auto"
              :class="image.rounded ? 'rounded-3xl' : ''"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  stack: { type: String, default: '' },
  links: { type: Array, required: true },
  image: { type: Object, required: true },
  background: { type: Object, required: true },
})

const rootEl = ref(null)
const contentEl = ref(null)
const titleEl = ref(null)
const descEl = ref(null)
const stackEl = ref(null)
const linksWrapEl = ref(null)
const textEl = ref(null)
const imageWrapEl = ref(null)
const bgImageEl = ref(null)

let ctx
let splits = []

onMounted(async () => {
  await document.fonts?.ready

  ctx = gsap.context(() => {
    const titleSplit = splitChars(titleEl.value)
    const descSplit = splitWords(descEl.value)
    splits.push(titleSplit, descSplit)

    // Containers were hidden via a static `opacity-0` class so nothing
    // flashes fully-visible before this point (fonts loading takes a
    // moment). Un-hide them now, in the same tick as the fromTo calls
    // below setting their actual reveal targets invisible.
    const revealTargets = [titleEl.value, descEl.value, linksWrapEl.value, imageWrapEl.value]
    if (stackEl.value) revealTargets.push(stackEl.value)
    gsap.set(revealTargets, { opacity: 1 })

    const tl = gsap.timeline({
      scrollTrigger: {
        // Triggers off contentEl, not rootEl: rootEl is the whole
        // min-h-screen section, which can grow much taller than the
        // viewport once content stacks on narrow screens (hero centers
        // it inside that oversized box). Timing off the section's outer
        // edge then fires while the actual visible content is still far
        // below, deep inside the empty space above it. contentEl is the
        // actual text/image block, so its own top tracks where the
        // content really starts appearing, independent of how tall the
        // surrounding section grows.
        // A flat px offset, not a percentage of either the viewport or
        // contentEl: viewport height swings widely across devices
        // (mobile vs. 2K), and contentEl's own height swings just as
        // much between stacked-on-narrow and side-by-side-on-wide
        // layouts — either as a percentage base made the effective
        // buffer wildly inconsistent (too early on some sizes, too late
        // on others). Same lesson as riseDistance/maxDistance in
        // useViscousFollow: a fixed px amount is the one thing that
        // doesn't move around underneath us.
        trigger: contentEl.value,
        start: 'top bottom-=400',
        toggleActions: 'play none none reverse',
      },
      defaults: { ease: 'sine.out' },
    })

    tl.fromTo(titleSplit.chars, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.015 })
      .fromTo(descSplit.words, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.012 }, '-=0.25')

    if (stackEl.value) {
      tl.fromTo(stackEl.value, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: 0.4 }, '-=0.2')
    }

    tl.fromTo(linksWrapEl.value.children, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06 }, '-=0.15')
      .fromTo(imageWrapEl.value, { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 0.9, ease: 'power1.out' }, '<0.1')

    if (props.background.type === 'image' && bgImageEl.value) {
      const el = bgImageEl.value.$el ?? bgImageEl.value
      useScrollParallax(el, rootEl.value, 15)
    }

    useViscousFollow(contentEl.value, rootEl.value)
  }, rootEl.value)
})

onUnmounted(() => {
  ctx?.revert()
  splits.forEach((s) => s?.revert())
})
</script>

<style scoped>
.gradient-flow {
  animation: gradientFlow 9s ease-in-out infinite;
}

@keyframes gradientFlow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>
