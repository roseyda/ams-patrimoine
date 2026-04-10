// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@vueuse/nuxt'],
  devtools: {
    enabled: true,
  },
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/': { prerender: true },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  compatibilityDate: '2025-01-15',
});
