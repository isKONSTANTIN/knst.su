<template>
  <ProjectSection
    id="crypto-utils"
    title="CryptoUtils"
    description="A terminal tool for seed generation, encryption, decryption, and backups — the crypto utility belt I wanted and didn't have."
    stack="Written on Java"
    :links="links"
    :image="{ src: '/btc-image.png', alt: 'CryptoUtils', width: 384, height: 384 }"
    :background="{ type: 'gradient', from: 'rgba(242,193,78,0.55)', to: 'rgba(168,104,28,0.55)' }"
  />
</template>

<script setup>
const links = [
  { label: 'GitHub Repository', href: 'https://github.com/isKONSTANTIN/CryptoUtils', icon: 'IconGithub' },
  { label: 'Post on vas3k.club', href: 'https://vas3k.club/post/18251/', icon: 'IconVas3k' },
]
</script>
