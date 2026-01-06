export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lupita & Jose',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    link: [{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    link: [{ href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap', rel: 'stylesheet' }],
    link: [{ href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap', rel: 'stylesheet' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/allura.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // nuxt/fonts
    //'@nuxt/fonts',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  app: {
    PageTransition: { name: '/', mode: 'out-in' },
  }
}
