<template>
  <footer class="max-w-screen-xl px-8 mx-auto">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="grid xl:grid-cols-3 xl:justify-between lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div
          class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <h2 class="text-xl sm:text-2xl font-semibold mb-10 sm:mb-6">Head Office :</h2>
          <p class="paragraph text-left xl:text-left">Jln. Daan Mogot KM. 11 No. 7</p>
          <p class="paragraph text-left xl:text-left">Jakarta Barat 11710, Indonesia</p>
          <p class="paragraph text-left xl:text-left">Tel. (021) 5436 6111, 5436 6222</p>
          <p class="paragraph text-left xl:text-left">Fax. (021) 5436 6030 / 40</p>
        </div>
        <div
          class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="600"
        >
          <h2 class="text-xl sm:text-2xl font-semibold mb-10 sm:mb-6">Branch Cikarang Area :</h2>
          <p class="paragraph text-left xl:text-left">Jln. Niaga Raya Kav. AA3 Blok. B No. 23 Ruko CBD Jababeka</p>
          <p class="paragraph text-left xl:text-left">Cikarang Bekasi, Jaw Barat</p>
          <p class="paragraph text-left xl:text-left">Tel. (021) 2908 3865</p>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="900"
        >
          <h5 class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Newsletter</h5>
          <p class="text-sm text-[#666666] focus:outline-none focus:shadow-outline">
            Never miss anything crypto when <br class="sm:hidden" />you're on the go
          </p>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Enter your email"
            />
            <button
              class="bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300"
            >
              <ArrowRightIcon :size="20" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 sm:py-2 text-center text-sm text-[#666666] hover:text-gray-900">
      &copy; Copyright 2023 PT. AMIDO MAKMOR TULUS SEJATI.
    </div>
    <div class="py-4 sm:py-2 text-center text-sm text-[#666666] hover:text-gray-900">
      Made with <span class="text-red-500">&hearts;</span> by
      <a href="https://www.linkedin.com/in/andiwinata87" class="text-blue-500">Andi Winata</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',
}
</script>
