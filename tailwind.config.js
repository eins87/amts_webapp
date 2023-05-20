/** @type {import('tailwindcss').Config} */
module.exports = {
  /* mode: 'jit', */
  content: [
    './assets/**/*.{css,svg}',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.{vue,js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
