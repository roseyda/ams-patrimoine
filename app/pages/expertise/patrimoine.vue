<script setup lang="ts">
  interface AuditStep {
    number: string;
    title: string;
    description: string;
  }

  interface ProcessStep {
    icon: string;
    title: string;
    description: string;
    bullets: string[];
  }

  const auditSteps: AuditStep[] = [
    {
      number: '01.',
      title: 'Diagnostic Structurel',
      description: "Analyse exhaustive de l'actif professionnel et privé, bilan matrimonial et prévoyance.",
    },
    {
      number: '02.',
      title: 'Ingénierie Fiscale',
      description:
        "Optimisation de l'impôt sur la fortune immobilière, de l'impôt sur le revenu et des droits de mutation.",
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      icon: 'i-lucide-lightbulb',
      title: 'Analyse Prismatique',
      description:
        'Nous croisons les regards civils, fiscaux et financiers pour obtenir une vision à 360° de votre situation actuelle.',
      bullets: ['Bilan de prévoyance', 'Audit de gouvernance'],
    },
    {
      icon: 'i-lucide-pencil',
      title: 'Conception Sur-Mesure',
      description:
        "Élaboration d'une stratégie cible utilisant les outils juridiques les plus performants (Sociétés Civiles, Assurance-Vie, Holdings).",
      bullets: ['Simulation chiffrée', 'Stratégie de démembrement'],
    },
    {
      icon: 'i-lucide-gavel',
      title: 'Mise en Œuvre & Suivi',
      description:
        'Accompagnement dans la réalisation des actes et ajustements réguliers face aux évolutions législatives.',
      bullets: ['Veille réglementaire', 'Reporting consolidé'],
    },
  ];

  const heroReady = ref(false);
  const auditVisible = useReveal(useTemplateRef('auditRef'));
  const processVisible = useReveal(useTemplateRef('processRef'), 0.05);
  const ctaVisible = useReveal(useTemplateRef('ctaRef'));

  onMounted(() => setTimeout(() => (heroReady.value = true), 80));

  useHead({
    title: 'Stratégie Patrimoniale — AMS Patrimoine',
    meta: [
      {
        name: 'description',
        content:
          "Au-delà de la simple gestion, nous concevons des structures juridiques et fiscales pérennes, capables de traverser les générations avec la même solidité qu'un édifice de maître.",
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero ─── -->
    <section class="relative flex min-h-[80vh] items-center overflow-hidden px-6 py-20 md:px-12">
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="/images/patrimoine/stone-facade.jpg"
          alt="Façade en pierre avec ombres dramatiques — Stratégie Patrimoniale"
          class="h-full w-full object-cover opacity-20 grayscale"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#fafaf4] via-[#fafaf4]/90 to-transparent"></div>
      </div>

      <div class="relative z-10 container mx-auto max-w-4xl">
        <span
          class="mb-6 block font-sans text-sm font-semibold tracking-[0.3em] text-[#6d5d33] uppercase transition-all duration-700 ease-out"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          Conseil en Ingénierie Stratégique
        </span>
        <h1
          class="mb-8 font-serif text-6xl leading-tight font-bold text-[#081a3e] transition-all duration-700 ease-out md:text-7xl"
          style="letter-spacing: -0.02em; transition-delay: 150ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          La Stratégie Patrimoniale <br />
          comme <span class="font-normal text-[#6d5d33] italic">Architecture.</span>
        </h1>
        <p
          class="mb-10 max-w-2xl text-xl leading-relaxed text-[#45464e] transition-all duration-700 ease-out"
          style="transition-delay: 300ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          Au-delà de la simple gestion, nous concevons des structures juridiques et fiscales pérennes, capables de
          traverser les générations avec la même solidité qu'un édifice de maître.
        </p>
        <div
          class="flex flex-wrap gap-6 transition-all duration-700 ease-out"
          style="transition-delay: 450ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          <NuxtLink
            to="/contact"
            class="rounded-sm bg-[#081a3e] px-8 py-4 font-sans text-sm font-semibold tracking-widest text-white uppercase shadow-xl transition-opacity hover:opacity-90"
          >
            Initier un Audit
          </NuxtLink>
          <NuxtLink
            to="/approche"
            class="border-b border-[#6d5d33] px-4 py-4 font-sans text-sm font-semibold tracking-widest text-[#6d5d33] uppercase transition-opacity hover:opacity-70"
          >
            Découvrir la méthode
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── Audit Section ─── -->
    <section ref="auditRef" class="py-32" style="background-color: #f4f4ef">
      <div class="container mx-auto grid grid-cols-1 items-center gap-16 px-6 md:grid-cols-12 md:px-12">
        <!-- Text -->
        <div
          class="space-y-12 transition-all duration-700 ease-out md:col-span-5"
          :class="auditVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div>
            <h2 class="mb-6 font-serif text-4xl font-bold text-[#081a3e]">
              L'Audit : <br />La Fondation de vos Ambitions
            </h2>
            <p class="text-lg leading-relaxed text-[#45464e]">
              Chaque patrimoine possède sa propre mémoire et ses zones d'ombre. Notre audit ne se limite pas à un
              inventaire comptable ; il analyse les structures de détention, les expositions fiscales et les flux
              successoraux pour identifier les leviers de protection.
            </p>
          </div>
          <div class="space-y-8">
            <div v-for="step in auditSteps" :key="step.number" class="flex items-start gap-4">
              <span class="font-serif text-2xl font-bold text-[#6d5d33]">{{ step.number }}</span>
              <div>
                <h4 class="mb-2 font-sans text-sm font-semibold tracking-wider text-[#081a3e] uppercase">
                  {{ step.title }}
                </h4>
                <p class="text-sm text-[#45464e]">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Asymmetric blade -->
        <div
          class="relative h-[600px] transition-all duration-700 ease-out md:col-span-7"
          style="transition-delay: 200ms"
          :class="auditVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
        >
          <div class="absolute top-0 right-0 h-[500px] w-11/12 overflow-hidden bg-[#e3e3de]">
            <NuxtImg
              src="/images/patrimoine/interior.jpg"
              alt="Intérieur minimaliste moderne — architecture de transmission"
              class="h-full w-full object-cover brightness-90 grayscale"
              loading="lazy"
            />
          </div>
          <div class="absolute bottom-0 left-0 w-3/4 bg-white/90 p-12 shadow-2xl backdrop-blur">
            <h3 class="mb-4 font-serif text-3xl text-[#081a3e] italic">Vision Long-Terme</h3>
            <p class="mb-6 text-[#45464e] italic">
              "La richesse ne se mesure pas à ce que l'on gagne, mais à ce que l'on transmet avec sérénité."
            </p>
            <div class="flex items-center gap-4 text-[#6d5d33]">
              <UIcon name="i-lucide-drafting-compass" />
              <span class="font-sans text-xs font-bold tracking-widest uppercase">Architecture de Transmission</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Process ─── -->
    <section ref="processRef" class="bg-[#fafaf4] py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mx-auto mb-20 max-w-3xl text-center transition-all duration-700 ease-out"
          :class="processVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <h2 class="mb-6 font-serif text-5xl font-bold tracking-tight text-[#081a3e]">Le Processus AMS</h2>
          <p class="text-[#45464e]">
            Une méthodologie rigoureuse en trois phases, alliant technicité juridique et écoute active.
          </p>
        </div>

        <div
          class="grid grid-cols-1 border border-[#c5c6cf]/20 md:grid-cols-3"
          style="gap: 2px; background-color: rgba(197, 198, 207, 0.2)"
        >
          <div
            v-for="(step, i) in processSteps"
            :key="step.title"
            class="group bg-[#fafaf4] p-12 transition-all duration-700 ease-out hover:bg-white"
            :class="processVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            :style="{ transitionDelay: `${i * 150}ms` }"
          >
            <UIcon :name="step.icon" class="mb-8 text-4xl text-[#6d5d33] transition-transform group-hover:scale-110" />
            <h3 class="mb-4 font-serif text-2xl font-bold text-[#081a3e]">{{ step.title }}</h3>
            <p class="mb-8 leading-relaxed text-[#45464e]">{{ step.description }}</p>
            <ul class="space-y-3">
              <li
                v-for="bullet in step.bullets"
                :key="bullet"
                class="flex items-center gap-3 text-sm font-medium text-[#45464e]"
              >
                <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6d5d33]"></span>
                {{ bullet }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ─── -->
    <section ref="ctaRef" class="bg-[#081a3e] py-24 text-white">
      <div
        class="container mx-auto flex flex-col items-center justify-between gap-12 px-6 transition-all duration-700 ease-out md:flex-row md:px-12"
        :class="ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <div class="max-w-2xl text-center md:text-left">
          <h2 class="mb-4 font-serif text-4xl font-bold">Votre héritage mérite une structure d'exception.</h2>
          <p class="text-[#7483ad] opacity-80">
            Prenez rendez-vous pour un premier échange confidentiel sur vos projets de transmission.
          </p>
        </div>
        <NuxtLink
          to="/contact"
          class="shrink-0 rounded-sm bg-[#fafaf4] px-12 py-5 font-sans text-sm font-bold tracking-widest text-[#081a3e] uppercase transition-colors hover:bg-[#6d5d33] hover:text-white"
        >
          Réserver une Consultation
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
