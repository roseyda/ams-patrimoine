<script setup lang="ts">
  interface BentoItem {
    icon: string;
    title: string;
    description: string;
    dark?: boolean;
    image?: string;
    imageAlt?: string;
  }

  const bentoItems: BentoItem[] = [
    {
      icon: 'i-lucide-landmark',
      title: 'Structuration du Patrimoine Professionnel',
      description:
        'Arbitrage entre détention directe ou via holding, optimisation de la rémunération et protection sociale du mandataire social.',
    },
    {
      icon: 'i-lucide-trending-down',
      title: 'Optimisation Fiscale',
      description:
        'Mise en place de stratégies de capitalisation et de défiscalisation adaptées aux revenus exceptionnels.',
      dark: true,
    },
    {
      icon: 'i-lucide-log-out',
      title: 'Exit Strategy',
      description:
        "Accompagnement dans la préparation de la cession d'entreprise : apport-cession (150-0 B ter) et réinvestissement.",
    },
  ];

  interface StatItem {
    value: string;
    label: string;
  }

  const stats: StatItem[] = [
    { value: '15+', label: "Années d'Expertise" },
    { value: '250M€', label: 'Actifs sous Conseil' },
    { value: '300+', label: 'Dirigeants Accompagnés' },
  ];

  const heroReady = ref(false);
  const bentoVisible = useReveal(useTemplateRef('bentoRef'));
  const statsVisible = useReveal(useTemplateRef('statsRef'));
  const ctaVisible = useReveal(useTemplateRef('ctaRef'));

  onMounted(() => setTimeout(() => (heroReady.value = true), 80));

  useHead({
    title: 'Accompagnement Dirigeants — AMS Patrimoine',
    meta: [
      {
        name: 'description',
        content:
          "La gestion du patrimoine d'un dirigeant exige une vision transversale, réconciliant enjeux professionnels et aspirations personnelles.",
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero ─── -->
    <section class="relative flex min-h-[80vh] items-center overflow-hidden bg-[#fafaf4]">
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="/images/dirigeants/hero-bg.jpg"
          alt="Siège social en verre — Pôle Business Dirigeants"
          class="h-full w-full object-cover opacity-40 grayscale"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#fafaf4] via-[#fafaf4]/60 to-transparent"></div>
      </div>

      <div class="relative z-10 container mx-auto px-6 py-32 md:px-12">
        <div class="max-w-2xl">
          <span
            class="mb-6 block font-sans text-sm font-semibold tracking-[0.2em] text-[#6d5d33] uppercase transition-all duration-700 ease-out"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Expertise Dédiée
          </span>

          <h1
            class="mb-8 font-serif text-6xl leading-tight font-bold text-[#000000] transition-all duration-700 ease-out md:text-7xl"
            style="letter-spacing: -0.02em; transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Accompagnement des <br />
            <span class="font-normal text-[#6d5d33] italic">Dirigeants</span> &amp; Entrepreneurs.
          </h1>

          <p
            class="mb-12 max-w-xl text-xl leading-relaxed font-light text-[#45464e] transition-all duration-700 ease-out"
            style="transition-delay: 300ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            La gestion du patrimoine d'un dirigeant exige une vision transversale, réconciliant enjeux professionnels et
            aspirations personnelles.
          </p>

          <div
            class="flex flex-wrap gap-6 transition-all duration-700 ease-out"
            style="transition-delay: 450ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            <NuxtLink
              to="/contact"
              class="rounded-sm bg-[#081a3e] px-8 py-4 font-sans text-sm font-semibold tracking-widest text-white uppercase transition-opacity hover:opacity-90"
            >
              Prendre Rendez-vous
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="border-b border-[#000000]/20 px-4 py-4 font-sans text-sm font-semibold tracking-widest text-[#000000] uppercase transition-all hover:border-[#000000]"
            >
              Consulter nos honoraires
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Blade image (desktop) -->
      <div
        class="absolute right-0 bottom-0 hidden h-2/3 w-1/3 translate-x-12 translate-y-12 lg:block"
        :class="heroReady ? 'opacity-100' : 'opacity-0'"
        style="transition: opacity 0.8s ease-out 0.6s"
      >
        <NuxtImg
          src="/images/dirigeants/boardroom.jpg"
          alt="Salle de conseil executive — AMS Patrimoine"
          class="h-full w-full rounded-sm object-cover shadow-2xl"
        />
      </div>
    </section>

    <!-- ─── Bento Grid ─── -->
    <section ref="bentoRef" class="py-32" style="background-color: #fafaf4">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mb-20 transition-all duration-700 ease-out"
          :class="bentoVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <h2 class="mb-4 font-serif text-4xl font-bold text-[#000000]">Une Approche Globale.</h2>
          <div class="h-1 w-24 bg-[#6d5d33]"></div>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
          <!-- Large feature -->
          <div
            class="group cursor-pointer bg-[#f4f4ef] p-12 transition-all duration-700 ease-out hover:bg-[#eeeee9] md:col-span-8"
            :class="bentoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 100ms"
          >
            <UIcon name="i-lucide-landmark" class="mb-8 text-4xl text-[#6d5d33]" />
            <h3 class="mb-6 font-serif text-3xl font-bold text-[#081a3e]">Structuration du Patrimoine Professionnel</h3>
            <p class="max-w-xl text-lg leading-relaxed text-[#45464e]">
              Arbitrage entre détention directe ou via holding, optimisation de la rémunération et protection sociale du
              mandataire social.
            </p>
            <div
              class="mt-12 flex items-center gap-4 font-sans text-xs font-semibold tracking-widest text-[#6d5d33] uppercase opacity-0 transition-opacity group-hover:opacity-100"
            >
              En savoir plus <UIcon name="i-lucide-arrow-right" class="text-sm" />
            </div>
          </div>

          <!-- Dark feature -->
          <div
            class="flex flex-col justify-between bg-[#081a3e] p-12 text-white transition-all duration-700 ease-out md:col-span-4"
            :class="bentoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 200ms"
          >
            <div>
              <UIcon name="i-lucide-trending-down" class="mb-8 text-4xl text-[#7483ad]" />
              <h3 class="mb-4 font-serif text-2xl font-bold">Optimisation Fiscale</h3>
              <p class="leading-relaxed text-[#7483ad]">
                Mise en place de stratégies de capitalisation et de défiscalisation adaptées aux revenus exceptionnels.
              </p>
            </div>
          </div>

          <!-- Exit Strategy -->
          <div
            class="border border-[#c5c6cf]/20 p-12 transition-all duration-700 ease-out md:col-span-4"
            :class="bentoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 300ms"
          >
            <UIcon name="i-lucide-log-out" class="mb-8 text-4xl text-[#6d5d33]" />
            <h3 class="mb-4 font-serif text-2xl font-bold text-[#000000]">Exit Strategy</h3>
            <p class="leading-relaxed text-[#45464e]">
              Accompagnement dans la préparation de la cession d'entreprise : apport-cession (150-0 B ter) et
              réinvestissement.
            </p>
          </div>

          <!-- Transmission image -->
          <div
            class="group relative h-[400px] overflow-hidden transition-all duration-700 ease-out md:col-span-8"
            :class="bentoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 400ms"
          >
            <NuxtImg
              src="/images/dirigeants/handshake.jpg"
              alt="Transmission d'entreprise — poignée de main"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 flex flex-col justify-end bg-[#081a3e]/60 p-12">
              <h3 class="mb-2 font-serif text-3xl font-bold text-white">Transmission</h3>
              <p class="max-w-md text-[#7483ad]">
                Pacte Dutreil et donation-partage pour pérenniser l'outil de travail et protéger la génération suivante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Stats ─── -->
    <section ref="statsRef" class="py-24" style="background-color: #f4f4ef">
      <div class="container mx-auto grid grid-cols-1 gap-12 px-6 text-center md:grid-cols-3 md:px-12">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="transition-all duration-700 ease-out"
          :class="statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="mb-4 font-serif text-5xl font-bold text-[#6d5d33]">{{ stat.value }}</div>
          <p class="font-sans text-xs font-semibold tracking-widest text-[#45464e] uppercase">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- ─── CTA ─── -->
    <section ref="ctaRef" class="relative overflow-hidden py-32">
      <div class="absolute inset-0 -z-10">
        <NuxtImg
          src="/images/dirigeants/cta-bg.jpg"
          alt="Dirigeant devant la fenêtre d'un gratte-ciel"
          class="h-full w-full object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-[#081a3e]/80"></div>
      </div>

      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mx-auto max-w-4xl rounded-sm p-16 text-center transition-all duration-700 ease-out"
          style="background: rgba(250, 250, 244, 0.7); backdrop-filter: blur(16px)"
          :class="ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <h2 class="mb-6 font-serif text-4xl font-bold text-[#000000]">
            Prêt à sécuriser votre avenir professionnel&nbsp;?
          </h2>
          <p class="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[#45464e]">
            Chaque parcours d'entrepreneur est unique. Rencontrons-nous pour une étude personnalisée de votre situation
            patrimoniale et fiscale.
          </p>
          <div class="flex flex-col justify-center gap-6 sm:flex-row">
            <NuxtLink
              to="/contact"
              class="rounded-sm bg-[#081a3e] px-10 py-5 font-sans text-sm font-semibold tracking-widest text-white uppercase transition-colors hover:bg-black"
            >
              Prendre Contact
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="rounded-sm border border-[#000000]/10 bg-white/50 px-10 py-5 font-sans text-sm font-semibold tracking-widest text-[#000000] uppercase backdrop-blur transition-colors hover:bg-white/80"
            >
              Notre Guide Dirigeant
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
