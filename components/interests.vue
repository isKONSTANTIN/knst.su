<template>
  <div class="card bordered shadow-lg bg-base-100">
    <div class="card-body">
      <h2 class="card-title">
        Interests
      </h2>

      <div class="flex flex-wrap justify-center">
        <div class="badge">Linux</div>
        <div class="badge">Gnome</div>
        <div class="badge">Gitlab</div>
        <div class="badge">Proxmox</div>
        <div class="badge">LXC</div>
        <div class="badge">Nginx</div>
        <div class="badge">LWJGL</div>
        <div class="badge">OpenGL</div>
        <div class="badge">Java</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "interests"
}
</script>

<style scoped>
  .badge {
    @apply m-1 badge-lg badge-success p-4;
  }
</style>
