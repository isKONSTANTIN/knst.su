import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  /**
   * Scrolling to `#section` targets is owned by the Lenis plugin's delegated
   * anchor handler. If the router also scrolled, its jump and Lenis' eased
   * tween would fight over the same scroll position mid-animation.
   */
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return false
    return savedPosition ?? { left: 0, top: 0 }
  },
}
