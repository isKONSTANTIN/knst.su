<template>
  <div class="navbar scrim-strong fixed top-0 inset-x-0 z-50">
    <div class="navbar-start w-full">
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
          <IconMenu />
        </div>

        <!-- daisyUI animates .dropdown-content open/close via `transform: scale()`.
             Chromium doesn't paint `backdrop-filter` on an element that also has a
             `transform`, so the blur has to live on an untransformed child instead
             of directly on the `dropdown-content` element. -->
        <div tabindex="0" class="dropdown-content w-52 rounded-box z-1 p-2">
          <MenuItems class="menu menu-compact bg-base-100 z-10 p-2 px-2 gap-1 rounded-box" />
        </div>
      </div>

      <div class="hidden md:flex w-full justify-center">
        <MenuItems class="menu menu-horizontal px-1 brightness-110" />
      </div>
    </div>
  </div>
</template>
