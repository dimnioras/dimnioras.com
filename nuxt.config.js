
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  /*mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Dimitris Nioras' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      {src: 'https://kit.fontawesome.com/4b8c469e8d.js', crossorigin: 'anonymous'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/dimNioras-logo-small-512px.png' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:200,300,400,700'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/bootstrap-mod.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  generate: {
  dir: 'public'
  }
}
