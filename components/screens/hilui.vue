<template>
  <ProjectSection
    id="hilui"
    title="Hil. UI 2"
    description="A UI mod for Hilarious — adds a proper window system and Telegram chat integration for a smoother experience across the project."
    stack="Written on Java"
    :links="links"
    :image="{ src: '/hilarious-logo.png', alt: 'Hilarious logo', width: 384, height: 384 }"
    :background="{ type: 'image', src: '/hil-background.jpg' }"
  />
</template>

<script setup>
const links = [
  { label: 'Website', href: 'https://hil.su/', icon: 'IconGlobe' },
  { label: 'Forum', href: 'https://f.hil.su/threads/obnovlenie-hil-ui-2.5085/', icon: 'IconGlobe' },
]
</script>
