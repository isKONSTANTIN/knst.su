<template>
  <div class="navbar mb-2 shadow-lg bg-base-100 text-base-content rounded-box min-w-min">
    <div class="px-2 mx-2 navbar-start">
    <span class="text-lg font-bold">
      Knst.su
    </span>
    </div>

    <div class="px-2 mx-2 navbar-center lg:flex">
      <div class="flex justify-center items-center">
        <a href="/" class="btn btn-ghost btn-sm rounded-btn">
          Home
        </a>

        <div class="dropdown">
          <div tabindex="0" class="m-1 btn btn-ghost btn-sm rounded-btn">Contacts</div>
          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a href="https://t.me/isKONSTANTIN">Telegram</a>
            </li>
            <li>
              <a href="mailto:me@knst.su">me@knst.su</a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="navbar-end">
      <a class="btn btn-ghost btn-sm rounded-btn">
        : 3
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>

</style>
