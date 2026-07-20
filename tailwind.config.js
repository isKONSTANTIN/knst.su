/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],

  safelist: [
  ],

  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090d',
          900: '#0d1017',
          800: '#141822',
          700: '#1c212e',
        },
        finwave: {
          400: '#34d399',
          600: '#0d9488',
        },
        telegram: {
          400: '#a78bfa',
          600: '#4f46e5',
        },
        hilui: {
          400: '#22d3ee',
          600: '#2563eb',
        },
        crypto: {
          400: '#f2c14e',
          600: '#a8681c',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 2rem + 3vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'section-title': ['clamp(2rem, 1.6rem + 1.6vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      backdropBlur: {
        xs: '2px',
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

