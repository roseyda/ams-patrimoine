<script setup lang="ts">
  interface ExpertiseCard {
    category: string;
    title: string;
    description: string;
    ctaLabel: string;
    to: string;
    image: string;
    imageAlt: string;
  }

  const expertiseCards: ExpertiseCard[] = [
    {
      category: 'Pôle Business',
      title: 'Dirigeants',
      description:
        "Accompagnement spécifique dans la gestion de la trésorerie d'entreprise, l'optimisation de la rémunération et la transmission de l'outil professionnel.",
      ctaLabel: 'Découvrir le conseil aux dirigeants',
      to: '/expertise/dirigeants',
      image: '/images/expertise/dirigeants.jpg',
      imageAlt: "Façade en verre minimaliste d'un gratte-ciel — Pôle Business",
    },
    {
      category: 'Pôle Privé',
      title: 'Particuliers',
      description:
        "Protection de la famille, préparation de la retraite et structuration d'actifs immobiliers pour bâtir un héritage solide et pérenne.",
      ctaLabel: "Voir l'offre particuliers",
      to: '/expertise/particuliers',
      image: '/images/expertise/particuliers.jpg',
      imageAlt: "Intérieur d'une bibliothèque de luxe avec lumière naturelle — Pôle Privé",
    },
    {
      category: 'Ingénierie',
      title: 'Stratégie Patrimoniale',
      description:
        'Audit global et ingénierie juridique. Nous créons le cadre structurel nécessaire à la valorisation et à la sécurité de vos actifs.',
      ctaLabel: "Explorer l'ingénierie",
      to: '/expertise/patrimoine',
      image: '/images/expertise/patrimoine.jpg',
      imageAlt: 'Stylo plume et plan architectural — Ingénierie Patrimoniale',
    },
    {
      category: 'Investissement',
      title: 'Stratégie Financière',
      description:
        "Allocation d'actifs en architecture ouverte. Accès aux meilleurs gérants mondiaux et solutions de placement privées exclusives.",
      ctaLabel: 'Découvrir nos solutions',
      to: '/expertise/finance',
      image: '/images/expertise/finance.jpg',
      imageAlt: 'Lignes architecturales abstraites en tons monochromatiques — Stratégie Financière',
    },
  ];

  const heroReady = useHeroReady();

  const gridVisible = useReveal(useTemplateRef('gridRef'));
  const quoteVisible = useReveal(useTemplateRef('quoteRef'));

  useSeoMeta({
    title: 'Expertise — AMS Patrimoine',
    description:
      'Découvrez nos domaines de compétence : accompagnement dirigeants, particuliers, stratégie patrimoniale et financière. Une expertise multidimensionnelle au service de votre avenir.',
  });
</script>

<template>
  <div class="bg-sand-100 text-sand-900">
    <!-- ─── Hero ─── -->
    <section class="container mx-auto px-6 pt-36 pb-20 md:px-12">
      <div class="max-w-3xl">
        <span
          class="text-gold-500 mb-4 block font-sans text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-700 ease-out"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          Domaines de Compétence
        </span>

        <h1
          class="text-navy-500 mb-8 font-serif text-5xl leading-tight font-bold transition-all duration-700 ease-out md:text-7xl"
          style="letter-spacing: -0.02em; transition-delay: 150ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          Une expertise
          <span class="text-gold-500 font-normal italic">multidimensionnelle</span>
          au service de votre avenir.
        </h1>

        <p
          class="text-sand-700 max-w-2xl text-xl leading-relaxed transition-all duration-700 ease-out"
          style="transition-delay: 300ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          Nous structurons des solutions sur mesure alliant conseil juridique, ingénierie fiscale et stratégie
          d'investissement pour pérenniser votre patrimoine.
        </p>
      </div>
    </section>

    <!-- ─── Expertise Grid ─── -->
    <section ref="gridRef" class="bg-sand-200 py-24">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          <NuxtLink
            v-for="({ category, ctaLabel, description, image, imageAlt, title, to }, i) in expertiseCards"
            :to
            :key="to"
          >
            <div
              class="group relative overflow-hidden rounded-sm bg-white transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-2xl"
              :class="gridVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
              :style="{ transitionDelay: `${i * 150}ms` }"
            >
              <!-- Card image -->
              <div class="aspect-16/10 overflow-hidden">
                <NuxtImg
                  :src="image"
                  :alt="imageAlt"
                  class="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              <!-- Card content -->
              <div class="p-10">
                <div class="mb-6 flex items-start justify-between">
                  <span class="text-gold-500 font-sans text-xs font-semibold tracking-widest uppercase">
                    {{ category }}
                  </span>
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="text-gold-500 transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
                <h2
                  class="group-hover:text-gold-500 text-navy-500 mb-4 font-serif text-3xl transition-colors duration-300"
                >
                  {{ title }}
                </h2>
                <p class="text-sand-700 mb-8 leading-relaxed">
                  {{ description }}
                </p>
                <p
                  class="text-navy-500 hover:text-gold-500 inline-flex items-center font-sans text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
                >
                  {{ ctaLabel }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── Signature Quote Section ─── -->
    <section ref="quoteRef" class="bg-sand-100 py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div class="relative grid grid-cols-1 items-center lg:grid-cols-12">
          <!-- Image: slides in from left -->
          <div
            class="transition-all duration-700 ease-out lg:col-span-7"
            :class="quoteVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'"
          >
            <NuxtImg
              src="/images/expertise/quote-portrait.jpg"
              alt="Expert AMS Patrimoine — soin du détail"
              class="h-150 w-full rounded-sm object-cover grayscale"
              loading="lazy"
            />
          </div>

          <!-- Quote card: slides in from right, delayed -->
          <div
            class="z-10 -mt-24 transition-all duration-700 ease-out lg:col-span-6 lg:mt-0 lg:-ml-24"
            style="transition-delay: 200ms"
            :class="quoteVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
          >
            <div class="border-gold-500 border-l-4 bg-white p-12 shadow-xl lg:p-20">
              <UIcon name="i-lucide-quote" class="text-gold-500 mb-6 text-5xl" />
              <h3 class="text-navy-500 mb-8 font-serif text-3xl leading-snug italic">
                "Le patrimoine n'est pas seulement une accumulation de valeurs, c'est l'expression d'une liberté que
                nous avons le devoir de protéger."
              </h3>
              <div class="flex items-center gap-4">
                <div class="bg-gold-500 h-px w-12"></div>
                <p class="text-gold-500 font-sans text-sm font-bold tracking-widest uppercase">AMS Patrimoine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
