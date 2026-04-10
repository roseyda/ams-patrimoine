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

  // ── Animation ───────────────────────────────────────────────────────
  // Generic scroll-reveal: fires once when element enters viewport
  function useReveal(threshold = 0.12) {
    const target = ref<HTMLElement | null>(null);
    const visible = ref(false);
    useIntersectionObserver(
      target,
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0]?.isIntersecting) visible.value = true;
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    return { target, visible };
  }

  // Hero: above fold — trigger after first paint so CSS has time to apply initial state
  const heroReady = ref(false);

  // Below-fold sections
  const { target: expertiseRef, visible: expertiseVisible } = useReveal();
  const { target: dnaRef, visible: dnaVisible } = useReveal();
  const { target: trustRef, visible: trustVisible } = useReveal();
  const { target: ctaRef, visible: ctaVisible } = useReveal();

  onMounted(() => setTimeout(() => (heroReady.value = true), 80));

  useHead({
    title: 'AMS Patrimoine | Conseil en Gestion de Patrimoine',
    meta: [
      {
        name: 'description',
        content:
          "AMS Patrimoine accompagne les familles et chefs d'entreprise dans la structuration, l'optimisation et la transmission de leur patrimoine avec une vision long terme.",
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero : The Architectural Blade ──────────────────────────── -->
    <section class="relative flex min-h-screen items-center overflow-hidden bg-[#fafaf4]">
      <div class="container mx-auto grid grid-cols-1 items-stretch gap-0 px-6 md:grid-cols-12 md:px-12">
        <!-- Text column: staggered fade-up on mount -->
        <div class="z-10 flex flex-col justify-center py-20 pr-0 md:col-span-7 md:pr-12">
          <span
            class="mb-6 block font-sans text-sm font-semibold tracking-widest text-[#6d5d33] uppercase transition-all duration-700 ease-out"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Cabinet de Conseil en Gestion de Patrimoine
          </span>

          <h1
            class="mb-8 font-serif text-5xl leading-tight tracking-tighter text-[#081a3e] transition-all duration-700 ease-out md:text-7xl lg:text-8xl"
            style="letter-spacing: -0.02em; transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            L'art de <br />
            <span class="font-normal italic">préserver</span> <br />
            votre héritage.
          </h1>

          <p
            class="mb-12 max-w-xl text-lg leading-relaxed text-[#45464e] transition-all duration-700 ease-out md:text-xl"
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
            <NuxtLink
              to="/expertise"
              class="rounded-sm bg-[#081a3e] px-10 py-5 font-sans font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#0c2559]"
            >
              Découvrir notre expertise
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 border-b border-[#6d5d33]/30 px-4 py-5 font-sans font-medium tracking-wide text-[#6d5d33] transition-all duration-300 hover:border-[#6d5d33]"
            >
              Prendre rendez-vous
              <UIcon name="i-lucide-arrow-right" class="text-sm" />
            </NuxtLink>
          </div>
        </div>

        <!-- Image column: slides in from right on mount -->
        <div
          class="relative min-h-125 transition-all duration-1000 ease-out md:col-span-5 md:min-h-0"
          style="transition-delay: 200ms"
          :class="heroReady ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'"
        >
          <div class="absolute inset-0 z-0 translate-x-12 translate-y-12 bg-[#f4f4ef]"></div>
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
            class="absolute bottom-10 -left-20 z-20 max-w-xs border-l-4 border-[#6d5d33] bg-white p-8 shadow-xl transition-all duration-700 ease-out"
            style="transition-delay: 700ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
          >
            <p class="font-serif text-xl leading-snug text-[#081a3e]">
              "Chaque patrimoine raconte une histoire unique qui mérite une stratégie sur-mesure."
            </p>
            <p class="mt-4 font-sans text-xs font-bold tracking-widest text-[#6d5d33] uppercase">
              Marie-Sophie LECLUYSE
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Expertise : Tonal Grid ────────────────────────────────── -->
    <section ref="expertiseRef" class="py-32" style="background-color: #f4f4ef">
      <div class="container mx-auto px-6 md:px-12">
        <!-- Header -->
        <div
          class="mb-24 flex flex-col items-end justify-between gap-8 transition-all duration-700 ease-out md:flex-row"
          :class="expertiseVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="max-w-2xl">
            <h2 class="mb-6 font-serif text-4xl text-[#081a3e] md:text-5xl" style="letter-spacing: -0.02em">
              Expertise 360°
            </h2>
            <p class="text-lg text-[#45464e]">
              Une approche globale de votre situation patrimoniale combinant vision juridique, fiscale et financière.
            </p>
          </div>
          <span class="hidden font-serif text-8xl text-[#081a3e]/20 md:block">01</span>
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
              <UIcon :name="card.icon" class="mb-8 text-4xl text-[#6d5d33]" />
              <h3 class="mb-4 font-serif text-2xl text-[#081a3e]">{{ card.title }}</h3>
              <p class="grow leading-relaxed text-[#45464e]">{{ card.description }}</p>
              <div class="mt-8 border-t border-[#c5c6cf]/20 pt-8 transition-colors group-hover:border-[#6d5d33]/50">
                <NuxtLink
                  :to="card.to"
                  class="inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-widest text-[#6d5d33] uppercase"
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
    <section ref="dnaRef" class="bg-[#fafaf4] py-32">
      <div class="container mx-auto grid grid-cols-1 items-center gap-20 px-6 md:px-12 lg:grid-cols-2">
        <!-- Image: slides in from left -->
        <div
          class="relative order-2 transition-all duration-900 ease-out lg:order-1"
          :class="dnaVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'"
        >
          <div class="aspect-square overflow-hidden bg-[#f4f4ef]">
            <NuxtImg
              src="/images/home/bureau.jpg"
              alt="Bureau AMS Patrimoine"
              class="h-full w-full object-cover opacity-80 mix-blend-multiply"
              loading="lazy"
            />
          </div>
          <div class="absolute -right-10 -bottom-10 hidden bg-[#081a3e] p-12 text-white md:block">
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
          <span class="mb-6 block font-sans text-sm font-semibold tracking-widest text-[#6d5d33] uppercase">
            L'ADN du Cabinet
          </span>
          <h2
            class="mb-10 font-serif text-4xl leading-tight text-[#081a3e] md:text-5xl"
            style="letter-spacing: -0.02em"
          >
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
              <span class="font-serif text-2xl text-[#6d5d33]">{{ item.numeral }}</span>
              <div>
                <h4 class="mb-3 font-serif text-xl text-[#081a3e]">{{ item.title }}</h4>
                <p class="text-[#45464e]">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Trust ────────────────────────────────────────────────── -->
    <section ref="trustRef" class="py-32" style="background-color: rgba(232, 232, 227, 0.3)">
      <div class="container mx-auto max-w-4xl px-6 text-center md:px-12">
        <h2
          class="mb-12 font-serif text-4xl text-[#081a3e] transition-all duration-700 ease-out md:text-5xl"
          style="letter-spacing: -0.02em"
          :class="trustVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          La Confiance se mérite
        </h2>

        <p
          class="mb-16 font-serif text-xl leading-relaxed text-[#45464e] italic transition-all duration-700 ease-out"
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
            <div
              class="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
              style="background-color: rgba(197, 198, 207, 0.3)"
            >
              <UIcon :name="badge.icon" class="text-[#081a3e]" />
            </div>
            <p class="text-[10px] font-bold tracking-widest uppercase">{{ badge.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ───────────────────────────────────────────────────── -->
    <section ref="ctaRef" class="relative overflow-hidden bg-[#081a3e] py-32">
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
        <NuxtLink
          to="/contact"
          class="inline-block rounded-sm bg-[#6d5d33] px-12 py-6 font-sans font-medium tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-[#857342]"
          style="transition-delay: 150ms"
        >
          PARLER À UN CONSEILLER
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
