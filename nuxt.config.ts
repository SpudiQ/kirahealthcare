// https://nuxt.com/docs/api/configuration/nuxt-config
import {dirname, resolve} from "node:path";
import {fileURLToPath} from "url";
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
  ],
  vite: {
    plugins: [
      VueI18nVitePlugin({
        strictMessage: false,
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ],
  },
  css: [
    '@/assets/styles/scss/main.scss',
  ],
  app: {
    head: {
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        ],
    }
  }
})
