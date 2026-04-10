<script setup lang="ts">
  interface FeatureBlock {
    icon: string;
    title: string;
    description: string;
  }

  interface TimelineStep {
    number: string;
    title: string;
    description: string;
    reversed: boolean;
    image?: string;
    imageAlt?: string;
    quote?: string;
    tags?: string[];
    ctaLabel?: string;
  }

  interface StatItem {
    value: string;
    label: string;
  }

  const featureBlocks: FeatureBlock[] = [
    {
      icon: 'i-lucide-drafting-compass',
      title: 'Ingénierie sur-mesure',
      description:
        'Nous ne nous contentons pas de conseiller ; nous concevons des structures juridiques et financières capables de porter vos ambitions les plus complexes.',
    },
    {
      icon: 'i-lucide-scale',
      title: 'Indépendance absolue',
      description:
        'Notre liberté de conseil est le socle de notre relation. Chaque recommandation est guidée exclusivement par vos intérêts patrimoniaux.',
    },
  ];

  const timelineSteps: TimelineStep[] = [
    {
      number: '01',
      title: "L'Audit Patrimonial",
      description:
        'Une analyse exhaustive de votre situation actuelle. Nous identifions les forces, les vulnérabilités et le potentiel inexploité de vos actifs pour définir une base solide.',
      reversed: false,
      image: '/images/approche/planning.jpg',
      imageAlt: 'Documents de planification stratégique sur un bureau',
    },
    {
      number: '02',
      title: 'Conception',
      description:
        'Élaboration de votre stratégie cible. Nous dessinons les plans de votre futur patrimoine en intégrant fiscalité, transmission et performance.',
      reversed: true,
      quote: "L'architecture de votre avenir financier se dessine aujourd'hui avec une vision à 360°.",
    },
    {
      number: '03',
      title: 'Édification',
      description:
        'Mise en œuvre opérationnelle des solutions sélectionnées. Nous coordonnons les experts pour bâtir votre structure avec une précision millimétrée.',
      reversed: false,
      image: '/images/approche/interior.jpg',
      imageAlt: 'Détails architecturaux sophistiqués',
      tags: ['Actifs', 'Juridique', 'Fiscalité'],
    },
    {
      number: '04',
      title: 'Veille Active',
      description:
        'Le patrimoine est vivant. Nous assurons un suivi constant pour ajuster votre stratégie aux évolutions législatives et aux opportunités de marché.',
      reversed: true,
      image: '/images/approche/growth.jpg',
      imageAlt: 'Reflets sur façade en verre représentant la croissance',
      ctaLabel: 'Accompagnement continu',
    },
  ];

  const stats: StatItem[] = [
    { value: '100%', label: 'Sur-Mesure' },
    { value: '360°', label: 'Vision Globale' },
  ];

  const heroReady = ref(false);
  const introVisible = useReveal(useTemplateRef('introRef'));
  const timelineVisible = useReveal(useTemplateRef('timelineRef'), 0.05);
  const signatureVisible = useReveal(useTemplateRef('signatureRef'));

  onMounted(() => setTimeout(() => (heroReady.value = true), 80));

  useHead({
    title: "L'Approche — AMS Patrimoine",
    meta: [
      {
        name: 'description',
        content:
          'Découvrez la méthodologie AMS Patrimoine : audit patrimonial, conception stratégique, édification et veille active. Une ingénierie de précision en quatre étapes.',
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero ─────────────────────────────────────────────────── -->
    <section class="relative overflow-hidden pt-48 pb-32">
      <div class="container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12">
        <!-- Text column -->
        <div class="z-10 lg:col-span-7">
          <span
            class="mb-6 block font-sans text-xs font-semibold tracking-[0.2em] text-[#6d5d33] uppercase transition-all duration-700 ease-out"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Philosophie &amp; Méthode
          </span>

          <h1
            class="mb-8 font-serif text-6xl leading-[1.1] font-bold text-[#000000] transition-all duration-700 ease-out md:text-7xl"
            style="letter-spacing: -0.02em; transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            L'Art de la <br />Structure Patrimoniale
          </h1>

          <p
            class="mb-12 max-w-xl text-xl leading-relaxed font-light text-[#45464e] transition-all duration-700 ease-out"
            style="transition-delay: 300ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Une approche rigoureuse, inspirée par la précision architecturale, pour bâtir et pérenniser votre héritage
            avec une clarté absolue.
          </p>

          <div
            class="flex items-center transition-all duration-700 ease-out"
            style="transition-delay: 450ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            <a
              href="#methodologie"
              class="rounded-sm bg-[#081a3e] px-8 py-4 font-sans font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#0c2559]"
            >
              Découvrir nos étapes
            </a>
          </div>
        </div>

        <!-- Image column -->
        <div
          class="relative transition-all duration-1000 ease-out lg:col-span-5"
          style="transition-delay: 200ms"
          :class="heroReady ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
        >
          <div class="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#e3e3de]">
            <NuxtImg
              src="/images/approche/interior.jpg"
              alt="Intérieur architectural minimaliste — AMS Patrimoine"
              class="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div class="absolute inset-0 bg-[#081a3e]/10 mix-blend-multiply"></div>
          </div>

          <!-- Asymmetric "Excellence" card -->
          <div
            class="absolute -bottom-10 -left-10 hidden max-w-xs bg-white p-8 shadow-2xl transition-all duration-700 ease-out lg:block"
            style="transition-delay: 700ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
          >
            <p class="mb-2 font-serif text-xl text-[#000000]">Excellence</p>
            <p class="text-sm leading-relaxed font-light text-[#45464e]">
              Chaque stratégie est une pièce unique, conçue pour résister au temps.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Introduction ────────────────────────────────────────── -->
    <section ref="introRef" class="py-32" style="background-color: #f4f4ef">
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col gap-16 md:flex-row md:items-start">
          <!-- Title -->
          <div
            class="transition-all duration-700 ease-out md:w-1/3"
            :class="introVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            <h2 class="font-serif text-4xl leading-tight text-[#000000]" style="letter-spacing: -0.02em">
              Une vision holistique de vos actifs
            </h2>
          </div>

          <!-- Feature blocks -->
          <div class="md:w-2/3">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div
                v-for="(block, i) in featureBlocks"
                :key="block.title"
                class="space-y-4 transition-all duration-700 ease-out"
                :class="introVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
                :style="{ transitionDelay: `${150 + i * 150}ms` }"
              >
                <UIcon :name="block.icon" class="text-3xl text-[#6d5d33]" />
                <h3 class="font-serif text-xl text-[#000000]">{{ block.title }}</h3>
                <p class="leading-relaxed font-light text-[#45464e]">{{ block.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Timeline ─────────────────────────────────────────────── -->
    <section id="methodologie" ref="timelineRef" class="bg-[#fafaf4] py-40">
      <div class="container mx-auto px-6 md:px-12">
        <!-- Header -->
        <div
          class="mb-32 text-center transition-all duration-700 ease-out"
          :class="timelineVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <span class="mb-4 block font-sans text-xs font-semibold tracking-[0.2em] text-[#6d5d33] uppercase">
            Notre Méthodologie
          </span>
          <h2 class="font-serif text-5xl text-[#000000]" style="letter-spacing: -0.02em">
            Un parcours en quatre étapes
          </h2>
        </div>

        <!-- Steps -->
        <div class="relative mx-auto max-w-5xl">
          <!-- Vertical gold line -->
          <div
            class="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 md:block"
            style="background: linear-gradient(to bottom, transparent, #6d5d33 15%, #6d5d33 85%, transparent)"
          ></div>

          <div class="space-y-24">
            <div
              v-for="(step, i) in timelineSteps"
              :key="step.number"
              class="relative flex flex-col items-center transition-all duration-700 ease-out md:items-start"
              :class="[
                step.reversed ? 'md:flex-row-reverse' : 'md:flex-row',
                timelineVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
              ]"
              :style="{ transitionDelay: `${150 + i * 200}ms` }"
            >
              <!-- Text side -->
              <div
                :class="[
                  'md:w-1/2',
                  step.reversed ? 'text-center md:pl-16 md:text-left' : 'text-center md:pr-16 md:text-right',
                ]"
              >
                <span class="mb-2 block font-serif text-7xl font-bold text-[#6d5d33]/20">
                  {{ step.number }}
                </span>
                <h3 class="mb-6 font-serif text-3xl text-[#000000]">{{ step.title }}</h3>
                <p
                  class="mx-auto max-w-md text-lg leading-relaxed font-light text-[#45464e]"
                  :class="step.reversed ? '' : 'mr-0 ml-auto'"
                >
                  {{ step.description }}
                </p>

                <!-- Tags (step 03) -->
                <div
                  v-if="step.tags"
                  class="mt-6 flex flex-wrap gap-3"
                  :class="step.reversed ? 'justify-center md:justify-start' : 'justify-center md:justify-end'"
                >
                  <span
                    v-for="tag in step.tags"
                    :key="tag"
                    class="border border-[#c5c6cf]/30 bg-[#e8e8e3] px-3 py-1 font-sans text-[10px] font-semibold tracking-widest text-[#45464e] uppercase"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- CTA link (step 04) -->
                <div
                  v-if="step.ctaLabel"
                  class="mt-8"
                  :class="step.reversed ? 'text-center md:text-left' : 'text-center md:text-right'"
                >
                  <NuxtLink
                    to="/contact"
                    class="border-b border-[#6d5d33]/30 pb-1 font-sans text-xs font-medium tracking-widest text-[#6d5d33] uppercase transition-colors duration-300 hover:border-[#6d5d33]"
                  >
                    {{ step.ctaLabel }}
                  </NuxtLink>
                </div>
              </div>

              <!-- Timeline node -->
              <div
                class="absolute top-0 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#fafaf4] bg-[#6d5d33] md:flex"
                style="box-shadow: 0 0 0 8px rgba(109, 93, 51, 0.05)"
              ></div>

              <!-- Visual side -->
              <div :class="['hidden md:block md:w-1/2', step.reversed ? 'md:pr-16' : 'md:pl-16']">
                <!-- Image variant -->
                <div
                  v-if="step.image"
                  class="aspect-video overflow-hidden rounded-sm bg-[#f4f4ef] shadow-sm transition-all duration-700 group-hover:grayscale-0"
                  :class="step.tags ? 'border border-[#c5c6cf]/10' : ''"
                >
                  <NuxtImg
                    :src="step.image"
                    :alt="step.imageAlt ?? step.title"
                    class="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                    loading="lazy"
                  />
                </div>

                <!-- Quote card variant (step 02) -->
                <div
                  v-else-if="step.quote"
                  class="flex h-full flex-col justify-center rounded-sm border-l-4 border-[#6d5d33] bg-[#081a3e] p-10 shadow-lg"
                >
                  <UIcon name="i-lucide-drafting-compass" class="mb-6 text-4xl text-[#6d5d33]" />
                  <p class="leading-relaxed font-light text-white/80 italic">"{{ step.quote }}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Signature : Rigueur & Transparence ───────────────────── -->
    <section ref="signatureRef" class="py-32" style="background-color: #ffffff">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <!-- Image with overlapping card -->
          <div
            class="relative transition-all duration-700 ease-out"
            :class="signatureVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'"
          >
            <div class="aspect-square overflow-hidden rounded-sm bg-[#f4f4ef]">
              <NuxtImg
                src="/images/approche/gallery.jpg"
                alt="Espace galerie épuré — AMS Patrimoine"
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <!-- Overlapping card: bottom-right, navy border -->
            <div
              class="absolute -right-10 -bottom-10 hidden w-2/3 border-l-4 border-[#081a3e] bg-white p-10 shadow-xl md:block"
            >
              <h4 class="mb-4 font-serif text-2xl text-[#000000]">Rigueur &amp; Transparence</h4>
              <p class="text-sm leading-relaxed font-light text-[#45464e]">
                Nos honoraires sont clairs, nos processus documentés. La confiance ne s'accorde pas, elle se construit
                brique par brique.
              </p>
            </div>
          </div>

          <!-- Right content -->
          <div
            class="space-y-12 transition-all duration-700 ease-out"
            style="transition-delay: 150ms"
            :class="signatureVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
          >
            <div class="space-y-4">
              <h3 class="font-serif text-3xl text-[#000000]" style="letter-spacing: -0.02em">
                Une ingénierie de précision
              </h3>
              <p class="text-lg leading-relaxed font-light text-[#45464e]">
                Nous traitons votre patrimoine comme un architecte traite un monument historique : avec respect pour son
                passé, ambition pour son futur, et une attention obsessionnelle aux détails structurels.
              </p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-8">
              <div
                v-for="(stat, i) in stats"
                :key="stat.value"
                class="border-t border-[#c5c6cf]/30 pt-6 transition-all duration-700 ease-out"
                :class="signatureVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
                :style="{ transitionDelay: `${300 + i * 150}ms` }"
              >
                <span class="mb-2 block font-serif text-4xl text-[#6d5d33]">{{ stat.value }}</span>
                <p class="font-sans text-xs font-semibold tracking-widest text-[#45464e] uppercase">
                  {{ stat.label }}
                </p>
              </div>
            </div>

            <!-- CTA -->
            <NuxtLink
              to="/contact"
              class="group inline-flex items-center gap-4 transition-all duration-700 ease-out"
              :class="signatureVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
              :style="{ transitionDelay: '600ms' }"
            >
              <span
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#081a3e] text-white transition-transform duration-300 group-hover:scale-110"
              >
                <UIcon name="i-lucide-phone" />
              </span>
              <span class="border-b border-[#000000]/20 pb-1 font-serif text-lg text-[#000000]">
                Prendre rendez-vous pour un audit
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
