<template>
  <div>
    <Navbar class="fixed z-10" />

    <ScreensMe />
    <ProjectSection v-for="project in projects" :key="project.id" v-bind="project" />
    <ScreensAfterwords />
  </div>
</template>

<script setup lang="ts">
import { projects } from '~/data/projects'
</script>
