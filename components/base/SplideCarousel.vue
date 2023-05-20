<template>
  <div>
    <Splide
    aria-labelledby="autoplay-example-heading"
    :options="options"
    :has-track="false"
    >
      <div style="position: relative">
        <SplideTrack>
          <SplideSlide v-for="slide in slides" :key="slide">
            <img class="w-[70%] aspect-auto m-4 sm:w-1/2 mx-auto" :src="useAsset(`img/partner/${slide}`)" :alt="`${slide}`">
          </SplideSlide>
        </SplideTrack>
      </div>
    </Splide>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import { Splide, SplideSlide, SplideTrack, Options } from '@splidejs/vue-splide';

export default defineComponent({
  name: 'SplideCarousel',
  components: {
    Splide,
    SplideTrack,
    SplideSlide,
  },
  setup() {
    const slides = ['mayora-logo.svg', 'ocbc-logo.svg', 'jtekt-logo.svg']
    const options: Options = {
      rewind  : true,
      gap     : '1rem',
      autoplay: true,
      height  : '10rem',
    }
    return {
      slides,
      options,
    }
  },
})
</script>
