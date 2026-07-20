<template>
  <ProjectSection
    id="telegram-ai"
    title="Telegram AI"
    description="An open-source Telegram bot for chatting with ChatGPT and generating images with DALL·E 3, with some extra features on top of OpenAI's tools. The public instance still runs — just don't expect active support."
    stack="Written on Java, MVP on Go"
    :links="links"
    :image="{ src: '/telegram-ai-image.png', alt: 'Telegram AI', width: 384, height: 384, rounded: true }"
    :background="{ type: 'gradient', from: 'rgba(56,189,248,0.55)', to: 'rgba(251,146,60,0.5)' }"
  />
</template>

<script setup>
const links = [
  { label: 'Public Instance', href: 'https://t.me/godlike_gpt_bot', icon: 'IconTelegram' },
  { label: 'GitHub Repository', href: 'https://github.com/isKONSTANTIN/Telegram-AI', icon: 'IconGithub' },
  { label: 'Post on vas3k.club', href: 'https://vas3k.club/project/28328/', icon: 'IconVas3k' },
]
</script>
