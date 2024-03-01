// nuxt.config.ts

export default defineNuxtConfig({
  css: ['~/styles/main.css','vuetify/lib/styles/main.sass'],
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css' },
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
