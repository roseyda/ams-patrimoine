// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@vueuse/nuxt', 'nuxt-seo-utils', 'nuxt-csurf'],
  vite: {
    optimizeDeps: {
      include: ['valibot'],
    },
  },
  csurf: {
    methodsToProtect: ['POST', 'PUT', 'PATCH', 'DELETE'],
    cookie: {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    },
  },
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
