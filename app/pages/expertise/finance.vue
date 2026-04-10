<script setup lang="ts">
  interface ManagementCard {
    icon: string;
    title: string;
    subtitle: string;
  }

  const managementCards: ManagementCard[] = [
    { icon: 'i-lucide-activity', title: 'Analyse Risque', subtitle: 'Stress-tests continus' },
    { icon: 'i-lucide-landmark', title: 'Reporting', subtitle: 'Transparence totale' },
  ];

  const heroReady = ref(false);
  const bladeVisible = useReveal(useTemplateRef('bladeRef'));
  const performanceVisible = useReveal(useTemplateRef('performanceRef'));
  const ctaVisible = useReveal(useTemplateRef('ctaRef'));

  onMounted(() => setTimeout(() => (heroReady.value = true), 80));

  useHead({
    title: 'Stratégie Financière — AMS Patrimoine',
    meta: [
      {
        name: 'description',
        content:
          'Notre architecture ouverte garantit une neutralité absolue dans la sélection de vos actifs. Nous transformons la complexité des marchés en stratégies de croissance pérennes.',
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero ─── -->
    <section class="container mx-auto px-6 pt-36 pb-24 md:px-12">
      <div class="grid grid-cols-1 items-end gap-12 md:grid-cols-12">
        <div class="md:col-span-7">
          <h1
            class="mb-8 font-serif text-7xl leading-tight font-bold text-[#000000] transition-all duration-700 ease-out"
            style="letter-spacing: -0.02em; transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            L'Indépendance au service de la <span class="text-[#6d5d33]">Performance</span>.
          </h1>
          <p
            class="max-w-xl text-xl leading-relaxed text-[#45464e] transition-all duration-700 ease-out"
            style="transition-delay: 300ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            Notre architecture ouverte garantit une neutralité absolue dans la sélection de vos actifs. Nous
            transformons la complexité des marchés en stratégies de croissance pérennes.
          </p>
        </div>

        <div
          class="flex flex-col gap-6 border-l border-[#c5c6cf]/20 pl-8 transition-all duration-700 ease-out md:col-span-5"
          style="transition-delay: 450ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="font-sans text-xs font-bold tracking-widest text-[#6d5d33] uppercase">Market Insight</div>
          <div class="flex items-center gap-4">
            <span class="font-serif text-5xl font-light text-[#000000]">0%</span>
            <p class="text-sm text-[#45464e]">
              Conflit d'intérêts grâce à une structure de rémunération transparente et indépendante.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Architectural Blade ─── -->
    <section ref="bladeRef" class="relative mb-48">
      <div class="h-[600px] w-full overflow-hidden">
        <NuxtImg
          src="/images/finance/atrium.jpg"
          alt="Atrium architectural moderne — Stratégie Financière"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <!-- Overlapping card -->
      <div
        class="absolute -bottom-16 left-12 max-w-2xl rounded-sm bg-white p-12 shadow-2xl transition-all duration-700 ease-out md:left-24"
        :class="bladeVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <h2 class="mb-6 font-serif text-4xl font-bold text-[#000000]">Architecture Ouverte</h2>
        <p class="mb-8 leading-relaxed text-[#45464e]">
          À la différence des banques de réseau, AMS Patrimoine accède à l'intégralité des solutions du marché mondial.
          Cette liberté nous permet de construire des portefeuilles sur-mesure, sans biais institutionnel.
        </p>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <span class="mb-1 block font-serif text-2xl font-bold text-[#6d5d33]">Expertise multi-classe</span>
            <p class="font-sans text-xs tracking-wider text-[#45464e] uppercase">
              Actions, Obligations, Private Equity
            </p>
          </div>
          <div>
            <span class="mb-1 block font-serif text-2xl font-bold text-[#6d5d33]">Sourcing Mondial</span>
            <p class="font-sans text-xs tracking-wider text-[#45464e] uppercase">Gestionnaires de conviction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Performance & Pilotage ─── -->
    <section ref="performanceRef" class="py-32" style="background-color: #f4f4ef">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mb-20 flex flex-col items-start justify-between gap-12 transition-all duration-700 ease-out md:flex-row"
          :class="performanceVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="max-w-xl">
            <h2 class="mb-6 font-serif text-5xl font-bold text-[#000000]">Gestion d'Actifs &amp; Pilotage</h2>
            <p class="text-lg leading-relaxed text-[#45464e]">
              Nous appliquons une rigueur quantitative alliée à une analyse macroéconomique fine pour optimiser le
              couple rendement/risque de votre patrimoine.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="card in managementCards"
              :key="card.title"
              class="rounded-sm border-b border-[#c5c6cf]/20 bg-[#fafaf4] p-6"
            >
              <UIcon :name="card.icon" class="mb-4 block text-[#6d5d33]" />
              <div class="font-serif text-2xl font-bold text-[#000000]">{{ card.title }}</div>
              <p class="mt-2 font-sans text-xs tracking-wider text-[#45464e] uppercase">{{ card.subtitle }}</p>
            </div>
          </div>
        </div>

        <!-- Bento grid -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
          <!-- Private Equity -->
          <div
            class="flex flex-col justify-between rounded-sm bg-[#081a3e] p-10 text-white transition-all duration-700 ease-out md:col-span-2"
            :class="performanceVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 100ms"
          >
            <div>
              <h3 class="mb-4 font-serif text-3xl font-medium">Stratégie Private Equity</h3>
              <p class="opacity-80">
                Accédez aux entreprises non cotées pour une croissance décorrélée des marchés boursiers traditionnels.
              </p>
            </div>
            <div class="flex items-end justify-between">
              <div class="font-serif text-5xl font-bold text-[#f7e0ac]">8–12%</div>
              <div class="font-sans text-xs tracking-widest text-white/60 uppercase">Objectif cible long terme</div>
            </div>
          </div>

          <!-- Gestion sous mandat -->
          <div
            class="rounded-sm bg-white p-8 transition-all duration-700 ease-out md:col-span-1"
            :class="performanceVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 200ms"
          >
            <h3 class="mb-4 font-serif text-xl font-bold text-[#000000]">Gestion Sous Mandat</h3>
            <p class="mb-6 text-sm text-[#45464e]">
              Déléguez le quotidien de vos investissements à nos experts pour une réactivité maximale.
            </p>
            <div class="flex h-24 w-full items-end gap-1">
              <div class="flex-1 bg-[#6d5d33]/20" style="height: 50%"></div>
              <div class="flex-1 bg-[#6d5d33]/40" style="height: 66%"></div>
              <div class="flex-1 bg-[#6d5d33]/60" style="height: 75%"></div>
              <div class="flex-1 bg-[#6d5d33]" style="height: 100%"></div>
            </div>
          </div>

          <!-- Conseil en investissement -->
          <div
            class="rounded-sm bg-white p-8 transition-all duration-700 ease-out md:col-span-1"
            :class="performanceVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 300ms"
          >
            <h3 class="mb-4 font-serif text-xl font-bold text-[#000000]">Conseil en Investissement</h3>
            <p class="mb-6 text-sm text-[#45464e]">
              Gardez le contrôle tout en bénéficiant de nos analyses et recommandations tactiques.
            </p>
            <div class="flex items-center gap-2 text-[#6d5d33]">
              <UIcon name="i-lucide-shield-check" />
              <span class="font-sans text-xs font-bold tracking-widest uppercase">Agrément CIF</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA Banner ─── -->
    <section ref="ctaRef" class="container mx-auto px-6 py-24 md:px-12">
      <div
        class="relative overflow-hidden rounded-sm bg-[#081a3e] p-16 transition-all duration-700 ease-out"
        :class="ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <div class="absolute inset-0 opacity-20">
          <NuxtImg
            src="/images/finance/gold-pen.jpg"
            alt="Stylo plume en or sur registre financier"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row">
          <div class="max-w-2xl text-center md:text-left">
            <h2 class="mb-6 font-serif text-5xl font-bold text-white">Prêt à optimiser votre capital&nbsp;?</h2>
            <p class="text-xl text-[#7483ad]">
              Rencontrez nos experts pour un audit financier complet de votre situation actuelle.
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="shrink-0 rounded-sm bg-[#6d5d33] px-10 py-5 font-sans text-sm font-bold tracking-widest text-white uppercase shadow-xl transition-opacity hover:opacity-90"
          >
            Demander un Audit
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
