<template>
  <ul class="gap-2 md:gap-4 px-2 font-bold">
    <li @click="handleClick">
      <nuxt-link to="#main">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>

        Me
      </nuxt-link>
    </li>
    <li @click="handleClick">
      <nuxt-link to="#finwave">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>

        Projects
      </nuxt-link>
    </li>
    <li @click="handleClick">
      <nuxt-link to="https://github.com/isKONSTANTIN/">
        <IconGithub class="size-6" />
        Github
      </nuxt-link>
    </li>
    <li @click="handleClick">
      <nuxt-link to="https://t.me/cotantin">
        <IconTelegram />
        Telegram
      </nuxt-link>
    </li>
    <li @click="handleClick">
      <nuxt-link to="mailto:me@knst.su">
        <IconEmail />
        Email
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup>
const handleClick = () => {
  const elem = document.activeElement;
  if (elem) {
    elem?.blur();
  }
};
</script>

<style scoped>

</style>
