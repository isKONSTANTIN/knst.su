<template>
  <div class="mt-5 flex flex-col justify-center items-center w-full">
    <navbar class="mb-8 w-4/5"></navbar>

    <div class="content">
      <div class="hiddenPanel">
        <about-me class="row-span-2"></about-me>
        <interests></interests>
        <some-interesting></some-interesting>
        <some-projects class="row-span-3 xl:col-span-2"></some-projects>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar";
import AboutMe from "../components/aboutMe";
import Interests from "../components/interests";
import SomeProjects from "../components/someProjects";
import SomeInteresting from "../components/someInteresting";
export default {
  name: 'IndexPage',
  components: {SomeInteresting, SomeProjects, Interests, AboutMe, Navbar}
}
</script>
