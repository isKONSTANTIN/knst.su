<template>
  <div id="main" class="hero min-h-screen" style="background-image: url('/site-background.jpg');">
    <div class="hero-overlay bg-opacity-0"></div>
    <div class="hero-content flex-col xl:flex-row xl:justify-between w-11/12 xl:items-start gap-16">
      <div class="max-w-md">
        <div class="text-5xl xl:text-6xl font-extrabold text-stone-200 text-center xl:text-left mt-16 xl:mt-0">
          Hello, I'm
          <div class="shine">Konstantin</div>
        </div>
        <p  data-aos="fade-right" class="mt-5 font-bold text-stone-200 text-center xl:text-left">
          I began my programming journey in 2016 at the age of 13.
        </p>
        <p  data-aos="fade-right" class="font-bold text-stone-200 text-center xl:text-left">
          Since then, I have made significant strides in the IT and am committed to continuous learning and development.
        </p>

        <div class="flex gap-2 mt-5 flex-wrap justify-center items-center xl:justify-start">
          <nuxt-link data-aos="fade-up" data-aos-delay="100" to="#finwave" class="btn btn-ghost bg-white bg-opacity-10 backdrop-blur text-stone-300 flex-1 flex-nowrap text-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>

            My Projects
          </nuxt-link>
          <nuxt-link data-aos="fade-up" data-aos-delay="200" to="https://github.com/isKONSTANTIN/" class="btn btn-ghost bg-white bg-opacity-10 backdrop-blur text-stone-300 flex-1 flex-nowrap text-nowrap">
            <svg class="fill-current" width="24" height="24" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
            </svg>

            My Github
          </nuxt-link>

          <nuxt-link data-aos="fade-up" data-aos-delay="300" to="https://t.me/cotantin" class="btn btn-ghost bg-white bg-opacity-10 backdrop-blur text-stone-300 flex-1 flex-nowrap text-nowrap">
            <svg class="fill-current" width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path class="cls-1" d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z"/>
            </svg>

            My Telegram
          </nuxt-link>
        </div>
      </div>

      <div class="flex flex-col justify-center max-w-96">
        <p class="font-extrabold text-3xl xl:text-4xl text-stone-200 text-center">
          Skills & Interests
        </p>
        <div class="flex gap-2 mt-3 flex-wrap">
          <div class="flex-1" v-for="(skill, i) in skills" data-aos="flip-down" :data-aos-delay="i * 20">
            <div class="skill">
              {{skill}}
            </div>
          </div>

        </div>
        <p class="font-bold text-right opacity-60"> ... and more</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = ref([
  "Java",
  "Go",
  "Nuxt",
  "TypeScript",
  "Jooq",
  "PostgreSQL",
  "Prometheus",
  "Grafana",
  "PWA",
  "LXC",
  "Docker",
  "Proxmox",
  "Nginx",
  "Ray Marching",
  "OpenGL",
  "CI/CD",
  "LWJGL",
  "AI"
]);

onMounted(() => {
  nextTick(() => {
    AOS.refresh();
  });
})

</script>


<style scoped>
.skill {
  @apply transition-colors rounded-md bg-white bg-opacity-10 xl:backdrop-blur py-1.5 px-3 font-bold text-stone-300 text-lg text-center text-nowrap;
}

.skill:hover {
  @apply bg-opacity-20
}

@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.shine {
  background: linear-gradient(
      60deg,
      #e7e5e4 39%,
      #00affa 40%,
      #0190cd 41%,
      #e7e5e4 51%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 500% auto;
  animation: textShine 5s ease-in-out infinite;
}
</style>