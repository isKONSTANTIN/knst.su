<template>
  <nuxt-link
    :to="to"
    class="btn btn-ghost scrim-interactive text-stone-200 flex-1 flex-nowrap text-nowrap gap-2"
  >
    <span class="shrink-0 inline-flex">
      <slot name="icon" />
    </span>
    <slot />
  </nuxt-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>
