// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
"@": resolve(__dirname, "."),
  },

  compatibilityDate: '2025-02-27',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // modules: ["@nuxtjs/tailwindcss"],
})