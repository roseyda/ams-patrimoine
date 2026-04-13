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

  const heroReady = useHeroReady();
  const bladeVisible = useReveal(useTemplateRef('bladeRef'));
  const performanceVisible = useReveal(useTemplateRef('performanceRef'));
  const ctaVisible = useReveal(useTemplateRef('ctaRef'));

  useSeoMeta({
    title: 'Stratégie Financière',
    description:
      'Notre architecture ouverte garantit une neutralité absolue dans la sélection de vos actifs. Nous transformons la complexité des marchés en stratégies de croissance pérennes.',
  });
</script>

<template>
  <div class="bg-sand-100 text-sand-900">
    <!-- ─── Hero ─── -->
    <section class="container mx-auto px-6 pt-36 pb-24 md:px-12">
      <div class="grid grid-cols-1 items-end gap-12 md:grid-cols-12">
        <div class="md:col-span-7">
          <h1
            class="text-navy-500 mb-8 font-serif text-7xl leading-tight font-bold transition-all duration-700 ease-out"
            style="letter-spacing: -0.02em; transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            L'Indépendance au service de la <span class="text-gold-500">Performance</span>.
          </h1>
          <p
            class="text-sand-700 max-w-xl text-xl leading-relaxed transition-all duration-700 ease-out"
            style="transition-delay: 300ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            Notre architecture ouverte garantit une neutralité absolue dans la sélection de vos actifs. Nous
            transformons la complexité des marchés en stratégies de croissance pérennes.
          </p>
        </div>

        <div
          class="border-sand-500/20 flex flex-col gap-6 border-l pl-8 transition-all duration-700 ease-out md:col-span-5"
          style="transition-delay: 450ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="text-gold-500 font-sans text-xs font-bold tracking-widest uppercase">Market Insight</div>
          <div class="flex items-center gap-4">
            <span class="text-navy-500 font-serif text-5xl font-light">0%</span>
            <p class="text-sand-700 text-sm">
              Conflit d'intérêts grâce à une structure de rémunération transparente et indépendante.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Architectural Blade ─── -->
    <section ref="bladeRef" class="relative mb-48">
      <div class="h-150 w-full overflow-hidden">
        <NuxtPicture
          src="/images/finance/atrium.jpg"
          alt="Atrium architectural moderne — Stratégie Financière"
          loading="lazy"
          :img-attrs="{ class: 'h-full w-full object-cover' }"
        />
      </div>

      <!-- Overlapping card -->
      <div
        class="absolute -bottom-16 left-12 max-w-2xl rounded-sm bg-white p-12 shadow-2xl transition-all duration-700 ease-out md:left-24"
        :class="bladeVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <h2 class="text-navy-500 mb-6 font-serif text-4xl font-bold">Architecture Ouverte</h2>
        <p class="text-sand-700 mb-8 leading-relaxed">
          À la différence des banques de réseau, AMS Patrimoine accède à l'intégralité des solutions du marché mondial.
          Cette liberté nous permet de construire des portefeuilles sur-mesure, sans biais institutionnel.
        </p>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <span class="text-gold-500 mb-1 block font-serif text-2xl font-bold">Expertise multi-classe</span>
            <p class="text-sand-700 font-sans text-xs tracking-wider uppercase">Actions, Obligations, Private Equity</p>
          </div>
          <div>
            <span class="text-gold-500 mb-1 block font-serif text-2xl font-bold">Sourcing Mondial</span>
            <p class="text-sand-700 font-sans text-xs tracking-wider uppercase">Gestionnaires de conviction</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Performance & Pilotage ─── -->
    <section ref="performanceRef" class="bg-sand-200 py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mb-20 flex flex-col items-start justify-between gap-12 transition-all duration-700 ease-out md:flex-row"
          :class="performanceVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="max-w-xl">
            <h2 class="text-navy-500 mb-6 font-serif text-5xl font-bold">Gestion d'Actifs &amp; Pilotage</h2>
            <p class="text-sand-700 text-lg leading-relaxed">
              Nous appliquons une rigueur quantitative alliée à une analyse macroéconomique fine pour optimiser le
              couple rendement/risque de votre patrimoine.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="card in managementCards"
              :key="card.title"
              class="border-sand-500/20 bg-sand-100 rounded-sm border-b p-6"
            >
              <UIcon :name="card.icon" class="text-gold-500 mb-4 block" />
              <div class="text-navy-500 font-serif text-2xl font-bold">{{ card.title }}</div>
              <p class="text-sand-700 mt-2 font-sans text-xs tracking-wider uppercase">{{ card.subtitle }}</p>
            </div>
          </div>
        </div>

        <!-- Bento grid -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
          <!-- Private Equity -->
          <div
            class="bg-navy-500 flex flex-col justify-between rounded-sm p-10 text-white transition-all duration-700 ease-out md:col-span-2"
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
              <div class="text-gold-100 font-serif text-5xl font-bold">8–12%</div>
              <div class="font-sans text-xs tracking-widest text-white/60 uppercase">Objectif cible long terme</div>
            </div>
          </div>

          <!-- Gestion sous mandat -->
          <div
            class="rounded-sm bg-white p-8 transition-all duration-700 ease-out md:col-span-1"
            :class="performanceVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 200ms"
          >
            <h3 class="text-navy-500 mb-4 font-serif text-xl font-bold">Gestion Sous Mandat</h3>
            <p class="text-sand-700 mb-6 text-sm">
              Déléguez le quotidien de vos investissements à nos experts pour une réactivité maximale.
            </p>
            <div class="flex h-24 w-full items-end gap-1">
              <div class="bg-gold-500/20 flex-1" style="height: 50%"></div>
              <div class="bg-gold-500/40 flex-1" style="height: 66%"></div>
              <div class="bg-gold-500/60 flex-1" style="height: 75%"></div>
              <div class="bg-gold-500 flex-1" style="height: 100%"></div>
            </div>
          </div>

          <!-- Conseil en investissement -->
          <div
            class="rounded-sm bg-white p-8 transition-all duration-700 ease-out md:col-span-1"
            :class="performanceVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 300ms"
          >
            <h3 class="text-navy-500 mb-4 font-serif text-xl font-bold">Conseil en Investissement</h3>
            <p class="text-sand-700 mb-6 text-sm">
              Gardez le contrôle tout en bénéficiant de nos analyses et recommandations tactiques.
            </p>
            <div class="text-gold-500 flex items-center gap-2">
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
        class="bg-navy-500 relative overflow-hidden rounded-sm p-16 transition-all duration-700 ease-out"
        :class="ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <div class="absolute inset-0 opacity-20">
          <NuxtPicture
            src="/images/finance/gold-pen.jpg"
            alt="Stylo plume en or sur registre financier"
            loading="lazy"
            :img-attrs="{ class: 'h-full w-full object-cover' }"
          />
        </div>
        <div class="relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row">
          <div class="max-w-2xl text-center md:text-left">
            <h2 class="mb-6 font-serif text-5xl font-bold text-white">Prêt à optimiser votre capital&nbsp;?</h2>
            <p class="text-navy-300 text-xl">
              Rencontrez nos experts pour un audit financier complet de votre situation actuelle.
            </p>
          </div>
          <UButton label="Demander un Audit" to="/contact" color="secondary" size="xl" />
        </div>
      </div>
    </section>
  </div>
</template>
