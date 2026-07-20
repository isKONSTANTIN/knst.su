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

- `data/projects.ts` — every project's copy, links, image and background, plus the types `ProjectSection` is built against. Adding or editing a project happens here and nowhere else.
- `data/site.ts` — contacts, nav items, skills and the SEO strings (`nuxt.config.ts` imports these too, so this module stays free of Nuxt-specific imports)
- `pages/index.vue` — the only route; renders the hero, a `v-for` over `projects`, and the closing section
- `components/ProjectSection.vue` — the shared project section: layout, background, reveal timeline
- `components/screens/*.vue` — the two bespoke sections, `me.vue` (hero) and `afterwords.vue`
- `components/icons/*.vue`, `components/ui/GlassButton.vue` — shared, globally auto-imported building blocks

### Animation

All three composables must be called from inside an active `gsap.context()` — the context owns their cleanup.

- `composables/useCharSplit.ts` — `splitChars` / `splitWords`, thin wrappers over GSAP `SplitText`
- `composables/useScrollParallax.ts` — scroll-linked parallax tween for section backgrounds
- `composables/useViscousFollow.ts` — throttled, scroll-progress-mapped drift of a section's foreground content; desktop-only via `gsap.matchMedia()`

Sections start hidden behind a static `opacity-0` and are un-hidden by their timeline, so content is never visible un-animated. Because `ssr: false` leaves no non-JS render path, both sections fall back to showing content unanimated if their timeline throws.
