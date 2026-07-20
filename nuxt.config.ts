import { NuxtConfig } from '@nuxt/types'

const SEO_TITLE = 'knst.su'
const SEO_DESCRIPTION = "Konstantin (isKONSTANTIN) — fullstack developer. A portfolio of real products, built end-to-end."
const SEO_URL = 'https://knst.su'
const SEO_IMAGE = `${SEO_URL}/og-image.jpg`

const config: NuxtConfig = {
  ssr: false,

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: SEO_TITLE,
      meta: [
        { name: 'description', content: SEO_DESCRIPTION },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: SEO_TITLE },
        { property: 'og:description', content: SEO_DESCRIPTION },
        { property: 'og:url', content: SEO_URL },
        { property: 'og:image', content: SEO_IMAGE },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: SEO_TITLE },
        { name: 'twitter:description', content: SEO_DESCRIPTION },
        { name: 'twitter:image', content: SEO_IMAGE },
      ],
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
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

  runtimeConfig: {
    public: {
    },
  },

  // TEMPORARY: allows viewing the dev server through a localtunnel URL
  // while testing remotely. Revert this before committing.
  vite: {
    server: {
      allowedHosts: true,
    },
  },
}

export default config