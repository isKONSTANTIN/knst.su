<template>
  <div id="afterwords">
    <div class="min-h-screen">
      <div class="min-h-screen flex flex-col">
        <div class="hero flex-1 background">
          <div class="hero-content flex-col">

            <div>
              <div class="text-5xl xl:text-6xl font-extrabold text-stone-200 text-center xl:text-left">
                Is That All?
              </div>

              <div class="mt-5 gap-3 text-stone-300">
                <div class="font-bold text-center xl:text-left">
                  No! The above projects are interesting, but there are more noteworthy creations:
                </div>

                <div class="mt-2 font-bold text-center xl:text-left">
                  <nuxt-link to="https://github.com/FinWave-App/Reactive-Configs-Tool" class="text-blue-400 hover:underline">The Reactive Configs Tool</nuxt-link>:
                  offers a dynamic approach to managing configuration files in Java, enabling real-time updates without restarting applications.
                </div>

                <div class="font-bold text-center xl:text-left">
                  <nuxt-link to="https://github.com/FinWave-App/Telegram-Abstractions-Tools" class="text-blue-400 hover:underline">Telegram Abstractions Tools</nuxt-link>:
                  simplifies Telegram bot development by providing an intuitive abstraction layer for handling bot contexts.
                </div>

                <div class="font-bold text-center xl:text-left">
                  <nuxt-link to="https://github.com/isKONSTANTIN/LokUtils" class="text-blue-400 hover:underline">LokUtils</nuxt-link>:
                  is a Java library I developed to streamline the creation of high-performance GUIs using OpenGL.
                </div>

                <div class="mt-4 font-bold text-right opacity-70">
                  ...And other and other projects
                </div>
              </div>
            </div>

            <div class="flex gap-2 mt-8">
              <nuxt-link to="#main" class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>

                About Me
              </nuxt-link>
              <nuxt-link to="https://github.com/isKONSTANTIN/" class="btn">
                <svg class="fill-current" width="24" height="24" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                </svg>

                My Github
              </nuxt-link>

              <nuxt-link to="https://t.me/cotantin" class="btn">
                <svg class="fill-current" width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path class="cls-1" d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z"/>
                </svg>

                My Telegram
              </nuxt-link>

              <nuxt-link to="mailto:me@knst.su" class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

                My Email
              </nuxt-link>
            </div>
          </div>
        </div>
        <knst-footer/>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>


<style scoped>

</style>