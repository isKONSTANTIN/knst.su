<template>
  <ProjectSection
    id="finwave"
    title="FinWave.app"
    description="An open-source finance app I built — automatic transactions, custom currencies, multi-account support. It's not maintained anymore, but the code's still there."
    stack="Written on Java & Nuxt 3, MVP on Scala"
    :links="links"
    :image="{ src: '/finwave-logo.svg', alt: 'FinWave logo', width: 384, height: 384 }"
    :background="{ type: 'gradient', from: 'rgba(52,211,153,0.55)', to: 'rgba(13,148,136,0.55)' }"
  />
</template>

<script setup>
const links = [
  { label: 'Organization GitHub Page', href: 'https://github.com/FinWave-App', icon: 'IconGithub' },
]
</script>
