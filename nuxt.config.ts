// nuxt.config.ts
// import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtConfig({
  css: ['~/styles/main.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'  ],
  head: {
    link: [
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.css' },
    ],
  },

  build: {
    transpile: ['vuetify'],
  },
  // css:["~/styles/main.css"],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
