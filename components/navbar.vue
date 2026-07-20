<template>
  <div class="navbar scrim-strong fixed top-0 inset-x-0 z-50">
    <div class="navbar-start w-full">
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
          <IconMenu />
        </div>

        <MenuItems tabindex="0" class="menu menu-compact dropdown-content p-2 px-2 gap-1 scrim-strong rounded-box w-52" />
      </div>

      <div class="hidden md:flex w-full justify-center">
        <MenuItems class="menu menu-horizontal px-1 brightness-110" />
      </div>
    </div>
  </div>
</template>
