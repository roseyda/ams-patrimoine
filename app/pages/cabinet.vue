<script setup lang="ts">
  interface Value {
    icon: string;
    title: string;
    description: string;
  }

  interface Stat {
    value: string;
    label: string;
  }

  const values: Value[] = [
    {
      icon: 'i-lucide-scale',
      title: 'Indépendance',
      description:
        'Libres de toute attache institutionnelle, nous sélectionnons les solutions les plus performantes du marché avec une objectivité absolue, dans votre seul intérêt.',
    },
    {
      icon: 'i-lucide-lock-open',
      title: 'Discrétion',
      description:
        "La confidentialité est le socle de notre relation. Nous opérons dans un cadre de confiance totale, protégeant l'intégrité de vos informations et de vos projets.",
    },
    {
      icon: 'i-lucide-drafting-compass',
      title: 'Sur-mesure',
      description:
        "Chaque patrimoine est unique. Nous concevons des stratégies d'investissement et de transmission ciselées pour répondre précisément à vos objectifs de vie.",
    },
  ];

  const stats: Stat[] = [
    { value: '15+', label: "Années d'Expertise" },
    { value: '250+', label: 'Familles Accompagnées' },
    { value: '100%', label: 'Indépendance Garantie' },
    { value: '48h', label: 'Réactivité de Conseil' },
  ];

  const heroReady = useHeroReady();
  const valuesVisible = useReveal(useTemplateRef('valuesRef'));
  const portraitVisible = useReveal(useTemplateRef('portraitRef'));
  const statsVisible = useReveal(useTemplateRef('statsRef'));

  useSeoMeta({
    title: 'Le Cabinet',
    description:
      "AMS Patrimoine incarne l'excellence du conseil indépendant, dédié à la pérennité et à l'optimisation de vos actifs les plus précieux.",
  });
</script>

<template>
  <div class="bg-sand-100 text-sand-900">
    <!-- ─── Hero ─── -->
    <section class="container mx-auto px-6 pt-36 pb-24 md:px-12">
      <div class="grid grid-cols-12 items-center gap-6">
        <div class="col-span-12 lg:col-span-7">
          <h1
            class="text-navy-500 mb-8 font-serif text-5xl leading-tight font-bold tracking-tight transition-all duration-700 ease-out md:text-7xl"
            style="transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            Un héritage de confiance et de
            <span class="text-gold-500 font-normal italic">rigueur</span>.
          </h1>
          <p
            class="text-sand-700 max-w-xl text-xl leading-relaxed transition-all duration-700 ease-out"
            style="transition-delay: 300ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            AMS Patrimoine incarne l'excellence du conseil indépendant, dédié à la pérennité et à l'optimisation de vos
            actifs les plus précieux.
          </p>
        </div>

        <!-- Blade image -->
        <div
          class="relative col-span-12 transition-all duration-700 ease-out lg:col-span-5"
          style="transition-delay: 300ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="h-150 w-full overflow-hidden rounded-sm shadow-2xl">
            <NuxtPicture
              src="/images/cabinet/building.jpg"
              alt="Immeuble en verre — AMS Patrimoine"
              :img-attrs="{ class: 'h-full w-full object-cover' }"
            />
          </div>
          <div class="absolute -bottom-10 -left-10 max-w-sm rounded-sm bg-white p-10 shadow-xl md:-left-20">
            <p class="text-navy-500 mb-4 font-serif text-2xl font-semibold">Notre Histoire</p>
            <p class="text-sand-700 text-sm leading-relaxed">
              Fondé avec la conviction que le conseil patrimonial exige une proximité totale, AMS Patrimoine s'est
              imposé comme un acteur de référence pour une clientèle exigeante en quête de solutions sur mesure.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Values ─── -->
    <section ref="valuesRef" class="bg-sand-200 py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mb-20 transition-all duration-700 ease-out"
          :class="valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <span class="text-gold-500 mb-4 block font-sans text-sm font-bold tracking-[0.2em] uppercase">
            L'Excellence comme standard
          </span>
          <h2 class="text-navy-500 font-serif text-4xl font-bold md:text-5xl">Nos Valeurs Fondamentales</h2>
        </div>

        <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div
            v-for="(value, i) in values"
            :key="value.title"
            class="rounded-sm bg-white p-12 shadow-sm transition-all duration-700 ease-out hover:shadow-lg"
            :class="valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            :style="{ transitionDelay: `${i * 150}ms` }"
          >
            <UIcon :name="value.icon" class="text-gold-500 mb-8 text-5xl" />
            <h3 class="text-navy-500 mb-6 font-serif text-2xl font-bold">{{ value.title }}</h3>
            <p class="text-sand-700 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Portrait: Marie-Sophie LECLUYSE ─── -->
    <section ref="portraitRef" class="bg-sand-100 py-32">
      <div class="container mx-auto flex flex-col items-center gap-24 px-6 md:px-12 lg:flex-row">
        <!-- Image -->
        <div
          class="relative transition-all duration-700 ease-out lg:w-1/2"
          :class="portraitVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'"
        >
          <div class="relative z-10 mx-auto aspect-4/5 w-full max-w-md">
            <NuxtPicture
              src="/images/cabinet/portrait.jpg"
              alt="Portrait de Marie-Sophie LECLUYSE — Fondatrice AMS Patrimoine"
              loading="lazy"
              :img-attrs="{
                class: 'h-full w-full rounded-sm object-cover grayscale transition-all duration-700 hover:grayscale-0',
              }"
            />
          </div>
          <div class="bg-sand-300 absolute -top-10 -right-10 -z-10 h-full w-full rounded-sm"></div>
        </div>

        <!-- Text -->
        <div
          class="transition-all duration-700 ease-out lg:w-1/2"
          style="transition-delay: 200ms"
          :class="portraitVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
        >
          <span class="text-gold-500 mb-4 block font-sans text-sm font-bold tracking-[0.2em] uppercase">
            Fondatrice
          </span>
          <h2 class="text-navy-500 mb-12 font-serif text-4xl font-bold md:text-5xl">Marie-Sophie LECLUYSE</h2>
          <div class="text-sand-700 space-y-8 text-lg leading-relaxed">
            <p>
              Forte d'une expertise reconnue en gestion de fortune et conseil financier, Marie-Sophie LECLUYSE a fondé
              AMS Patrimoine pour replacer l'humain et l'éthique au cœur de la stratégie patrimoniale.
            </p>
            <p class="border-gold-500 border-l-4 py-2 pl-8 italic">
              "Mon engagement est de vous apporter une vision claire et pérenne de votre avenir financier, en alliant
              technicité juridique et sens de l'écoute."
            </p>
            <div class="pt-6">
              <UButton label="Rencontrer le cabinet" to="/contact" size="xl" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Stats Bar ─── -->
    <section ref="statsRef" class="bg-navy-500 py-24 text-white">
      <div class="container mx-auto grid grid-cols-2 gap-12 px-6 text-center md:grid-cols-4 md:px-12">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="transition-all duration-700 ease-out"
          :class="statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="text-gold-100 mb-2 font-serif text-5xl font-bold">{{ stat.value }}</div>
          <div class="font-sans text-xs tracking-tight text-white/70 uppercase">{{ stat.label }}</div>
        </div>
      </div>
    </section>
  </div>
</template>
