<template>
  <div class="card bordered shadow-lg bg-base-100">
    <div class="card-body">
      <h2 class="card-title">
        Something Interesting
      </h2>

      <div class="flex flex-wrap justify-center">
        <a href="https://hil.su" class="badge">hil.su</a>
        <a href="https://medals.m-k.mx/" class="badge">medals.m-k.mx</a>
        <a href="https://knrg.su" class="badge">knrg.su</a>
        <a href="https://github.com/isKONSTANTIN" class="badge">my github</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "someInteresting"
}
</script>

<style scoped>
.badge {
  @apply m-1 badge-lg badge-accent p-4 transform hover:scale-105;
}
</style>
