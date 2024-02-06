<template>
  <div class="card bordered shadow-lg bg-base-100">
    <div class="card-body">
      <h2 class="card-title">
        Some Of My Projects
      </h2>

      <div class="flex flex-wrap justify-center">

        <a href="https://github.com/FinWave-App" class="card shadow-xl image-full m-1 transition transform hover:scale-105 hover:shadow-lg" style="max-width: 14rem">
          <figure class="p-2">
            <img style="object-fit: contain" src="/FinWave.png">
          </figure>
          <div class="justify-end card-body">
            <h2 class="card-title">FinWave</h2>
            <p>Web application for home financial accounting. Has various charts, plans, repeat transactions and more.</p>
          </div>
        </a>

        <a href="https://lab.knrg.su/isKONSTANTIN/LokUtils" class="card shadow-xl image-full m-1 transition transform hover:scale-105 hover:shadow-lg" style="max-width: 14rem">
          <figure class="p-2">
            <img style="object-fit: contain" src="/LokUtils.png">
          </figure>
          <div class="justify-end card-body">
            <h2 class="card-title">LokUtils</h2>
            <p>Java library for developing applications. Simplifies the creation of a high-performance GUI, as it works directly with OpenGL.</p>
          </div>
        </a>

        <a href="https://f.hil.su/threads/obnovlenie-hil-ui-2.5085/" class="card shadow-xl image-full m-1 transition transform hover:scale-105 hover:shadow-lg" style="max-width: 14rem">
          <figure class="p-2">
            <img style="object-fit: contain" src="/hil.png">
          </figure>
          <div class="justify-end card-body">
            <h2 class="card-title">Hil. UI</h2>
            <p>Hilarious's mod for Minecraft. Adding windows system for better usage experience and chat integration with Telegram.</p>
          </div>
        </a>

        <a href="https://github.com/isKONSTANTIN/CryptoUtils" class="card shadow-xl image-full m-1 transition transform hover:scale-105 hover:shadow-lg" style="max-width: 14rem">
          <figure class="p-2">
            <img style="object-fit: contain" src="/bitcoin.png">
          </figure>
          <div class="justify-end card-body">
            <h2 class="card-title">CryptoUtils</h2>
            <p>Terminal program for simple seed generation, encryption, decryption, backup and more.</p>
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
