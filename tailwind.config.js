/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./data/**/*.ts",
    "./nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {
      colors: {
        // Near-black used for every scrim and overlay.
        ink: {
          950: '#08090d',
        },
        // Link colour inside body copy. Per-project brand palettes used to live
        // here too, but the section gradients are authored as rgba() literals
        // in data/projects.ts — the tokens were never referenced and had
        // already drifted out of sync with what actually rendered.
        accent: {
          400: '#a78bfa',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },

  plugins: [
      require("daisyui"),
  ],

  daisyui: {
    themes: [
      'dark',
    ],
  },
}
