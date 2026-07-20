<template>
  <ul class="gap-2 md:gap-4 px-2 font-bold">
    <li v-for="item in navItems" :key="item.href" @click="handleClick">
      <NuxtLink :to="item.href">
        <component :is="item.icon" class="size-6" />
        {{ item.label }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { navItems } from '~/data/site'

/**
 * daisyUI's hover-dropdown stays open as long as the trigger keeps focus, so
 * a tapped link would leave the menu hanging over the section it just
 * scrolled to. Blurring whatever is focused closes it.
 */
const handleClick = () => {
  const el = document.activeElement
  if (el instanceof HTMLElement) el.blur()
}
</script>
