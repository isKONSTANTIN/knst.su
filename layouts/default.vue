<template>
  <slot />
</template>

<script setup>

// Crawlers (Telegram/Twitter/Discord unfurlers) don't execute JS, so the tags
// that actually matter for link previews live in nuxt.config.ts's app.head,
// which is baked into the static output regardless of render mode. This call
// just keeps the client-side <title>/meta consistent after hydration.
useSeoMeta({
  title: 'knst.su',
  ogTitle: 'knst.su',
  description: "Konstantin (isKONSTANTIN) — fullstack developer. A portfolio of real products, built end-to-end.",
  ogDescription: "Konstantin (isKONSTANTIN) — fullstack developer. A portfolio of real products, built end-to-end.",

  ogUrl: 'https://knst.su',
  ogImage: 'https://knst.su/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'knst.su',
  twitterDescription: "Konstantin (isKONSTANTIN) — fullstack developer. A portfolio of real products, built end-to-end.",
  twitterImage: 'https://knst.su/og-image.jpg',
})

</script>

<style scoped>

</style>