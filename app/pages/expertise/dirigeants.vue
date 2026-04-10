<script setup lang="ts">
  interface StatItem {
    value: string;
    label: string;
  }

  const stats: StatItem[] = [
    { value: '15+', label: "Années d'Expertise" },
    { value: '250M€', label: 'Actifs sous Conseil' },
    { value: '300+', label: 'Dirigeants Accompagnés' },
  ];

  const heroReady = useHeroReady();
  const bentoVisible = useReveal(useTemplateRef('bentoRef'));
  const statsVisible = useReveal(useTemplateRef('statsRef'));
  const ctaVisible = useReveal(useTemplateRef('ctaRef'));

  useSeoMeta({
    title: 'Accompagnement Dirigeants — AMS Patrimoine',
    description:
      "La gestion du patrimoine d'un dirigeant exige une vision transversale, réconciliant enjeux professionnels et aspirations personnelles.",
  });
</script>

<template>
  <div class="bg-sand-100 text-sand-900">
    <!-- ─── Hero ─── -->
    <section class="bg-sand-100 relative flex min-h-[80vh] items-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="/images/dirigeants/hero-bg.jpg"
          alt="Siège social en verre — Pôle Business Dirigeants"
          class="h-full w-full object-cover opacity-40 grayscale"
        />
        <div class="from-sand-100 via-sand-100/60 absolute inset-0 bg-gradient-to-r to-transparent"></div>
      </div>

      <div class="relative z-10 container mx-auto px-6 py-32 md:px-12">
        <div class="max-w-2xl">
          <span
            class="text-gold-500 mb-6 block font-sans text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-700 ease-out"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Expertise Dédiée
          </span>

          <h1
            class="mb-8 font-serif text-6xl leading-tight font-bold text-black transition-all duration-700 ease-out md:text-7xl"
            style="letter-spacing: -0.02em; transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Accompagnement des <br />
            <span class="text-gold-500 font-normal italic">Dirigeants</span> &amp; Entrepreneurs.
          </h1>

          <p
            class="text-sand-700 mb-12 max-w-xl text-xl leading-relaxed font-light transition-all duration-700 ease-out"
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
            <UButton label="Prendre Rendez-vous" to="/contact" size="xl" />
            <UButton label="Consulter nos honoraires" to="/contact" variant="link" color="neutral" size="xl" />
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
    <section ref="bentoRef" class="bg-sand-100 py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mb-20 transition-all duration-700 ease-out"
          :class="bentoVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <h2 class="mb-4 font-serif text-4xl font-bold text-black">Une Approche Globale.</h2>
          <div class="bg-gold-500 h-1 w-24"></div>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
          <!-- Large feature -->
          <div
            class="group bg-sand-200 hover:bg-sand-300 cursor-pointer p-12 transition-all duration-700 ease-out md:col-span-8"
            :class="bentoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 100ms"
          >
            <UIcon name="i-lucide-landmark" class="text-gold-500 mb-8 text-4xl" />
            <h3 class="text-navy-500 mb-6 font-serif text-3xl font-bold">Structuration du Patrimoine Professionnel</h3>
            <p class="text-sand-700 max-w-xl text-lg leading-relaxed">
              Arbitrage entre détention directe ou via holding, optimisation de la rémunération et protection sociale du
              mandataire social.
            </p>
            <div
              class="text-gold-500 mt-12 flex items-center gap-4 font-sans text-xs font-semibold tracking-widest uppercase opacity-0 transition-opacity group-hover:opacity-100"
            >
              En savoir plus <UIcon name="i-lucide-arrow-right" class="text-sm" />
            </div>
          </div>

          <!-- Dark feature -->
          <div
            class="bg-navy-500 flex flex-col justify-between p-12 text-white transition-all duration-700 ease-out md:col-span-4"
            :class="bentoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 200ms"
          >
            <div>
              <UIcon name="i-lucide-trending-down" class="text-navy-300 mb-8 text-4xl" />
              <h3 class="mb-4 font-serif text-2xl font-bold">Optimisation Fiscale</h3>
              <p class="text-navy-300 leading-relaxed">
                Mise en place de stratégies de capitalisation et de défiscalisation adaptées aux revenus exceptionnels.
              </p>
            </div>
          </div>

          <!-- Exit Strategy -->
          <div
            class="border-sand-500/20 border p-12 transition-all duration-700 ease-out md:col-span-4"
            :class="bentoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 300ms"
          >
            <UIcon name="i-lucide-log-out" class="text-gold-500 mb-8 text-4xl" />
            <h3 class="mb-4 font-serif text-2xl font-bold text-black">Exit Strategy</h3>
            <p class="text-sand-700 leading-relaxed">
              Accompagnement dans la préparation de la cession d'entreprise : apport-cession (150-0 B ter) et
              réinvestissement.
            </p>
          </div>

          <!-- Transmission image -->
          <div
            class="group relative h-100 overflow-hidden transition-all duration-700 ease-out md:col-span-8"
            :class="bentoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            style="transition-delay: 400ms"
          >
            <NuxtImg
              src="/images/dirigeants/handshake.jpg"
              alt="Transmission d'entreprise — poignée de main"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div class="bg-navy-500/60 absolute inset-0 flex flex-col justify-end p-12">
              <h3 class="mb-2 font-serif text-3xl font-bold text-white">Transmission</h3>
              <p class="text-navy-300 max-w-md">
                Pacte Dutreil et donation-partage pour pérenniser l'outil de travail et protéger la génération suivante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Stats ─── -->
    <section ref="statsRef" class="bg-sand-200 py-24">
      <div class="container mx-auto grid grid-cols-1 gap-12 px-6 text-center md:grid-cols-3 md:px-12">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="transition-all duration-700 ease-out"
          :class="statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="text-gold-500 mb-4 font-serif text-5xl font-bold">{{ stat.value }}</div>
          <p class="text-sand-700 font-sans text-xs font-semibold tracking-widest uppercase">{{ stat.label }}</p>
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
        <div class="bg-navy-500/80 absolute inset-0"></div>
      </div>

      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mx-auto max-w-4xl rounded-sm p-16 text-center transition-all duration-700 ease-out"
          style="background: rgba(250, 250, 244, 0.7); backdrop-filter: blur(16px)"
          :class="ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <h2 class="mb-6 font-serif text-4xl font-bold text-black">
            Prêt à sécuriser votre avenir professionnel&nbsp;?
          </h2>
          <p class="text-sand-700 mx-auto mb-10 max-w-xl text-lg leading-relaxed">
            Chaque parcours d'entrepreneur est unique. Rencontrons-nous pour une étude personnalisée de votre situation
            patrimoniale et fiscale.
          </p>
          <div class="flex flex-col justify-center gap-6 sm:flex-row">
            <UButton label="Prendre Contact" to="/contact" size="xl" />
            <UButton label="Notre Guide Dirigeant" to="/contact" variant="outline" color="neutral" size="xl" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
