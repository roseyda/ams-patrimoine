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

  const heroReady = ref(false);
  const valuesVisible = useReveal(useTemplateRef('valuesRef'));
  const portraitVisible = useReveal(useTemplateRef('portraitRef'));
  const statsVisible = useReveal(useTemplateRef('statsRef'));

  onMounted(() => setTimeout(() => (heroReady.value = true), 80));

  useHead({
    title: 'Le Cabinet — AMS Patrimoine',
    meta: [
      {
        name: 'description',
        content:
          "AMS Patrimoine incarne l'excellence du conseil indépendant, dédié à la pérennité et à l'optimisation de vos actifs les plus précieux.",
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero ─── -->
    <section class="container mx-auto px-6 pt-36 pb-24 md:px-12">
      <div class="grid grid-cols-12 items-center gap-6">
        <div class="col-span-12 lg:col-span-7">
          <h1
            class="mb-8 font-serif text-5xl leading-tight font-bold tracking-tight text-[#081a3e] transition-all duration-700 ease-out md:text-7xl"
            style="transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            Un héritage de confiance et de
            <span class="font-normal text-[#6d5d33] italic">rigueur</span>.
          </h1>
          <p
            class="max-w-xl text-xl leading-relaxed text-[#45464e] transition-all duration-700 ease-out"
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
          style="transition-delay: 400ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="h-[600px] w-full overflow-hidden rounded-sm shadow-2xl">
            <NuxtImg
              src="/images/cabinet/building.jpg"
              alt="Immeuble en verre — AMS Patrimoine"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="absolute -bottom-10 -left-10 max-w-sm rounded-sm bg-white p-10 shadow-xl md:-left-20">
            <p class="mb-4 font-serif text-2xl font-semibold text-[#081a3e]">Notre Histoire</p>
            <p class="text-sm leading-relaxed text-[#45464e]">
              Fondé avec la conviction que le conseil patrimonial exige une proximité totale, AMS Patrimoine s'est
              imposé comme un acteur de référence pour une clientèle exigeante en quête de solutions sur mesure.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Values ─── -->
    <section ref="valuesRef" class="py-32" style="background-color: #f4f4ef">
      <div class="container mx-auto px-6 md:px-12">
        <div
          class="mb-20 transition-all duration-700 ease-out"
          :class="valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <span class="mb-4 block font-sans text-sm font-bold tracking-[0.2em] text-[#6d5d33] uppercase">
            L'Excellence comme standard
          </span>
          <h2 class="font-serif text-4xl font-bold text-[#081a3e] md:text-5xl">Nos Valeurs Fondamentales</h2>
        </div>

        <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div
            v-for="(value, i) in values"
            :key="value.title"
            class="rounded-sm bg-white p-12 shadow-sm transition-all duration-700 ease-out hover:shadow-lg"
            :class="valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
            :style="{ transitionDelay: `${i * 150}ms` }"
          >
            <UIcon :name="value.icon" class="mb-8 text-5xl text-[#6d5d33]" />
            <h3 class="mb-6 font-serif text-2xl font-bold text-[#081a3e]">{{ value.title }}</h3>
            <p class="leading-relaxed text-[#45464e]">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Portrait: Marie-Sophie LECLUYSE ─── -->
    <section ref="portraitRef" class="bg-[#fafaf4] py-32">
      <div class="container mx-auto flex flex-col items-center gap-24 px-6 md:px-12 lg:flex-row">
        <!-- Image -->
        <div
          class="relative transition-all duration-700 ease-out lg:w-1/2"
          :class="portraitVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'"
        >
          <div class="relative z-10 mx-auto aspect-[4/5] w-full max-w-md">
            <NuxtImg
              src="/images/cabinet/portrait.jpg"
              alt="Portrait de Marie-Sophie LECLUYSE — Fondatrice AMS Patrimoine"
              class="h-full w-full rounded-sm object-cover grayscale transition-all duration-700 hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div class="absolute -top-10 -right-10 -z-10 h-full w-full rounded-sm bg-[#e8e8e3]"></div>
        </div>

        <!-- Text -->
        <div
          class="transition-all duration-700 ease-out lg:w-1/2"
          style="transition-delay: 200ms"
          :class="portraitVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
        >
          <span class="mb-4 block font-sans text-sm font-bold tracking-[0.2em] text-[#6d5d33] uppercase">
            Fondatrice
          </span>
          <h2 class="mb-12 font-serif text-4xl font-bold text-[#081a3e] md:text-5xl">Marie-Sophie LECLUYSE</h2>
          <div class="space-y-8 text-lg leading-relaxed text-[#45464e]">
            <p>
              Forte d'une expertise reconnue en gestion de fortune et conseil financier, Marie-Sophie LECLUYSE a fondé
              AMS Patrimoine pour replacer l'humain et l'éthique au cœur de la stratégie patrimoniale.
            </p>
            <p class="border-l-4 border-[#6d5d33] py-2 pl-8 italic">
              "Mon engagement est de vous apporter une vision claire et pérenne de votre avenir financier, en alliant
              technicité juridique et sens de l'écoute."
            </p>
            <div class="pt-6">
              <NuxtLink
                to="/contact"
                class="rounded-sm bg-[#081a3e] px-10 py-4 font-sans text-sm tracking-widest text-white uppercase transition-opacity hover:opacity-90"
              >
                Rencontrer le cabinet
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Stats Bar ─── -->
    <section ref="statsRef" class="bg-[#081a3e] py-24 text-white">
      <div class="container mx-auto grid grid-cols-2 gap-12 px-6 text-center md:grid-cols-4 md:px-12">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          class="transition-all duration-700 ease-out"
          :class="statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="mb-2 font-serif text-5xl font-bold text-[#f7e0ac]">{{ stat.value }}</div>
          <div class="font-sans text-xs tracking-tight text-white/70 uppercase">{{ stat.label }}</div>
        </div>
      </div>
    </section>
  </div>
</template>
