// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@vueuse/nuxt', '@nuxtjs/seo'],
  site: {
    url: process.env.NUXT_SITE_URL,
    name: process.env.NUXT_SITE_NAME,
    description:
      'Cabinet de conseil en gestion de patrimoine et stratégie financière à Toulouse. Accompagnement sur-mesure pour dirigeants et particuliers.',
    defaultLocale: 'fr',
    indexable: process.env.NUXT_PUBLIC_SITE_ENV === 'production',
  },
  sitemap: {
    exclude: ['/api/**'],
  },
  robots: {
    disallow: ['/api/'],
  },
  schemaOrg: {
    // TODO(SEO): compléter l'identité schema.org avec les données réelles du cabinet
    // pour être éligible aux résultats enrichis Google (LocalBusiness / FinancialService).
    // Champs à renseigner avant mise en production :
    //   - address.streetAddress (ex: '12 rue de la Pomme')
    //   - address.postalCode (ex: '31000')
    //   - address.addressRegion (ex: 'Occitanie')
    //   - telephone (format international : '+33-5-00-00-00-00')
    //   - logo (chemin public, ex: '/logo.svg')
    //   - geo.latitude / geo.longitude (coordonnées du cabinet)
    //   - openingHours (syntaxe schema.org, ex: ['Mo-Fr 09:00-19:00'])
    //   - sameAs (profils officiels : LinkedIn, etc.)
    // Valider ensuite avec https://search.google.com/test/rich-results
    identity: {
      type: 'FinancialService',
      name: 'AMS Patrimoine',
      description: 'Cabinet de conseil en gestion de patrimoine et stratégie financière à Toulouse.',
      email: 'contact@amspatrimoine.fr',
      areaServed: 'FR',
      address: {
        addressCountry: 'FR',
        addressLocality: 'Toulouse',
      },
    },
  },
  linkChecker: {
    enabled: false,
  },
  vite: {
    optimizeDeps: {
      include: ['valibot'],
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  devtools: {
    enabled: true,
  },
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/api/**': { prerender: false },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      // TODO: repasser à `failOnError: true` une fois les pages manquantes
      // (/mentions-legales, /confidentialite) ajoutées au site.
      failOnError: false,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  compatibilityDate: '2025-01-15',
});
