import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'

export default defineNuxtPlugin({
  name: 'gsap',
  setup() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText)
  },
})
