<template>
  <div class="card bordered shadow-lg bg-base-100">
    <div class="card-body">
      <h2 class="card-title">
        Some Of My Projects
      </h2>

      <div class="flex flex-wrap justify-center">
        <a href="https://monsave.su" class="card shadow-xl image-full m-1 transition transform hover:scale-105 hover:shadow-lg" style="max-width: 14rem">
          <figure>
            <img style="object-fit: contain" src="/MoneySaver.png">
          </figure>
          <div class="justify-end card-body">
            <h2 class="card-title">MoneySaver</h2>
            <p>Web application for home financial accounting. Has various charts, plans, repeat transactions and more.</p>
          </div>
        </a>
        <a href="https://lab.knrg.su/isKONSTANTIN/LokUtils" class="card shadow-xl image-full m-1 transition transform hover:scale-105 hover:shadow-lg" style="max-width: 14rem">
          <figure>
            <img style="object-fit: contain" src="/LokUtils.png">
          </figure>
          <div class="justify-end card-body">
            <h2 class="card-title">LokUtils</h2>
            <p>Java library for developing applications. Simplifies the creation of a high-performance GUI, as it works directly with OpenGL.</p>
          </div>
        </a>

        <a href="https://hil.su" class="card shadow-xl image-full m-1 transition transform hover:scale-105 hover:shadow-lg" style="max-width: 14rem">
          <figure>
            <img style="object-fit: contain" src="/hil.png">
          </figure>
          <div class="justify-end card-body">
            <h2 class="card-title">Hil. UI</h2>
            <p>Hilarious's mod for Minecraft. Adding windows system for better usage experience and chat integration with Telegram.</p>
          </div>
        </a>

        <a href="https://github.com/isKONSTANTIN/LokPackager" class="card shadow-xl image-full m-1 transition transform hover:scale-105 hover:shadow-lg" style="max-width: 14rem">
          <figure>
            <img style="object-fit: contain" src="/LokPackager.png">
          </figure>
          <div class="justify-end card-body">
            <h2 class="card-title">LokPackager</h2>
            <p>Simple binary files packager on Java.</p>
          </div>
        </a>

        <a href="https://github.com/isKONSTANTIN/LokEngine" class="card shadow-xl image-full m-1 transition transform hover:scale-105 hover:shadow-lg" style="max-width: 14rem">
          <figure>

          </figure>
          <div class="justify-end card-body transition transform hover:scale-105 hover:shadow-lg">
            <h2 class="card-title">LokEngine</h2>
            <p>The first attempt to create something complex in terms of architecture. Later it was converted to LokUtils.</p>
          </div>
        </a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "someProjects"
}
</script>

<style scoped>

</style>
