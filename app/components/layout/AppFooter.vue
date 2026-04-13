<script setup lang="ts">
  interface FooterLink {
    label: string;
    to: string;
  }

  const currentYear: number = new Date().getFullYear();

  const navigation: FooterLink[] = [
    { label: 'Accueil', to: '/' },
    { label: 'Expertise', to: '/expertise' },
    { label: "L'Approche", to: '/approche' },
    { label: 'Le Cabinet', to: '/cabinet' },
    { label: 'Contact', to: '/contact' },
  ];

  const expertise: FooterLink[] = [
    { label: 'Accompagnement Dirigeants', to: '/expertise/dirigeants' },
    { label: 'Accompagnement Particuliers', to: '/expertise/particuliers' },
    { label: 'Strategie Patrimoniale', to: '/expertise/patrimoine' },
    { label: 'Strategie Financiere', to: '/expertise/finance' },
  ];

  const legal: FooterLink[] = [
    { label: 'Mentions legales', to: '/mentions-legales' },
    { label: 'Politique de confidentialite', to: '/confidentialite' },
  ];
</script>

<template>
  <footer class="bg-primary-500 text-white">
    <!-- Main footer content -->
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand column -->
        <div class="lg:col-span-1">
          <div class="mb-6 flex items-center gap-2.5">
            <NuxtPicture
              src="/images/logo/LOGO-noir-2-2048x910.png"
              :img-attrs="{ height: 60, class: 'h-[60px] w-auto invert' }"
              alt="AMS Patrimoine"
            />
            <span class="font-serif text-lg leading-tight tracking-tight">
              <span class="font-semibold text-white">AMS</span>
              <span class="text-white/70"> Patrimoine</span>
            </span>
          </div>
          <p class="max-w-xs text-sm leading-relaxed text-white/60">
            Conseil en gestion de patrimoine et strategie financiere a Toulouse.
          </p>
        </div>

        <!-- Navigation column -->
        <div>
          <h3 class="mb-5 font-sans text-xs font-semibold tracking-widest text-white/40 uppercase">Navigation</h3>
          <ul class="space-y-3">
            <li v-for="link in navigation" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-white/60 transition-colors duration-300 hover:text-white">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Expertise column -->
        <div>
          <h3 class="mb-5 font-sans text-xs font-semibold tracking-widest text-white/40 uppercase">Expertise</h3>
          <ul class="space-y-3">
            <li v-for="link in expertise" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-white/60 transition-colors duration-300 hover:text-white">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h3 class="mb-5 font-sans text-xs font-semibold tracking-widest text-white/40 uppercase">Contact</h3>
          <ul class="space-y-3">
            <li class="text-sm text-white/60">Toulouse, France</li>
            <li>
              <NuxtLink to="/contact" class="text-sm text-white/60 transition-colors duration-300 hover:text-white">
                Prendre rendez-vous
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row lg:px-8">
        <p class="text-xs text-white/40">&copy; {{ currentYear }} AMS Patrimoine. Tous droits reserves.</p>
        <div class="flex items-center gap-5">
          <NuxtLink
            v-for="{ label, to } in legal"
            :key="to"
            :to
            class="text-xs text-white/40 transition-colors duration-300 hover:text-white/70"
          >
            {{ label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
