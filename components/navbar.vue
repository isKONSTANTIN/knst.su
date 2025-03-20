<template>
  <div class="navbar bg-white bg-opacity-10 backdrop-blur shadow">
    <div class="navbar-start w-full backdrop-blur-0 brightness-110">
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>

        <menu-items tabindex="0" class="menu menu-compact dropdown-content p-2 px-2 gap-1 bg-white backdrop-blur bg-opacity-10 rounded-box w-52">
        </menu-items>
      </div>


      <div class="hidden md:flex w-full justify-center">
        <menu-items class="menu menu-horizontal px-1 brightness-110">
        </menu-items>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>