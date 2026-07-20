<template>
  <div id="afterwords">
    <div class="min-h-screen">
      <div class="min-h-screen flex flex-col">
        <div class="hero flex-1">
          <div class="hero-content flex-col">

            <div>
              <div class="font-display text-5xl xl:text-6xl font-extrabold text-stone-100 text-center xl:text-left">
                Is That All?
              </div>

              <div class="mt-5 gap-3 text-stone-300">
                <div class="font-bold text-center xl:text-left">
                  No! The above projects are interesting, but there are more noteworthy creations:
                </div>

                <div class="mt-4 xl:mt-2 font-bold text-center xl:text-left">
                  <nuxt-link to="https://github.com/FinWave-App/Reactive-Configs-Tool" class="text-telegram-400 hover:underline">The Reactive Configs Tool</nuxt-link>:
                  a dynamic way to manage configuration files in Java, with real-time updates and no restarts.
                </div>

                <div class="mt-2 xl:mt-0 font-bold text-center xl:text-left">
                  <nuxt-link to="https://github.com/FinWave-App/Telegram-Abstractions-Tools" class="text-telegram-400 hover:underline">Telegram Abstractions Tools</nuxt-link>:
                  an abstraction layer that takes the boilerplate out of building Telegram bots.
                </div>

                <div class="mt-4 font-bold text-right opacity-70">
                  ...And other and other projects
                </div>
              </div>
            </div>

            <div class="flex gap-2 mt-5 flex-wrap justify-center items-center xl:justify-start">
              <GlassButton to="#main">
                <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </template>
                About Me
              </GlassButton>

              <GlassButton to="https://github.com/isKONSTANTIN/">
                <template #icon><IconGithub /></template>
                My Github
              </GlassButton>

              <GlassButton to="https://t.me/cotantin">
                <template #icon><IconTelegram /></template>
                My Telegram
              </GlassButton>

              <GlassButton to="mailto:me@knst.su">
                <template #icon><IconEmail /></template>
                My Email
              </GlassButton>
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
