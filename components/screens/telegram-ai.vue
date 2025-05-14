<template>
  <div id="telegram-ai">
    <div class="min-h-screen">
      <div class="min-h-screen flex flex-col">
        <div class="hero flex-1 background">
          <div class="hero-content flex-col xl:flex-row xl:justify-between w-11/12 gap-16">
            <div class="text-center xl:text-left flex flex-col justify-center items-center xl:items-start max-w-md">
              <div data-aos="zoom-out" class="flex gap-2 items-end">
                <p>#2</p>
                <div class="text-stone-200 text-3xl xl:text-5xl font-bold w-title-text flex gap-2 items-end">
                  Telegram AI
                </div>
              </div>

              <p data-aos="fade-right" class="mt-6 font-bold text-stone-200 w-title-text">Open-source Telegram bot for convenient and advanced interaction with ChatGPT and DALL·E 3, offering expanded features through OpenAI Tools.</p>
              <p data-aos="fade-right" data-aos-delay="300" class="mt-2">Written on Java, MVP on Go</p>

              <div class="flex gap-2 mt-5 flex-wrap justify-center items-center xl:justify-start">
                <nuxt-link data-aos="fade-up" data-aos-delay="400" to="https://t.me/godlike_gpt_bot" class="btn btn-ghost bg-white bg-opacity-10 backdrop-blur text-stone-300 flex-1 flex-nowrap text-nowrap">
                  <svg class="fill-current" width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path class="cls-1" d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z"/>
                  </svg>

                  Public Paid Instance
                </nuxt-link>
                <nuxt-link data-aos="fade-up" data-aos-delay="500" to="https://gpt.knst.su" class="btn btn-ghost bg-white bg-opacity-10 backdrop-blur text-stone-300 flex-1 flex-nowrap text-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>

                  Website
                </nuxt-link>
                <nuxt-link data-aos="fade-up" data-aos-delay="600" to="https://github.com/isKONSTANTIN/Telegram-AI" class="btn btn-ghost bg-white bg-opacity-10 backdrop-blur text-stone-300 flex-1 flex-nowrap text-nowrap">
                  <svg class="fill-current" width="24" height="24" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                  </svg>

                  GitHub Repository
                </nuxt-link>

                <nuxt-link data-aos="fade-up" data-aos-delay="700" to="https://vas3k.club/project/28328/" class="btn btn-ghost bg-white bg-opacity-10 backdrop-blur text-stone-300 flex-1 flex-nowrap text-nowrap">
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                    <path d="M61.7 61.8C27.8 95.7 0 124 0 124.5S29.5 155 65.5 191l65.5 65.5L65.5 322C29.5 358 0 387.9 0 388.5 0 389.8 122.2 512 123.5 512c.6 0 30.5-29.5 66.5-65.5l65.5-65.5 65.5 65.5c36 36 66 65.5 66.5 65.5.6 0 28.8-27.8 62.8-61.8l61.7-61.7-66-66-66-66 66-66 66-66-62.3-62.3L387.5 0l-66 66-66 66-66-66-66-66-61.8 61.8z"/>
                  </svg>

                  Post on vas3k.club
                </nuxt-link>
              </div>
            </div>

            <div class="flex xl:w-1/2 items-center justify-center">
              <div>
                <img data-aos="zoom-in" data-aos-duration="500" src="/telegram-ai-image.jpg" class="max-w-72 max-h-72 xl:max-h-96 xl:max-w-96 rounded-3xl" alt="Telegram AI logo view"/>
              </div>
            </div>
          </div>

          <nuxt-link to="#hilui" class="relative mt-auto bg-white rounded-t-3xl p-2 pt-4 pb-0 bg-opacity-10 select-none w-36">
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
  background: linear-gradient(156deg, rgba(112, 103, 250, 0.5) 23%, rgba(49, 13, 151, 0.5) 90%);
}

.animate-bounce {
  animation: bounce 3s infinite;
}

</style>