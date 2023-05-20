import vueSmoothScroll from 'vue3-smooth-scroll'

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(vueSmoothScroll)
})
