// nuxt.config.ts

export default defineNuxtConfig({
  css: ['~/styles/main.css','vuetify/lib/styles/main.sass'],
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
