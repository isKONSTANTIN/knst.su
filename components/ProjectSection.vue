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
      <template v-else-if="background.type === 'image'">
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <img
            ref="bgImageEl"
            :src="background.src"
            class="h-[135%] w-[120%] max-w-none -ml-[10%] object-cover"
            loading="eager"
            alt=""
          />
        </div>
        <div class="absolute inset-0 -z-10 bg-ink-950/45" />
      </template>

      <div class="hero flex-1">
        <!--
          Two nested boxes on purpose. `triggerEl` stays put and is what the
          reveal ScrollTrigger measures; `contentEl` is what useViscousFollow
          translates by up to several hundred px. They have to be different
          elements: ScrollTrigger measures a non-pinned trigger with
          getBoundingClientRect(), which includes transforms, so triggering off
          the moved element would compute the start position against wherever
          the follow effect happened to have pushed it — and recompute it
          differently on every refresh.
        -->
        <div ref="triggerEl" class="hero-content w-11/12">
          <div ref="contentEl" class="flex flex-col items-center xl:flex-row xl:justify-between w-full gap-16">
            <div class="text-center xl:text-left flex flex-col justify-center items-center xl:items-start max-w-md">
              <div ref="titleEl" class="opacity-0 font-display text-5xl xl:text-6xl font-bold text-stone-100">
                {{ title }}
              </div>

              <p ref="descEl" class="opacity-0 mt-6 font-bold text-stone-200 max-w-lg text-lg">{{ description }}</p>
              <p v-if="stack" ref="stackEl" class="opacity-0 mt-2 text-stone-300/80">{{ stack }}</p>

              <div ref="linksWrapEl" class="opacity-0 flex gap-2 mt-5 w-full flex-wrap justify-center items-center xl:justify-start">
                <GlassButton v-for="link in links" :key="link.href" :to="link.href">
                  <template #icon>
                    <component :is="link.icon" />
                  </template>
                  {{ link.label }}
                </GlassButton>
              </div>
            </div>

            <div ref="imageWrapEl" class="opacity-0 flex xl:w-1/2 items-center justify-center">
              <!-- SVG logos skip @nuxt/image (nothing to optimize) and get an
                   explicit box rather than the raster branch's max-* caps: this
                   project's logo carries only a viewBox, no intrinsic width or
                   height, so `w-auto` resolves to zero and the image vanishes.
                   Vectors scale losslessly into whatever box they're given;
                   rasters get capped instead so they're never upscaled. -->
              <img
                v-if="isSvg"
                :src="image.src"
                :alt="image.alt"
                :width="image.width"
                :height="image.height"
                class="w-72 h-72 xl:w-96 xl:h-96"
              />
              <img
                v-else
                :src="image.src"
                :alt="image.alt"
                :width="image.width"
                :height="image.height"
                loading="lazy"
                class="max-w-72 max-h-72 xl:max-h-96 xl:max-w-96 w-auto h-auto"
                :class="image.rounded ? 'rounded-3xl' : ''"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import type { Project } from '~/data/projects'

const props = defineProps<Project>()

const isSvg = computed(() => props.image.src.endsWith('.svg'))

const rootEl = ref<HTMLElement | null>(null)
const triggerEl = ref<HTMLElement | null>(null)
const contentEl = ref<HTMLElement | null>(null)
const titleEl = ref<HTMLElement | null>(null)
const descEl = ref<HTMLElement | null>(null)
const stackEl = ref<HTMLElement | null>(null)
const linksWrapEl = ref<HTMLElement | null>(null)
const imageWrapEl = ref<HTMLElement | null>(null)
const bgImageEl = ref<HTMLElement | null>(null)

/**
 * Containers start hidden behind a static `opacity-0` class so nothing flashes
 * fully-visible before the timeline is built (waiting on fonts takes a moment).
 * They get un-hidden in the same tick the fromTo calls below make their actual
 * reveal targets invisible.
 */
const revealTargets = () =>
  [titleEl.value, descEl.value, stackEl.value, linksWrapEl.value, imageWrapEl.value]
    .filter((el): el is HTMLElement => el !== null)

let ctx: gsap.Context | undefined
/** Guards against the component unmounting while `document.fonts.ready` is still pending. */
let alive = true

onMounted(async () => {
  await document.fonts?.ready
  if (!alive) return

  try {
    ctx = gsap.context(() => {
      const titleSplit = splitChars(titleEl.value!)
      const descSplit = splitWords(descEl.value!)

      gsap.set(revealTargets(), { opacity: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          // A flat px offset, not a percentage of either the viewport or the
          // content box: viewport height swings widely across devices, and the
          // content box's own height swings just as much between stacked and
          // side-by-side layouts — either as a percentage base made the
          // effective buffer wildly inconsistent. Same lesson as the distances
          // in useViscousFollow: a fixed px amount is the one thing that
          // doesn't move around underneath us.
          trigger: triggerEl.value!,
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

      tl.fromTo(linksWrapEl.value!.children, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06 }, '-=0.15')
        .fromTo(imageWrapEl.value!, { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 0.9, ease: 'power1.out' }, '<0.1')

      if (props.background.type === 'image' && bgImageEl.value) {
        useScrollParallax(bgImageEl.value, rootEl.value!)
      }

      useViscousFollow(contentEl.value!, rootEl.value!)
    }, rootEl.value!)
  } catch (err) {
    // With ssr: false there is no non-JS render path, so a thrown animation
    // would otherwise leave this section permanently blank behind opacity-0.
    console.error('[ProjectSection] reveal failed, showing content unanimated', err)
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
.gradient-flow {
  animation: gradientFlow 9s ease-in-out infinite;
}

@keyframes gradientFlow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>
