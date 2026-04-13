<script setup lang="ts">
  const colorMode = useColorMode();
  colorMode.preference = 'light';

  useHead({
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
    htmlAttrs: {
      lang: 'fr',
    },
  });

  useSeoMeta({
    titleTemplate: (title?: string) =>
      title ? `${title} — AMS Patrimoine` : 'AMS Patrimoine — Conseil en Gestion de Patrimoine',
    description:
      'Cabinet de conseil en gestion de patrimoine et stratégie financière à Toulouse. Accompagnement sur-mesure pour dirigeants et particuliers.',
    ogType: 'website',
    ogSiteName: 'AMS Patrimoine',
    ogLocale: 'fr_FR',
    twitterCard: 'summary_large_image',
  });
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
