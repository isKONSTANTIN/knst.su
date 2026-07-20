import { seo } from './data/site'

export default defineNuxtConfig({
  ssr: false,

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: seo.title,
      // Crawlers (Telegram/Twitter/Discord unfurlers) don't execute JS, so the
      // tags that matter for link previews have to live here — this is what
      // gets baked into the static output.
      meta: [
        { name: 'description', content: seo.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: seo.title },
        { property: 'og:description', content: seo.description },
        { property: 'og:url', content: seo.url },
        { property: 'og:image', content: seo.image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: seo.title },
        { name: 'twitter:description', content: seo.description },
        { name: 'twitter:image', content: seo.image },
      ],
    },
  },

  router: {
    options: {
      // Handles the `to="#section"` anchor links in the navbar.
      scrollBehaviorType: 'smooth',
    },
  },

  components: [
    { path: '~/components/icons', pathPrefix: false, prefix: 'Icon', global: true },
    { path: '~/components/ui', pathPrefix: false },
    '~/components',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
  ],

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google' },
      { name: 'Inter', provider: 'google' },
    ],
  },
})
