import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: true,

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
  ],

  buildModules: [
  ],

  runtimeConfig: {
    public: {
    },
  }
}

export default config