# knst.su

Personal site of Konstantin (isKONSTANTIN) — a single-page portfolio built with Nuxt 3.

## Stack

- **Nuxt 3** (Vue 3), `ssr: false` — statically generated SPA
- **Tailwind CSS + daisyUI** (`dark` theme)
- **GSAP + ScrollTrigger** for the hero load-in timeline, per-section scroll animations, and background parallax
- **@nuxt/image** for optimized images, **@nuxt/fonts** for self-hosted Space Grotesk / Inter

## Development

```bash
npm install
npm run dev
```

## Production

The site is deployed as a static build served by Nitro's Node server:

```bash
npm run generate   # outputs .output/public + .output/server
```

`Dockerfile` copies `.output/` and runs `node server/index.mjs`. CI (`.github/workflows/build.yml`) builds this on every push to `main` and publishes a Docker image to `ghcr.io/iskonstantin/knst.su`.

## Structure

- `pages/index.vue` — the only route; assembles section components
- `components/screens/*.vue` — hero (`me.vue`) and project sections
- `components/ProjectSection.vue` — shared template for project sections (layout, background, GSAP timeline)
- `components/icons/*.vue`, `components/ui/GlassButton.vue` — shared, globally auto-imported building blocks
- `composables/useParallax.ts` — scroll-linked parallax tween, called from within a component's `gsap.context()`
