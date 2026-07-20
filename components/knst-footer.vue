<template>
  <div class="flex bg-base-300 items-center p-4 justify-between border-t border-base-100">
    <div class="flex items-center gap-2">
      <p class="text-4xl">
        😼
      </p>
      <div class="flex flex-col gap-1 flex-wrap">
        <p class="opacity-60 font-bold text-sm">
          Copyright © {{ year }} isKONSTANTIN 🌈
        </p>
        <NuxtLink to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="opacity-60 font-bold text-sm underline">It's a rickroll. Don't click on it!!!</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
