<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left mb-2">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            providing
            <span class="text-header-gradient">Solutions to your business</span>
            with best products and services.
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Our Mission to Distribute products and services to businesses by maintaining the highest standard of
            quality, offering innovation and advanced technologies to ensure costomer satisfactions.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
              @click="downloadCompanyProfile"
            >
              <span>Download Our Company Profile</span>
              <!-- <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" /> -->
            </BaseButton>
          </div>
        </div>
        <div class="hidden sm:block sm:justify-between col-span-12 lg:col-span-6 sm:mt-5">
          <div data-aos="zoom-in" data-aos-once="true" data-aos-delay="500" class="w-full h-[30vh] lg:h-full">
            <BaseLottieAnimation animation-link="https://assets2.lottiefiles.com/packages/lf20_vvtkfqbo.json" />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="~/assets/img/pattern/ellipse-1.png"
          class="hidden sm:block absolute bottom-20 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="~/assets/img/pattern/ellipse-2.png"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[40rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="~/assets/img/pattern/ellipse-3.png"
          class="hidden sm:block absolute bottom-56 right-40 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="~/assets/img/pattern/star.png"
          class="hidden sm:block absolute bottom-10 sm:bottom-28 right-10 lg:right-0 lg:left-[35rem] w-8"
        />
      </BaseSection>
    </section>

    <!-- Description section -->
    <section
      class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-8 sm:py-6 rounded-[2.25rem] sm:rounded-xl bg-white shadow-xl sm:shadow-xl transform lg:-translate-y-12"
      data-aos="fade-right"
      data-aos-once="true"
      data-aos-delay="300"
    >
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-[35rem]">
            <BaseLottieAnimation animation-link="https://assets2.lottiefiles.com/packages/lf20_myigw022.json" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-4 px-4 sm:px-6 mt-5">
          <h2 class="text-4xl font-semibold">
            <span class="text-header-gradient">Introducing</span>
          </h2>
          <p class="paragraph">
            PT. AMIDO MAKMOR TULUS SEJATI was humbly established in 1987 initially as the sole distributor for
            <img class="w-10 inline-block mb-1.5" src="~/assets/img/logo/mita-icon.svg" />
            copiers from Japan and Amida brand Typewriters. Since then we have expanded our business from office domain
            business such as Document Solutions, Document Security to public doamin business such as Point of Sales
            Systems and Content Management Services.
          </p>
          <p class="paragraph">
            In 2012, we changed our identity from "PT. AMIDA TULUS SEJATI" to "PT. AMIDO MAKMOR TULUS SEJATI" in
            comformity to our commitment towards Solutions business in Document as well as Content Management Business
            which display tremendous growth due to advancement of internet technology. Nevertheless our motto "Always
            With You" never changed as we remain alongside all our costumers and strive even harder not only to serve
            well but try to exceed their expectations.
          </p>
        </div>
      </div>
    </section>

    <!-- Customers section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow-xl sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">Our Customers</h3>
        <div data-aos="fade-up" class="flex items-center justify-center">
          <BaseSplideCarousel />
        </div>
      </div>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img src="~/assets/img/faq.webp" class="w-ll" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section>

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>

export default {
    name: "IndexPage",
    data() {
        return {
            selected: 0,
            dropdownConcurency: false,
            dropdownCrypto: false,
            currencySelected: {
                img: "country-icon/eng.png",
                name: "USD",
            },
            currencies: [
                {
                    img: "country-icon/eng.png",
                    name: "USD",
                },
            ],
            cryptoSelected: {
                img: "crypto-icon/bitcoin.png",
                name: "BTC",
            },
            cryptocurrencies: [
                {
                    img: "crypto-icon/bitcoin.png",
                    name: "BTC",
                },
            ],
            trendings: [
                {
                    id: 1,
                    name: "Bitcoin",
                    price: 43180.13,
                    logo: "bitcoin.png",
                    increase: true,
                    data: [40, 35, 60, 75, 60, 75, 50],
                },
                {
                    id: 2,
                    name: "Ethereum",
                    price: 3480.65,
                    logo: "ethereum.png",
                    increase: false,
                    data: [25, 30, 60, 50, 80, 55, 80],
                },
                {
                    id: 3,
                    name: "Solana",
                    price: 150.2,
                    logo: "solana.png",
                    increase: true,
                    data: [40, 45, 40, 80, 50, 60, 35],
                },
                {
                    id: 4,
                    name: "Dogecoin",
                    price: 0.1572,
                    logo: "dogecoin.png",
                    increase: true,
                    data: [35, 70, 60, 80, 50, 60, 40],
                },
            ],
            topGainers: [
                {
                    id: 1,
                    name: "PAPPAY",
                    price: 0.00374,
                    logo: "pappay.png",
                    increase: true,
                    data: [30, 50, 45, 60, 70, 40, 45],
                },
                {
                    id: 2,
                    name: "Bitcoin Asia",
                    price: 0.02096,
                    logo: "bitcoin-asia.png",
                    increase: true,
                    data: [25, 60, 50, 60, 35, 50, 70],
                },
                {
                    id: 3,
                    name: "MoonRock",
                    price: 0.004907,
                    logo: "moonrock.png",
                    increase: true,
                    data: [40, 35, 40, 25, 50, 70, 45],
                },
                {
                    id: 4,
                    name: "NinjaFloki",
                    price: 0.000123,
                    logo: "ninjafloki.png",
                    increase: true,
                    data: [45, 35, 40, 30, 25, 45, 35],
                },
            ],
            recents: [
                {
                    id: 1,
                    name: "MetaCraft",
                    price: 0.0608,
                    logo: "metacraft.png",
                    increase: false,
                    data: [40, 50, 45, 60, 35, 40, 45],
                },
                {
                    id: 2,
                    name: "Frog",
                    price: 0.5875,
                    logo: "frog.png",
                    increase: false,
                    data: [25, 50, 45, 48, 40, 60, 45],
                },
                {
                    id: 3,
                    name: "Musk Doge",
                    price: 0.04041,
                    logo: "musk-doge.png",
                    increase: true,
                    data: [25, 35, 60, 45, 50, 45, 45],
                },
                {
                    id: 4,
                    name: "2SHARE",
                    price: 1366.24,
                    logo: "2share.png",
                    increase: true,
                    data: [35, 30, 60, 50, 35, 45, 40],
                },
            ],
            accordions: [
                {
                    title: "Why should I choose NEFA?",
                    description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
                },
                {
                    title: "How secure is NEFA?",
                    description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
                },
                {
                    title: "Do I have to buy a whole Bitcoin?",
                    description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
                },
                {
                    title: "How do I actually buy Bitcoin?",
                    description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
                },
            ],
        };
    },
    methods: {
        downloadCompanyProfile() {
            const link = document.createElement("a");
            link.href = "/doc/company_profile.pdf";
            link.download = "doc/company_profile.pdf";
            link.target = "_blank";
            link.click();
        },
    }
}
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
