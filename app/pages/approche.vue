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
    tags?: string[];
    ctaLabel?: string;
    quote?: string;
    image?: string;
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
        'Chaque stratégie est architecturée à partir de votre situation réelle — fiscale, juridique, familiale — sans modèle préconçu.',
    },
    {
      icon: 'i-lucide-scale',
      title: 'Indépendance absolue',
      description:
        'Aucun lien capitalistique avec un établissement financier. Nos recommandations ne servent que vos intérêts.',
    },
  ];

  const timelineSteps: TimelineStep[] = [
    {
      number: '01',
      title: "L'Audit Patrimonial",
      description:
        "Un état des lieux exhaustif de votre patrimoine : actifs, passifs, régime matrimonial, situation fiscale et objectifs à court, moyen et long terme. C'est le fondement de toute stratégie solide.",
      reversed: false,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0YzQ49KlwYYgC0BP7l8MWxIvy98-kRYzVNS7Mt2rPXoTMkyNWXF6fylC4exMEt9XimQq0ADCdWkArIM2br9F4AM1ZhH41fXXT5UhxLuCVwUaSu2gQ1S5OXhNSXscfjcIINI9UqT_KSRAzUkZH4pl6HisAZJe55SIDPQhwJxo1ZPUBBmn5yGUPz3dGg8cvqtAr1ihujl-DO3UGgsftZwYlUReNKzGfDs_hM2V_Wnplts8QHTHxldUfe54iSzRJ7oWnnvP1DFBFYyPh',
    },
    {
      number: '02',
      title: 'La Conception Stratégique',
      description:
        "À partir de l'audit, nous concevons une architecture patrimoniale cohérente, optimisée fiscalement et adaptée à vos horizons de vie. Chaque décision est documentée et justifiée.",
      reversed: true,
      quote: '"Une stratégie patrimoniale sans vision à long terme n\'est qu\'une série de décisions isolées."',
    },
    {
      number: '03',
      title: "L'Édification",
      description:
        "Mise en œuvre coordonnée des préconisations : restructuration des actifs, sélection des enveloppes juridiques et fiscales, arbitrage des supports d'investissement.",
      reversed: false,
      tags: ['Actifs', 'Juridique', 'Fiscalité'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBVhVzDWkBsqouyMBOFVAVh1pP9A91z4mkKO0L7GUBqBCFiX9IXMtdWdM8wC0JF_PiMF7T8dUPOPIGjQVG8cUL6y1YDHrW3OJR6SEV1YY8KBFN5a_xBUEjQAXCBxMGIEgdp_JZFLGXq_pOdnOMQlwlTpOuiDFCfJE0I6NsJVDfHkTt_P9v0UfDrn4AvNIh0C9Wl78VzS-v9Y7pW1n4iJ5V7GXrWIiABiR5OLqPjlI7isBiWoYfC1kp4lY',
    },
    {
      number: '04',
      title: 'La Veille Active',
      description:
        'Le patrimoine est vivant. Nous assurons un suivi continu pour adapter la stratégie aux évolutions législatives, fiscales et personnelles, avec des points de revue réguliers.',
      reversed: true,
      ctaLabel: 'Accompagnement continu',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBVhVzDWkBsqouyMBOFVAVh1pP9A91z4mkKO0L7GUBqBCFiX9IXMtdWdM8wC0JF_PiMF7T8dUPOPIGjQVG8cUL6y1YDHrW3OJR6SEV1YY8KBFN5a_xBUEjQAXCBxMGIEgdp_JZFLGXq_pOdnOMQlwlTpOuiDFCfJE0I6NsJVDfHkTt_P9v0UfDrn4AvNIh0C9Wl78VzS-v9Y7pW1n4iJ5V7GXrWIiABiR5OLqPjlI7isBiWoYfC1kp4lY',
    },
  ];

  const stats: StatItem[] = [
    { value: '100%', label: 'Sur-Mesure' },
    { value: '360°', label: 'Vision Globale' },
  ];

  useHead({
    title: "L'Approche — AMS Patrimoine",
    meta: [
      {
        name: 'description',
        content:
          'Découvrez la méthodologie AMS Patrimoine : audit, conception, édification et veille active. Une ingénierie patrimoniale en quatre étapes pour structurer et pérenniser votre patrimoine.',
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero ─── -->
    <section class="relative flex min-h-screen items-center overflow-hidden bg-[#fafaf4]">
      <div class="container mx-auto grid grid-cols-1 items-stretch gap-0 px-6 md:grid-cols-12 md:px-12">
        <!-- Text -->
        <div class="z-10 flex flex-col justify-center py-28 pr-0 md:col-span-7 md:pr-16">
          <span class="mb-6 block font-sans text-xs font-semibold tracking-[0.2em] text-[#6d5d33] uppercase">
            Philosophie &amp; Méthode
          </span>
          <h1
            class="mb-8 font-serif text-5xl leading-[1.1] tracking-tighter text-[#1a1c19] md:text-6xl lg:text-7xl"
            style="letter-spacing: -0.02em"
          >
            L'art de la<br />
            <span class="font-normal text-[#081a3e] italic">structure</span><br />
            patrimoniale.
          </h1>
          <p class="mb-12 max-w-xl text-xl leading-relaxed font-light text-[#45464e]">
            Notre méthode repose sur quatre étapes rigoureuses, pensées pour transformer la complexité patrimoniale en
            clarté stratégique.
          </p>
          <div class="flex flex-col gap-6 sm:flex-row">
            <a
              href="#methodologie"
              class="rounded-sm bg-[#081a3e] px-10 py-5 font-sans font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#0c2559]"
            >
              Découvrir nos étapes
            </a>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 border-b border-[#6d5d33]/30 px-4 py-5 font-sans font-medium tracking-wide text-[#6d5d33] transition-all duration-300 hover:border-[#6d5d33]"
            >
              Prendre rendez-vous
              <UIcon name="i-lucide-arrow-right" class="text-sm" />
            </NuxtLink>
          </div>
        </div>

        <!-- Image -->
        <div class="relative min-h-125 md:col-span-5 md:min-h-0">
          <div class="absolute inset-0 z-0 translate-x-12 translate-y-12 bg-[#f4f4ef]" />
          <div class="relative z-10 h-full w-full overflow-hidden shadow-2xl">
            <NuxtImg
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0YzQ49KlwYYgC0BP7l8MWxIvy98-kRYzVNS7Mt2rPXoTMkyNWXF6fylC4exMEt9XimQq0ADCdWkArIM2br9F4AM1ZhH41fXXT5UhxLuCVwUaSu2gQ1S5OXhNSXscfjcIINI9UqT_KSRAzUkZH4pl6HisAZJe55SIDPQhwJxo1ZPUBBmn5yGUPz3dGg8cvqtAr1ihujl-DO3UGgsftZwYlUReNKzGfDs_hM2V_Wnplts8QHTHxldUfe54iSzRJ7oWnnvP1DFBFYyPh"
              alt="Architecture Toulouse — AMS Patrimoine"
              class="absolute inset-0 h-full w-full object-cover transition-all duration-700 hover:grayscale-0"
              style="filter: grayscale(20%)"
            />
          </div>
          <!-- Floating card -->
          <div
            class="absolute bottom-10 -left-20 z-20 hidden max-w-xs border-l-4 border-[#6d5d33] bg-white p-8 shadow-xl md:block"
          >
            <p class="font-sans text-xs font-semibold tracking-widest text-[#6d5d33] uppercase">Excellence</p>
            <p class="mt-3 font-serif text-lg leading-snug text-[#081a3e]">
              Rigueur, transparence et engagement total envers vos objectifs patrimoniaux.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Introduction ─── -->
    <section class="py-32" style="background-color: #f4f4ef">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <!-- Title -->
          <div class="flex flex-col justify-center">
            <span class="mb-4 block font-sans text-xs font-semibold tracking-[0.2em] text-[#6d5d33] uppercase">
              Notre Vision
            </span>
            <h2 class="font-serif text-4xl leading-tight text-[#081a3e]" style="letter-spacing: -0.02em">
              Une vision holistique de vos actifs
            </h2>
          </div>

          <!-- Feature blocks -->
          <div class="lg:col-span-2">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div v-for="block in featureBlocks" :key="block.title" class="flex flex-col gap-4">
                <UIcon :name="block.icon" class="text-3xl text-[#6d5d33]" />
                <h3 class="font-serif text-xl text-[#081a3e]">{{ block.title }}</h3>
                <p class="leading-relaxed text-[#45464e]">{{ block.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Timeline ─── -->
    <section id="methodologie" class="bg-[#fafaf4] py-40">
      <div class="container mx-auto px-6 md:px-12">
        <!-- Header -->
        <div class="mb-24 text-center">
          <span class="mb-4 block font-sans text-xs font-semibold tracking-[0.2em] text-[#6d5d33] uppercase">
            Notre Méthodologie
          </span>
          <h2 class="font-serif text-4xl text-[#081a3e] md:text-5xl" style="letter-spacing: -0.02em">
            Un parcours en quatre étapes
          </h2>
        </div>

        <!-- Steps container -->
        <div class="relative mx-auto max-w-5xl">
          <!-- Vertical gold line -->
          <div
            class="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 md:block"
            style="background: linear-gradient(to bottom, transparent, #6d5d33 15%, #6d5d33 85%, transparent)"
          />

          <div class="space-y-24">
            <div
              v-for="step in timelineSteps"
              :key="step.number"
              class="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2"
              :class="{ 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1': step.reversed }"
            >
              <!-- Timeline node (centered) -->
              <div class="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                <div
                  class="h-4 w-4 rounded-full border-4 border-[#fafaf4] bg-[#6d5d33]"
                  style="box-shadow: 0 0 0 6px rgba(109, 93, 51, 0.15)"
                />
              </div>

              <!-- Text block -->
              <div class="flex flex-col" :class="step.reversed ? 'md:pl-16' : 'md:pr-16'">
                <span class="mb-3 block font-serif text-7xl leading-none font-bold text-[#6d5d33]/20">
                  {{ step.number }}
                </span>
                <h3 class="mb-4 font-serif text-3xl text-[#081a3e]" style="letter-spacing: -0.02em">
                  {{ step.title }}
                </h3>
                <p class="mb-6 text-lg leading-relaxed font-light text-[#45464e]">
                  {{ step.description }}
                </p>

                <!-- Tags -->
                <div v-if="step.tags" class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in step.tags"
                    :key="tag"
                    class="rounded-sm border border-[#c5c6cf]/30 bg-[#e8e8e3] px-3 py-1 font-sans text-[10px] font-semibold tracking-widest text-[#45464e] uppercase"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- CTA link -->
                <NuxtLink
                  v-if="step.ctaLabel"
                  to="/contact"
                  class="mt-2 inline-flex w-fit items-center gap-2 border-b border-[#6d5d33]/30 font-sans text-xs font-semibold tracking-widest text-[#6d5d33] uppercase transition-colors duration-300 hover:border-[#6d5d33]"
                >
                  {{ step.ctaLabel }}
                  <UIcon name="i-lucide-arrow-right" class="text-xs" />
                </NuxtLink>
              </div>

              <!-- Visual block -->
              <div :class="step.reversed ? 'md:pr-16' : 'md:pl-16'">
                <!-- Image variant -->
                <div v-if="step.image" class="aspect-video overflow-hidden bg-[#f4f4ef]">
                  <NuxtImg
                    :src="step.image"
                    :alt="step.title"
                    class="h-full w-full object-cover transition-all duration-700 hover:grayscale-0"
                    style="filter: grayscale(25%)"
                    loading="lazy"
                  />
                </div>

                <!-- Quote card variant -->
                <div v-else-if="step.quote" class="rounded-sm border-l-4 border-[#6d5d33] bg-[#081a3e] p-10">
                  <UIcon name="i-lucide-quote" class="mb-6 text-3xl text-[#6d5d33]" />
                  <p class="font-serif text-xl leading-relaxed text-white italic">
                    {{ step.quote }}
                  </p>
                  <p class="mt-6 font-sans text-xs font-semibold tracking-widest text-[#7483ad] uppercase">
                    Marie-Sophie LECLUYSE — Fondatrice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Signature ─── -->
    <section class="py-32" style="background-color: #ffffff">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <!-- Image with floating card -->
          <div class="relative">
            <div class="aspect-square overflow-hidden bg-[#f4f4ef]">
              <NuxtImg
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0YzQ49KlwYYgC0BP7l8MWxIvy98-kRYzVNS7Mt2rPXoTMkyNWXF6fylC4exMEt9XimQq0ADCdWkArIM2br9F4AM1ZhH41fXXT5UhxLuCVwUaSu2gQ1S5OXhNSXscfjcIINI9UqT_KSRAzUkZH4pl6HisAZJe55SIDPQhwJxo1ZPUBBmn5yGUPz3dGg8cvqtAr1ihujl-DO3UGgsftZwYlUReNKzGfDs_hM2V_Wnplts8QHTHxldUfe54iSzRJ7oWnnvP1DFBFYyPh"
                alt="Rigueur & Transparence — AMS Patrimoine"
                class="h-full w-full object-cover transition-all duration-700 hover:grayscale-0"
                style="filter: grayscale(15%)"
                loading="lazy"
              />
            </div>
            <!-- Floating card -->
            <div
              class="absolute -right-6 -bottom-6 z-10 hidden max-w-xs border-l-4 border-[#081a3e] bg-white p-8 shadow-xl md:block"
            >
              <p class="font-sans text-xs font-semibold tracking-widest text-[#081a3e] uppercase">
                Rigueur &amp; Transparence
              </p>
              <p class="mt-3 font-serif text-lg leading-snug text-[#45464e]">
                Chaque décision est documentée, expliquée et validée avec vous.
              </p>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-col">
            <span class="mb-4 block font-sans text-xs font-semibold tracking-[0.2em] text-[#6d5d33] uppercase">
              Notre Engagement
            </span>
            <h2
              class="mb-8 font-serif text-4xl leading-tight text-[#081a3e] md:text-5xl"
              style="letter-spacing: -0.02em"
            >
              Une ingénierie de précision
            </h2>
            <p class="mb-12 text-lg leading-relaxed font-light text-[#45464e]">
              AMS Patrimoine n'est pas un cabinet de conseil généraliste. Nous sommes des architectes du patrimoine,
              dont la seule mission est de construire des structures solides, optimisées et pérennes pour nos clients.
            </p>

            <!-- Stats -->
            <div class="mb-12 grid grid-cols-2 gap-8 border-t border-[#c5c6cf]/20 pt-12">
              <div v-for="stat in stats" :key="stat.value" class="flex flex-col gap-2">
                <span class="font-serif text-4xl text-[#6d5d33]" style="letter-spacing: -0.02em">
                  {{ stat.value }}
                </span>
                <span class="font-sans text-xs font-semibold tracking-widest text-[#45464e] uppercase">
                  {{ stat.label }}
                </span>
              </div>
            </div>

            <!-- CTA -->
            <div class="flex items-center gap-6">
              <NuxtLink
                to="/contact"
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#081a3e] text-white transition-colors duration-300 hover:bg-[#0c2559]"
              >
                <UIcon name="i-lucide-phone" class="text-lg" />
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-2 border-b border-[#6d5d33]/30 font-sans text-sm font-medium tracking-wide text-[#6d5d33] transition-colors duration-300 hover:border-[#6d5d33]"
              >
                Prendre rendez-vous pour un audit
                <UIcon name="i-lucide-arrow-right" class="text-xs" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA Banner ─── -->
    <section class="bg-[#081a3e] py-28">
      <div class="container mx-auto px-6 text-center md:px-12">
        <span class="mb-4 block font-sans text-xs font-semibold tracking-[0.2em] text-[#7483ad] uppercase">
          Première étape
        </span>
        <h2
          class="mx-auto mb-8 max-w-3xl font-serif text-4xl leading-tight text-white md:text-5xl"
          style="letter-spacing: -0.02em"
        >
          Commencez votre audit patrimonial
        </h2>
        <p class="mx-auto mb-12 max-w-xl text-lg leading-relaxed font-light text-[#7483ad]">
          Un premier entretien sans engagement pour poser les bases de votre stratégie sur-mesure.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-3 rounded-sm bg-white px-10 py-5 font-sans font-medium tracking-wide text-[#081a3e] transition-all duration-300 hover:bg-[#fafaf4]"
        >
          Prendre rendez-vous
          <UIcon name="i-lucide-arrow-right" class="text-sm" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
