<script setup lang="ts">
  useHead({
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang: 'fr',
    },
  });

  const title = 'AMS Patrimoine — Conseil en Gestion de Patrimoine';
  const description =
    'Cabinet de conseil en gestion de patrimoine et strategie financiere a Toulouse. Accompagnement sur-mesure pour dirigeants et particuliers.';

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
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
