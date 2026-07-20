<template>
  <div id="afterwords">
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
                <NuxtLink to="https://github.com/FinWave-App/Reactive-Configs-Tool" class="text-accent-400 hover:underline">The Reactive Configs Tool</NuxtLink>:
                a dynamic way to manage configuration files in Java, with real-time updates and no restarts.
              </div>

              <div class="mt-2 xl:mt-0 font-bold text-center xl:text-left">
                <NuxtLink to="https://github.com/FinWave-App/Telegram-Abstractions-Tools" class="text-accent-400 hover:underline">Telegram Abstractions Tools</NuxtLink>:
                an abstraction layer that takes the boilerplate out of building Telegram bots.
              </div>

              <div class="mt-4 font-bold text-right opacity-70">
                ...And other and other projects
              </div>
            </div>
          </div>

          <div class="flex gap-2 mt-5 flex-wrap justify-center items-center xl:justify-start">
            <GlassButton to="#main">
              <template #icon><IconChevronUp /></template>
              About Me
            </GlassButton>

            <GlassButton :to="contacts.github">
              <template #icon><IconGithub /></template>
              My Github
            </GlassButton>

            <GlassButton :to="contacts.telegram">
              <template #icon><IconTelegram /></template>
              My Telegram
            </GlassButton>

            <GlassButton :to="contacts.email">
              <template #icon><IconEmail /></template>
              My Email
            </GlassButton>
          </div>
        </div>
      </div>

      <KnstFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { contacts } from '~/data/site'
</script>
