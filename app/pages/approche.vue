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
      image: '/images/approche/planning.jpg',
      imageAlt: 'Documents de planification stratégique sur un bureau',
    },
    {
      number: '02',
      title: 'Conception',
      description:
        'Élaboration de votre stratégie cible. Nous dessinons les plans de votre futur patrimoine en intégrant fiscalité, transmission et performance.',
      quote: "L'architecture de votre avenir financier se dessine aujourd'hui avec une vision à 360°.",
    },
    {
      number: '03',
      title: 'Édification',
      description:
        'Mise en œuvre opérationnelle des solutions sélectionnées. Nous coordonnons les experts pour bâtir votre structure avec une précision millimétrée.',
      image: '/images/approche/interior.jpg',
      imageAlt: 'Détails architecturaux sophistiqués',
      tags: ['Actifs', 'Juridique', 'Fiscalité'],
    },
    {
      number: '04',
      title: 'Veille Active',
      description:
        'Le patrimoine est vivant. Nous assurons un suivi constant pour ajuster votre stratégie aux évolutions législatives et aux opportunités de marché.',
      image: '/images/approche/growth.jpg',
      imageAlt: 'Reflets sur façade en verre représentant la croissance',
      ctaLabel: 'Accompagnement continu',
    },
  ].map((item, index) => ({ ...item, reversed: index % 2 != 0 }));

  const stats: StatItem[] = [
    { value: '100%', label: 'Sur-Mesure' },
    { value: '360°', label: 'Vision Globale' },
  ];

  const heroReady = useHeroReady();
  const introVisible = useReveal(useTemplateRef('introRef'));
  const timelineVisible = useReveal(useTemplateRef('timelineRef'), 0.05);
  const signatureVisible = useReveal(useTemplateRef('signatureRef'));

  useSeoMeta({
    title: "L'Approche — AMS Patrimoine",
    description:
      'Découvrez la méthodologie AMS Patrimoine : audit patrimonial, conception stratégique, édification et veille active. Une ingénierie de précision en quatre étapes.',
  });
</script>

<template>
  <div class="bg-sand-100 text-sand-900">
    <!-- ─── Hero ─────────────────────────────────────────────────── -->
    <section class="relative overflow-hidden pt-48 pb-32">
      <div class="container mx-auto grid grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12">
        <!-- Text column -->
        <div class="z-10 lg:col-span-7">
          <span
            class="text-gold-500 mb-6 block font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-700 ease-out"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Philosophie &amp; Méthode
          </span>

          <h1
            class="text-navy-500 mb-8 font-serif text-6xl leading-[1.1] font-bold transition-all duration-700 ease-out md:text-7xl"
            style="letter-spacing: -0.02em; transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            L'Art de la <br />Structure Patrimoniale
          </h1>

          <p
            class="text-sand-700 mb-12 max-w-xl text-xl leading-relaxed font-light transition-all duration-700 ease-out"
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
            <UButton label="Découvrir nos étapes" to="#methodologie" size="xl" />
          </div>
        </div>

        <!-- Image column -->
        <div
          class="relative transition-all duration-1000 ease-out lg:col-span-5"
          style="transition-delay: 200ms"
          :class="heroReady ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
        >
          <div class="bg-sand-400 relative aspect-4/5 overflow-hidden rounded-sm">
            <NuxtPicture
              src="/images/approche/interior.jpg"
              alt="Intérieur architectural minimaliste — AMS Patrimoine"
              :img-attrs="{
                class: 'h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0',
              }"
            />
            <div class="bg-navy-500/10 absolute inset-0 mix-blend-multiply"></div>
          </div>

          <!-- Asymmetric "Excellence" card -->
          <div
            class="absolute -bottom-10 -left-10 hidden max-w-xs bg-white p-8 shadow-2xl transition-all duration-700 ease-out lg:block"
            style="transition-delay: 700ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
          >
            <p class="text-navy-500 mb-2 font-serif text-xl">Excellence</p>
            <p class="text-sand-700 text-sm leading-relaxed font-light">
              Chaque stratégie est une pièce unique, conçue pour résister au temps.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Introduction ────────────────────────────────────────── -->
    <section ref="introRef" class="bg-sand-200 py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col gap-16 md:flex-row md:items-start">
          <!-- Title -->
          <div
            class="transition-all duration-700 ease-out md:w-1/3"
            :class="introVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            <h2 class="text-navy-500 font-serif text-4xl leading-tight" style="letter-spacing: -0.02em">
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
                <UIcon :name="block.icon" class="text-gold-500 text-3xl" />
                <h3 class="text-navy-500 font-serif text-xl">{{ block.title }}</h3>
                <p class="text-sand-700 leading-relaxed font-light">{{ block.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Timeline ─────────────────────────────────────────────── -->
    <section id="methodologie" ref="timelineRef" class="bg-sand-100 py-40">
      <div class="container mx-auto px-6 md:px-12">
        <!-- Header -->
        <div
          class="mb-32 text-center transition-all duration-700 ease-out"
          :class="timelineVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <span class="text-gold-500 mb-4 block font-sans text-xs font-semibold tracking-[0.2em] uppercase">
            Notre Méthodologie
          </span>
          <h2 class="text-navy-500 font-serif text-5xl" style="letter-spacing: -0.02em">
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
              class="group relative flex flex-col items-center transition-all duration-700 ease-out md:items-start"
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
                <span class="text-gold-500/20 mb-2 block font-serif text-7xl font-bold">
                  {{ step.number }}
                </span>
                <h3 class="text-navy-500 mb-6 font-serif text-3xl">{{ step.title }}</h3>
                <p
                  class="text-sand-700 mx-auto max-w-md text-lg leading-relaxed font-light"
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
                    class="border-sand-500/30 bg-sand-300 text-sand-700 border px-3 py-1 font-sans text-[10px] font-semibold tracking-widest uppercase"
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
                    class="border-gold-500/30 text-gold-500 hover:border-gold-500 border-b pb-1 font-sans text-xs font-medium tracking-widest uppercase transition-colors duration-300"
                  >
                    {{ step.ctaLabel }}
                  </NuxtLink>
                </div>
              </div>

              <!-- Timeline node -->
              <div
                class="border-sand-100 bg-gold-500 absolute top-0 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 md:flex"
                style="box-shadow: 0 0 0 8px rgba(109, 93, 51, 0.05)"
              ></div>

              <!-- Visual side -->
              <div :class="['hidden md:block md:w-1/2', step.reversed ? 'md:pr-16' : 'md:pl-16']">
                <!-- Image variant -->
                <div
                  v-if="step.image"
                  class="bg-sand-200 aspect-video overflow-hidden rounded-sm shadow-sm"
                  :class="step.tags ? 'border-sand-500/10 border' : ''"
                >
                  <NuxtPicture
                    :src="step.image"
                    :alt="step.imageAlt ?? step.title"
                    loading="lazy"
                    :img-attrs="{
                      class: 'h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0',
                    }"
                  />
                </div>

                <!-- Quote card variant (step 02) -->
                <div
                  v-else-if="step.quote"
                  class="border-gold-500 bg-navy-500 flex h-full flex-col justify-center rounded-sm border-l-4 p-10 shadow-lg"
                >
                  <UIcon name="i-lucide-drafting-compass" class="text-gold-500 mb-6 text-4xl" />
                  <p class="leading-relaxed font-light text-white/80 italic">"{{ step.quote }}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Signature : Rigueur & Transparence ───────────────────── -->
    <section ref="signatureRef" class="bg-white py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <!-- Image with overlapping card -->
          <div
            class="relative transition-all duration-700 ease-out"
            :class="signatureVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'"
          >
            <div class="bg-sand-200 aspect-square overflow-hidden rounded-sm">
              <NuxtPicture
                src="/images/approche/gallery.jpg"
                alt="Espace galerie épuré — AMS Patrimoine"
                loading="lazy"
                :img-attrs="{ class: 'h-full w-full object-cover' }"
              />
            </div>
            <!-- Overlapping card: bottom-right, navy border -->
            <div
              class="border-navy-500 absolute -right-10 -bottom-10 hidden w-2/3 border-l-4 bg-white p-10 shadow-xl md:block"
            >
              <h4 class="text-navy-500 mb-4 font-serif text-2xl">Rigueur &amp; Transparence</h4>
              <p class="text-sand-700 text-sm leading-relaxed font-light">
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
              <h3 class="text-navy-500 font-serif text-3xl" style="letter-spacing: -0.02em">
                Une ingénierie de précision
              </h3>
              <p class="text-sand-700 text-lg leading-relaxed font-light">
                Nous traitons votre patrimoine comme un architecte traite un monument historique : avec respect pour son
                passé, ambition pour son futur, et une attention obsessionnelle aux détails structurels.
              </p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-8">
              <div
                v-for="(stat, i) in stats"
                :key="stat.value"
                class="border-sand-500/30 border-t pt-6 transition-all duration-700 ease-out"
                :class="signatureVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
                :style="{ transitionDelay: `${300 + i * 150}ms` }"
              >
                <span class="text-gold-500 mb-2 block font-serif text-4xl">{{ stat.value }}</span>
                <p class="text-sand-700 font-sans text-xs font-semibold tracking-widest uppercase">
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
                class="bg-navy-500 flex h-12 w-12 shrink-0 items-center justify-center rounded-sm text-white transition-transform duration-300 group-hover:scale-110"
              >
                <UIcon name="i-lucide-phone" />
              </span>
              <span class="border-navy-500/20 text-navy-500 border-b pb-1 font-serif text-lg">
                Prendre rendez-vous pour un audit
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
