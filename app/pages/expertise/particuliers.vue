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

  const heroReady = useHeroReady();
  const servicesVisible = useReveal(useTemplateRef('servicesRef'));
  const transmissionVisible = useReveal(useTemplateRef('transmissionRef'));
  const ctaVisible = useReveal(useTemplateRef('ctaRef'));

  useSeoMeta({
    title: 'Accompagnement Particuliers — AMS Patrimoine',
    description:
      'Un accompagnement sur-mesure pour les familles exigeantes, alliant protection, pérennité et vision long-terme.',
  });
</script>

<template>
  <div class="bg-sand-100 text-sand-900">
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
          <span class="text-gold-500 mb-6 block font-sans text-xs font-semibold tracking-[0.2em] uppercase">
            Services aux Particuliers
          </span>
          <h1 class="text-navy-500 mb-8 font-serif text-5xl leading-tight md:text-6xl" style="letter-spacing: -0.04em">
            Élever votre patrimoine au rang d'héritage.
          </h1>
          <p class="text-sand-700 mb-10 max-w-md text-lg leading-relaxed">
            Un accompagnement sur-mesure pour les familles exigeantes, alliant protection, pérennité et vision
            long-terme.
          </p>
          <UButton label="Découvrir notre expertise" to="/expertise" size="xl" />
        </div>
      </div>
    </section>

    <!-- ─── Services Grid ─── -->
    <section ref="servicesRef" class="bg-sand-100 py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mb-24 grid grid-cols-1 items-end gap-12 transition-all duration-700 ease-out md:grid-cols-12"
          :class="servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="md:col-span-6">
            <h2 class="text-navy-500 font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Une approche holistique de vos actifs.
            </h2>
          </div>
          <div class="md:col-span-6">
            <p class="border-gold-500 text-sand-700 border-l-2 pl-8 text-xl leading-relaxed italic">
              "La gestion privée ne se limite pas aux chiffres ; elle s'inscrit dans l'histoire et les projets d'une
              vie."
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-1 md:grid-cols-3">
          <div
            v-for="(card, i) in serviceCards"
            :key="card.title"
            class="group bg-sand-200 hover:bg-sand-300 flex min-h-100 flex-col justify-between p-12 transition-all duration-700 ease-out"
            :class="servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            :style="{ transitionDelay: `${i * 150}ms` }"
          >
            <div>
              <UIcon :name="card.icon" class="text-gold-500 mb-8 text-4xl" />
              <h3 class="text-navy-500 mb-4 font-serif text-2xl">{{ card.title }}</h3>
              <p class="text-sand-700 leading-relaxed">{{ card.description }}</p>
            </div>
            <div
              class="text-gold-500 mt-8 flex translate-x-0 items-center font-sans text-xs font-bold tracking-widest uppercase transition-transform group-hover:translate-x-2"
            >
              En savoir plus
              <UIcon name="i-lucide-arrow-right" class="ml-2 text-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Transmission Section ─── -->
    <section ref="transmissionRef" class="bg-sand-200 py-32">
      <div class="container mx-auto grid grid-cols-1 items-center gap-20 px-6 md:px-12 lg:grid-cols-2">
        <!-- Image -->
        <div
          class="relative order-2 transition-all duration-700 ease-out lg:order-1"
          :class="transmissionVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'"
        >
          <div class="aspect-4/5 overflow-hidden rounded-sm">
            <NuxtImg
              src="/images/particuliers/leather-case.jpg"
              alt="Serviette en cuir et stylo plume — transmission patrimoniale"
              class="h-full w-full object-cover"
              style="filter: grayscale(40%)"
              loading="lazy"
            />
          </div>
          <div class="absolute right-0 -bottom-10 hidden bg-white p-12 shadow-xl md:right-10 md:block">
            <span class="text-gold-500 mb-4 block font-serif text-5xl italic">04.</span>
            <h4 class="text-navy-500 mb-2 font-serif text-xl">Ingénierie Successorale</h4>
            <p class="text-sand-700 text-sm">Préparer demain, aujourd'hui.</p>
          </div>
        </div>

        <!-- Text -->
        <div
          class="order-1 transition-all duration-700 ease-out lg:order-2"
          style="transition-delay: 200ms"
          :class="transmissionVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
        >
          <h2 class="text-navy-500 mb-8 font-serif text-4xl font-bold md:text-5xl" style="letter-spacing: -0.02em">
            L'art de la transmission.
          </h2>
          <p class="text-sand-700 mb-8 text-lg leading-relaxed">
            La transmission d'un patrimoine est une étape clé de la vie patrimoniale. Nous vous accompagnons pour
            définir la stratégie la plus adaptée à votre situation familiale et vos objectifs de protection.
          </p>
          <ul class="mb-12 space-y-6">
            <li v-for="point in transmissionPoints" :key="point" class="flex items-start">
              <UIcon name="i-lucide-check-circle" class="text-gold-500 mr-4 shrink-0" />
              <span class="text-navy-500 font-medium">{{ point }}</span>
            </li>
          </ul>
          <NuxtLink
            to="/contact"
            class="border-navy-500 text-navy-500 hover:border-gold-500 hover:text-gold-500 border-b pb-2 font-sans text-sm tracking-widest uppercase transition-colors"
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
            class="bg-navy-500 relative flex flex-col justify-center overflow-hidden p-16 md:col-span-2 md:row-span-2"
          >
            <div class="relative z-10">
              <h2 class="mb-8 font-serif text-4xl leading-tight text-white">
                Prêt à dessiner les contours de votre futur financier&nbsp;?
              </h2>
              <p class="text-navy-300 mb-12 max-w-sm text-lg">
                Prenez rendez-vous pour un audit patrimonial complet et confidentiel.
              </p>
              <UButton label="Contacter un conseiller" to="/contact" color="neutral" variant="soft" size="xl" />
            </div>
            <div class="bg-gold-500 absolute -top-32 -right-32 h-64 w-64 rounded-full opacity-10"></div>
          </div>

          <!-- Image panel -->
          <div class="bg-sand-200 hidden md:col-span-1 md:row-span-1 md:block">
            <NuxtImg
              src="/images/cabinet/portrait.jpg"
              alt="Conseil patrimonial haut de gamme"
              class="h-full w-full object-cover grayscale"
              loading="lazy"
            />
          </div>

          <!-- Philosophy card -->
          <div class="bg-sand-200 flex flex-col justify-end p-12 md:col-span-1 md:row-span-2">
            <h4 class="text-navy-500 mb-4 font-serif text-xl">Notre Philosophie</h4>
            <p class="text-sand-700 text-sm leading-relaxed">
              Engagement, discrétion et excellence opérationnelle au service de votre réussite.
            </p>
          </div>

          <!-- Badge -->
          <div
            class="bg-gold-500 flex flex-col items-center justify-center p-12 text-center md:col-span-1 md:row-span-1"
          >
            <UIcon name="i-lucide-shield-check" class="mb-4 text-5xl text-white" />
            <p class="font-sans text-xs font-bold tracking-widest text-white uppercase">Cabinet Agréé</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
