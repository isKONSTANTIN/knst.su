<template>
  <div id="hilui">
    <div class="min-h-screen">
      <div class="min-h-screen flex flex-col">
        <div class="hero flex-1" style="background-image: url('/hil-background.jpg');">
          <div class="hero-overlay bg-opacity-30"></div>
          <div class="hero-content flex-col xl:flex-row xl:justify-between w-11/12 gap-16">
            <div class="text-center xl:text-left flex flex-col justify-center items-center xl:items-start max-w-md">
              <div class="flex gap-2 items-end">
                <p>#3</p>
                <div class="text-stone-200 text-3xl xl:text-5xl font-bold w-title-text flex gap-2 items-end">
                  Hil. UI 2
                </div>
              </div>

              <p class="mt-6 font-bold text-stone-200 w-title-text">Hilarious's mod for Minecraft. Adding windows system for better usage experience and chat integration with Telegram.</p>
              <p class="mt-2">Written on Java</p>

              <div class="flex gap-2 mt-5 flex-wrap justify-center items-center xl:justify-start">
                <nuxt-link to="https://hil.su/" class="btn btn-ghost bg-white bg-opacity-10 backdrop-blur text-stone-300 flex-1 flex-nowrap text-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>

                  Website
                </nuxt-link>

                <nuxt-link to="https://f.hil.su/threads/obnovlenie-hil-ui-2.5085/" class="btn btn-ghost bg-white bg-opacity-10 backdrop-blur text-stone-300 flex-1 flex-nowrap text-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>

                  Forum
                </nuxt-link>
              </div>
            </div>

            <div class="flex xl:w-1/2 items-center justify-center">
              <div>
                <img src="/hilarious-logo.png" class="max-w-72 max-h-72 xl:max-h-96 xl:max-w-96" alt="Hil.su logo view"/>
              </div>
            </div>
          </div>

          <nuxt-link to="#crypto-utils" class="relative mt-auto bg-white rounded-t-3xl p-2 pt-4 pb-0 bg-opacity-10 select-none w-36">
            <div class="flex items-center flex-col animate-bounce mt-3 text-stone-300">
              <p class="font-bold text-xl mb-0.5"> Next Project </p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>


<style scoped>
.w-title-text {
  max-width: 40rem
}

.background {
  background: linear-gradient(156deg, rgba(16,185,130,0.5) 23%, rgba(14,165,232,0.5) 90%);
}

.animate-bounce {
  animation: bounce 3s infinite;
}

</style>