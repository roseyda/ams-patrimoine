<script setup lang="ts">
  interface ExpertiseCard {
    icon: string;
    title: string;
    description: string;
    to: string;
  }

  interface AdnItem {
    numeral: string;
    title: string;
    description: string;
  }

  interface TrustBadge {
    icon: string;
    label: string;
  }

  const expertiseCards: ExpertiseCard[] = [
    {
      icon: 'i-lucide-landmark',
      title: 'Ingénierie Patrimoniale',
      description:
        'Analyse structurelle de vos actifs, optimisation de la détention et anticipation de la transmission.',
      to: '/expertise/patrimoine',
    },
    {
      icon: 'i-lucide-trending-up',
      title: 'Conseil en Investissement',
      description:
        'Sélection rigoureuse de supports financiers et immobiliers adaptés à votre profil de risque et vos objectifs.',
      to: '/expertise/finance',
    },
    {
      icon: 'i-lucide-building-2',
      title: 'Accompagnement Dirigeant',
      description:
        "Stratégie de rémunération, optimisation de la trésorerie d'entreprise et préparation de la cession.",
      to: '/expertise/dirigeants',
    },
  ];

  const adnItems: AdnItem[] = [
    {
      numeral: 'I.',
      title: 'Indépendance Totale',
      description:
        'Absence de lien capitalistique avec les établissements financiers, garantissant une objectivité absolue dans nos préconisations.',
    },
    {
      numeral: 'II.',
      title: 'Sur-mesure Architectural',
      description:
        "Chaque stratégie est construite comme une pièce d'architecture unique, adaptée aux fondations de votre histoire familiale.",
    },
    {
      numeral: 'III.',
      title: 'Pérennité & Confiance',
      description:
        'Une relation de confiance inscrite dans le temps, basée sur la transparence et la discrétion la plus totale.',
    },
  ];

  const trustBadges: TrustBadge[] = [
    { icon: 'i-lucide-shield-check', label: 'Agrément CIF' },
    { icon: 'i-lucide-file-check', label: 'Membre ANACOFI' },
    { icon: 'i-lucide-graduation-cap', label: 'Certification CGP' },
    { icon: 'i-lucide-scale', label: 'Code Déontologie' },
  ];

  const heroReady = useHeroReady();

  const expertiseVisible = useReveal(useTemplateRef('expertiseRef'));
  const dnaVisible = useReveal(useTemplateRef('dnaRef'));
  const trustVisible = useReveal(useTemplateRef('trustRef'));
  const ctaVisible = useReveal(useTemplateRef('ctaRef'));

  useSeoMeta({
    title: 'AMS Patrimoine | Conseil en Gestion de Patrimoine',
    description:
      "AMS Patrimoine accompagne les familles et chefs d'entreprise dans la structuration, l'optimisation et la transmission de leur patrimoine avec une vision long terme.",
  });
</script>

<template>
  <div class="bg-sand-100 text-sand-900">
    <!-- ─── Hero : The Architectural Blade ──────────────────────────── -->
    <section class="bg-sand-100 relative flex min-h-screen items-center overflow-hidden">
      <div class="container mx-auto grid grid-cols-1 items-stretch gap-0 px-6 md:grid-cols-12 md:px-12">
        <!-- Text column: staggered fade-up on mount -->
        <div class="z-10 flex flex-col justify-center py-20 pr-0 md:col-span-7 md:pr-12">
          <span
            class="text-gold-500 mb-6 block font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-700 ease-out"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Cabinet de Conseil en Gestion de Patrimoine
          </span>

          <h1
            class="text-navy-500 mb-8 font-serif text-5xl leading-tight tracking-tighter transition-all duration-700 ease-out md:text-7xl lg:text-8xl"
            style="letter-spacing: -0.02em; transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            L'art de <br />
            <span class="font-normal italic">préserver</span> <br />
            votre héritage.
          </h1>

          <p
            class="text-sand-700 mb-12 max-w-xl text-lg leading-relaxed transition-all duration-700 ease-out md:text-xl"
            style="transition-delay: 300ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            AMS Patrimoine accompagne les familles et les chefs d'entreprise dans la structuration, l'optimisation et la
            transmission de leur patrimoine avec une vision long terme.
          </p>

          <div
            class="flex flex-col gap-6 transition-all duration-700 ease-out sm:flex-row"
            style="transition-delay: 450ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            <UButton label="Découvrir notre expertise" to="/expertise" size="xl" />
            <UButton
              label="Prendre rendez-vous"
              to="/contact"
              variant="link"
              color="secondary"
              trailing-icon="i-lucide-arrow-right"
              size="xl"
            />
          </div>
        </div>

        <!-- Image column: slides in from right on mount -->
        <div
          class="relative min-h-125 transition-all duration-1000 ease-out md:col-span-5 md:min-h-0"
          style="transition-delay: 200ms"
          :class="heroReady ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'"
        >
          <div class="bg-sand-200 absolute inset-0 z-0 translate-x-12 translate-y-12"></div>
          <div class="relative z-10 h-full w-full overflow-hidden shadow-2xl">
            <NuxtImg
              src="/images/portrait-fondatrice.jpg"
              alt="Marie-Sophie LECLUYSE - Fondatrice AMS Patrimoine"
              class="absolute inset-0 h-full w-full object-cover"
              style="filter: grayscale(20%)"
            />
          </div>

          <!-- Quote card: delayed extra fade-in within the already-sliding column -->
          <div
            class="border-gold-500 absolute bottom-10 -left-20 z-20 max-w-xs border-l-4 bg-white p-8 shadow-xl transition-all duration-700 ease-out"
            style="transition-delay: 700ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
          >
            <p class="text-navy-500 font-serif text-xl leading-snug">
              "Chaque patrimoine raconte une histoire unique qui mérite une stratégie sur-mesure."
            </p>
            <p class="text-gold-500 mt-4 font-sans text-xs font-bold tracking-widest uppercase">
              Marie-Sophie LECLUYSE
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Expertise : Tonal Grid ────────────────────────────────── -->
    <section ref="expertiseRef" class="bg-sand-200 py-32">
      <div class="container mx-auto px-6 md:px-12">
        <!-- Header -->
        <div
          class="mb-24 flex flex-col items-end justify-between gap-8 transition-all duration-700 ease-out md:flex-row"
          :class="expertiseVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="max-w-2xl">
            <h2 class="text-navy-500 mb-6 font-serif text-4xl md:text-5xl" style="letter-spacing: -0.02em">
              Expertise 360°
            </h2>
            <p class="text-sand-700 text-lg">
              Une approche globale de votre situation patrimoniale combinant vision juridique, fiscale et financière.
            </p>
          </div>
          <span class="text-navy-500/20 hidden font-serif text-8xl md:block">01</span>
        </div>

        <!-- Cards: stagger via :style transitionDelay -->
        <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div
            v-for="(card, i) in expertiseCards"
            :key="card.title"
            class="group transition-all duration-700 ease-out"
            :class="expertiseVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            :style="{ transitionDelay: `${150 + i * 150}ms` }"
          >
            <div
              class="flex h-full flex-col bg-white p-10 transition-transform duration-500 group-hover:-translate-y-2"
            >
              <UIcon :name="card.icon" class="text-gold-500 mb-8 text-4xl" />
              <h3 class="text-navy-500 mb-4 font-serif text-2xl">{{ card.title }}</h3>
              <p class="text-sand-700 grow leading-relaxed">{{ card.description }}</p>
              <div class="border-sand-500/20 group-hover:border-gold-500/50 mt-8 border-t pt-8 transition-colors">
                <NuxtLink
                  :to="card.to"
                  class="text-gold-500 inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-widest uppercase"
                >
                  En savoir plus
                  <UIcon name="i-lucide-chevron-right" class="text-xs" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── ADN : The Ledger Look ────────────────────────────────── -->
    <section ref="dnaRef" class="bg-sand-100 py-32">
      <div class="container mx-auto grid grid-cols-1 items-center gap-20 px-6 md:px-12 lg:grid-cols-2">
        <!-- Image: slides in from left -->
        <div
          class="relative order-2 transition-all duration-900 ease-out lg:order-1"
          :class="dnaVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'"
        >
          <div class="bg-sand-200 aspect-square overflow-hidden">
            <NuxtImg
              src="/images/home/bureau.jpg"
              alt="Bureau AMS Patrimoine"
              class="h-full w-full object-cover opacity-80 mix-blend-multiply"
              loading="lazy"
            />
          </div>
          <div class="bg-navy-500 absolute -right-10 -bottom-10 hidden p-12 text-white md:block">
            <div class="mb-2 font-serif text-4xl italic">15+</div>
            <div class="text-xs tracking-[0.2em] uppercase opacity-70">Années d'Expertise</div>
          </div>
        </div>

        <!-- Text: slides in from right with staggered ADN items -->
        <div
          class="order-1 transition-all duration-700 ease-out lg:order-2"
          style="transition-delay: 100ms"
          :class="dnaVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
        >
          <span class="text-gold-500 mb-6 block font-sans text-sm font-semibold tracking-widest uppercase">
            L'ADN du Cabinet
          </span>
          <h2 class="text-navy-500 mb-10 font-serif text-4xl leading-tight md:text-5xl" style="letter-spacing: -0.02em">
            Une approche résolument <span class="italic">indépendante</span> et confidentielle.
          </h2>
          <div class="space-y-12">
            <div
              v-for="(item, i) in adnItems"
              :key="item.numeral"
              class="flex gap-6 transition-all duration-700 ease-out"
              :class="dnaVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
              :style="{ transitionDelay: `${250 + i * 150}ms` }"
            >
              <span class="text-gold-500 font-serif text-2xl">{{ item.numeral }}</span>
              <div>
                <h4 class="text-navy-500 mb-3 font-serif text-xl">{{ item.title }}</h4>
                <p class="text-sand-700">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Trust ────────────────────────────────────────────────── -->
    <section ref="trustRef" class="bg-[rgba(232,232,227,0.3)] py-32">
      <div class="container mx-auto max-w-4xl px-6 text-center md:px-12">
        <h2
          class="text-navy-500 mb-12 font-serif text-4xl transition-all duration-700 ease-out md:text-5xl"
          style="letter-spacing: -0.02em"
          :class="trustVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          La Confiance se mérite
        </h2>

        <p
          class="text-sand-700 mb-16 font-serif text-xl leading-relaxed italic transition-all duration-700 ease-out"
          style="transition-delay: 150ms"
          :class="trustVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          "Notre métier n'est pas seulement financier ; il est avant tout humain. Nous protégeons ce que nos clients ont
          mis une vie à bâtir."
        </p>

        <div class="grid grid-cols-2 items-center gap-12 opacity-60 md:grid-cols-4">
          <div
            v-for="(badge, i) in trustBadges"
            :key="badge.label"
            class="flex flex-col items-center gap-2 transition-all duration-500 ease-out"
            :class="trustVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
            :style="{ transitionDelay: `${300 + i * 100}ms` }"
          >
            <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(197,198,207,0.3)]">
              <UIcon :name="badge.icon" class="text-navy-500" />
            </div>
            <p class="text-[10px] font-bold tracking-widest uppercase">{{ badge.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ───────────────────────────────────────────────────── -->
    <section ref="ctaRef" class="bg-navy-500 relative overflow-hidden py-32">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-white to-transparent"></div>
      </div>
      <div
        class="relative z-10 container mx-auto px-6 text-center transition-all duration-700 ease-out md:px-12"
        :class="ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <h2 class="mb-10 font-serif text-4xl leading-tight text-white md:text-6xl" style="letter-spacing: -0.02em">
          Prêt à valoriser <br />
          votre patrimoine ?
        </h2>
        <UButton label="Parler à un conseiller" to="/contact" color="secondary" size="xl" />
      </div>
    </section>
  </div>
</template>
