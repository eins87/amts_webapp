module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-undef': 'off',
    'import/no-named-as-default': 'off',
    'vue/attribute-hyphenation': 'off',

  },
}
