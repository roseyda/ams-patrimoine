<script setup lang="ts">
  interface ServiceCard {
    icon: string;
    title: string;
    description: string;
  }

  const serviceCards: ServiceCard[] = [
    {
      icon: 'i-lucide-shield-check',
      title: 'Protection de la Famille',
      description:
        'Anticiper les aléas pour garantir la sérénité de vos proches. Prévoyance, assurance vie et stratégies de couverture personnalisées.',
    },
    {
      icon: 'i-lucide-landmark',
      title: 'Gestion de Fortune',
      description:
        "Optimisation de votre portefeuille financier à travers des supports d'investissement rigoureusement sélectionnés en architecture ouverte.",
    },
    {
      icon: 'i-lucide-home',
      title: 'Stratégie Immobilière',
      description:
        "De l'investissement locatif au démembrement de propriété, nous structurons vos actifs immobiliers pour une performance durable.",
    },
  ];

  const transmissionPoints: string[] = [
    'Analyse fiscale de la transmission',
    'Rédaction de clauses bénéficiaires sur-mesure',
    'Optimisation des donations entre époux',
  ];

  const heroReady = ref(false);
  const servicesVisible = useReveal(useTemplateRef('servicesRef'));
  const transmissionVisible = useReveal(useTemplateRef('transmissionRef'));
  const ctaVisible = useReveal(useTemplateRef('ctaRef'));

  onMounted(() => setTimeout(() => (heroReady.value = true), 80));

  useHead({
    title: 'Accompagnement Particuliers — AMS Patrimoine',
    meta: [
      {
        name: 'description',
        content:
          'Un accompagnement sur-mesure pour les familles exigeantes, alliant protection, pérennité et vision long-terme.',
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero ─── -->
    <section class="relative flex min-h-[85vh] items-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="/images/particuliers/hero-bg.jpg"
          alt="Intérieur architectural minimaliste — Pôle Privé Particuliers"
          class="h-full w-full object-cover brightness-90"
          style="filter: grayscale(20%)"
        />
      </div>

      <div class="relative z-10 container mx-auto px-6 py-32 md:px-12">
        <div
          class="max-w-2xl rounded-sm bg-white p-10 shadow-2xl transition-all duration-700 ease-out md:p-20"
          style="transition-delay: 200ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'"
        >
          <span class="mb-6 block font-sans text-xs font-semibold tracking-[0.2em] text-[#6d5d33] uppercase">
            Services aux Particuliers
          </span>
          <h1 class="mb-8 font-serif text-5xl leading-tight text-[#081a3e] md:text-6xl" style="letter-spacing: -0.04em">
            Élever votre patrimoine au rang d'héritage.
          </h1>
          <p class="mb-10 max-w-md text-lg leading-relaxed text-[#45464e]">
            Un accompagnement sur-mesure pour les familles exigeantes, alliant protection, pérennité et vision
            long-terme.
          </p>
          <NuxtLink
            to="/expertise"
            class="rounded-sm bg-[#081a3e] px-10 py-5 font-sans text-sm font-medium tracking-widest text-white uppercase transition-opacity hover:opacity-90"
          >
            Découvrir notre expertise
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── Services Grid ─── -->
    <section ref="servicesRef" class="bg-[#fafaf4] py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mb-24 grid grid-cols-1 items-end gap-12 transition-all duration-700 ease-out md:grid-cols-12"
          :class="servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="md:col-span-6">
            <h2 class="font-serif text-4xl font-bold tracking-tight text-[#081a3e] md:text-5xl">
              Une approche holistique de vos actifs.
            </h2>
          </div>
          <div class="md:col-span-6">
            <p class="border-l-2 border-[#6d5d33] pl-8 text-xl leading-relaxed text-[#45464e] italic">
              "La gestion privée ne se limite pas aux chiffres ; elle s'inscrit dans l'histoire et les projets d'une
              vie."
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-1 md:grid-cols-3">
          <div
            v-for="(card, i) in serviceCards"
            :key="card.title"
            class="group flex min-h-[400px] flex-col justify-between bg-[#f4f4ef] p-12 transition-all duration-700 ease-out hover:bg-[#e8e8e3]"
            :class="servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            :style="{ transitionDelay: `${i * 150}ms` }"
          >
            <div>
              <UIcon :name="card.icon" class="mb-8 text-4xl text-[#6d5d33]" />
              <h3 class="mb-4 font-serif text-2xl text-[#081a3e]">{{ card.title }}</h3>
              <p class="leading-relaxed text-[#45464e]">{{ card.description }}</p>
            </div>
            <div
              class="mt-8 flex translate-x-0 items-center font-sans text-xs font-bold tracking-widest text-[#6d5d33] uppercase transition-transform group-hover:translate-x-2"
            >
              En savoir plus
              <UIcon name="i-lucide-arrow-right" class="ml-2 text-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Transmission Section ─── -->
    <section ref="transmissionRef" class="py-32" style="background-color: #f4f4ef">
      <div class="container mx-auto grid grid-cols-1 items-center gap-20 px-6 md:px-12 lg:grid-cols-2">
        <!-- Image -->
        <div
          class="relative order-2 transition-all duration-700 ease-out lg:order-1"
          :class="transmissionVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'"
        >
          <div class="aspect-[4/5] overflow-hidden rounded-sm">
            <NuxtImg
              src="/images/particuliers/leather-case.jpg"
              alt="Serviette en cuir et stylo plume — transmission patrimoniale"
              class="h-full w-full object-cover"
              style="filter: grayscale(40%)"
              loading="lazy"
            />
          </div>
          <div class="absolute -right-0 -bottom-10 hidden bg-white p-12 shadow-xl md:right-10 md:block">
            <span class="mb-4 block font-serif text-5xl text-[#6d5d33] italic">04.</span>
            <h4 class="mb-2 font-serif text-xl text-[#081a3e]">Ingénierie Successorale</h4>
            <p class="text-sm text-[#45464e]">Préparer demain, aujourd'hui.</p>
          </div>
        </div>

        <!-- Text -->
        <div
          class="order-1 transition-all duration-700 ease-out lg:order-2"
          style="transition-delay: 200ms"
          :class="transmissionVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
        >
          <h2 class="mb-8 font-serif text-4xl font-bold text-[#081a3e] md:text-5xl" style="letter-spacing: -0.02em">
            L'art de la transmission.
          </h2>
          <p class="mb-8 text-lg leading-relaxed text-[#45464e]">
            La transmission d'un patrimoine est une étape clé de la vie patrimoniale. Nous vous accompagnons pour
            définir la stratégie la plus adaptée à votre situation familiale et vos objectifs de protection.
          </p>
          <ul class="mb-12 space-y-6">
            <li v-for="point in transmissionPoints" :key="point" class="flex items-start">
              <UIcon name="i-lucide-check-circle" class="mr-4 shrink-0 text-[#6d5d33]" />
              <span class="font-medium text-[#081a3e]">{{ point }}</span>
            </li>
          </ul>
          <NuxtLink
            to="/contact"
            class="border-b border-[#081a3e] pb-2 font-sans text-sm tracking-widest text-[#081a3e] uppercase transition-colors hover:border-[#6d5d33] hover:text-[#6d5d33]"
          >
            Consulter notre guide de transmission
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── CTA Bento ─── -->
    <section ref="ctaRef" class="py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="grid grid-cols-1 gap-4 transition-all duration-700 ease-out md:grid-cols-4 md:grid-rows-2"
          style="height: auto; min-height: 600px"
          :class="ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <!-- CTA card -->
          <div
            class="relative flex flex-col justify-center overflow-hidden bg-[#081a3e] p-16 md:col-span-2 md:row-span-2"
          >
            <div class="relative z-10">
              <h2 class="mb-8 font-serif text-4xl leading-tight text-white">
                Prêt à dessiner les contours de votre futur financier&nbsp;?
              </h2>
              <p class="mb-12 max-w-sm text-lg text-[#7483ad]">
                Prenez rendez-vous pour un audit patrimonial complet et confidentiel.
              </p>
              <NuxtLink
                to="/contact"
                class="rounded-sm bg-[#fafaf4] px-10 py-5 font-sans text-xs font-bold tracking-[0.2em] text-[#081a3e] uppercase"
              >
                Contacter un conseiller
              </NuxtLink>
            </div>
            <div class="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[#6d5d33] opacity-10"></div>
          </div>

          <!-- Image panel -->
          <div class="hidden bg-[#f4f4ef] md:col-span-1 md:row-span-1 md:block">
            <NuxtImg
              src="/images/cabinet/portrait.jpg"
              alt="Conseil patrimonial haut de gamme"
              class="h-full w-full object-cover grayscale"
              loading="lazy"
            />
          </div>

          <!-- Philosophy card -->
          <div class="flex flex-col justify-end bg-[#f4f4ef] p-12 md:col-span-1 md:row-span-2">
            <h4 class="mb-4 font-serif text-xl text-[#081a3e]">Notre Philosophie</h4>
            <p class="text-sm leading-relaxed text-[#45464e]">
              Engagement, discrétion et excellence opérationnelle au service de votre réussite.
            </p>
          </div>

          <!-- Badge -->
          <div
            class="flex flex-col items-center justify-center bg-[#6d5d33] p-12 text-center md:col-span-1 md:row-span-1"
          >
            <UIcon name="i-lucide-shield-check" class="mb-4 text-5xl text-white" />
            <p class="font-sans text-xs font-bold tracking-widest text-white uppercase">Cabinet Agréé</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
