<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui';

  const route = useRoute();

  const navItems = computed<NavigationMenuItem[]>(() => [
    { label: 'Accueil', to: '/' },
    {
      label: 'Expertise',
      to: '/expertise',
      active: route.path.includes('expertise'),
    },
    { label: "L'Approche", to: '/approche' },
    { label: 'Le Cabinet', to: '/cabinet' },
    { label: 'Contact', to: '/contact' },
  ]);
</script>

<template>
  <UHeader
    :ui="{
      root: 'bg-[var(--color-surface,#fafaf4)]/80 backdrop-blur-xl border-b border-[var(--color-outline-variant,#c5c6cf)]/15',
      container: 'max-w-7xl',
    }"
  >
    <template #left>
      <NuxtLink to="/">
        <NuxtPicture
          src="/images/logo/LOGO-noir-2-2048x910.png"
          :img-attrs="{ class: 'h-[60px] w-auto' }"
          alt="AMS Patrimoine"
        />
      </NuxtLink>
    </template>

    <template #default>
      <UNavigationMenu
        :items="navItems"
        variant="link"
        highlight
        class="hidden lg:flex"
        :ui="{
          link: 'font-sans text-xs font-medium uppercase tracking-[0.05em] text-primary-500/70 hover:text-primary-500 data-[state=active]:text-primary-500',
        }"
      />
    </template>

    <template #right>
      <UButton
        label="Prendre rendez-vous"
        to="/contact"
        size="sm"
        class="hidden rounded-sm lg:inline-flex"
        :ui="{
          base: 'bg-gradient-to-r from-primary-500 to-navy-500 hover:from-navy-500 hover:to-primary-500 text-white border-0',
        }"
      />
    </template>

    <!-- Mobile menu content -->
    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
        class="w-full"
        :ui="{
          link: 'font-sans text-sm font-medium uppercase tracking-[0.05em]',
        }"
      />
      <div class="mt-6 px-3">
        <UButton label="Prendre rendez-vous" to="/contact" block size="lg" class="rounded-sm" />
      </div>
    </template>
  </UHeader>
</template>
