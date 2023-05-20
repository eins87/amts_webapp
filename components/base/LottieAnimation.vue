<template>
  <client-only>
    <Vue3Lottie :animationLink="animationLink" />
  </client-only>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'

export default defineNuxtComponent({
  name: 'LottieAnimation',
  components: { Vue3Lottie },
  props: {
    animationLink: {
      type: String,
      required: true,
    },
  },
})
</script>
