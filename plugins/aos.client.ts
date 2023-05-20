// mixins/aos.js
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.AOS = AOS.init({
      // disable: window.innerWidth < 640,
      // offset: 200,
      duration: 600,
      easing: 'ease-in-out-cubic',
      once: true,
    }) // or any other options you need
  }
})
