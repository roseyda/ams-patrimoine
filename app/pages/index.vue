<script setup lang="ts">
  interface ExpertiseCard {
    icon: string;
    title: string;
    description: string;
    to: string;
  }

  interface AdnItem {
    numeral: string;
    title: string;
    description: string;
  }

  interface TrustBadge {
    icon: string;
    label: string;
  }

  const expertiseCards: ExpertiseCard[] = [
    {
      icon: 'i-lucide-landmark',
      title: 'Ingénierie Patrimoniale',
      description:
        'Analyse structurelle de vos actifs, optimisation de la détention et anticipation de la transmission.',
      to: '/expertise/patrimoine',
    },
    {
      icon: 'i-lucide-trending-up',
      title: 'Conseil en Investissement',
      description:
        'Sélection rigoureuse de supports financiers et immobiliers adaptés à votre profil de risque et vos objectifs.',
      to: '/expertise/finance',
    },
    {
      icon: 'i-lucide-building-2',
      title: 'Accompagnement Dirigeant',
      description:
        "Stratégie de rémunération, optimisation de la trésorerie d'entreprise et préparation de la cession.",
      to: '/expertise/dirigeants',
    },
  ];

  const adnItems: AdnItem[] = [
    {
      numeral: 'I.',
      title: 'Indépendance Totale',
      description:
        'Absence de lien capitalistique avec les établissements financiers, garantissant une objectivité absolue dans nos préconisations.',
    },
    {
      numeral: 'II.',
      title: 'Sur-mesure Architectural',
      description:
        "Chaque stratégie est construite comme une pièce d'architecture unique, adaptée aux fondations de votre histoire familiale.",
    },
    {
      numeral: 'III.',
      title: 'Pérennité & Confiance',
      description:
        'Une relation de confiance inscrite dans le temps, basée sur la transparence et la discrétion la plus totale.',
    },
  ];

  const trustBadges: TrustBadge[] = [
    { icon: 'i-lucide-shield-check', label: 'Agrément CIF' },
    { icon: 'i-lucide-file-check', label: 'Membre ANACOFI' },
    { icon: 'i-lucide-graduation-cap', label: 'Certification CGP' },
    { icon: 'i-lucide-scale', label: 'Code Déontologie' },
  ];
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero Section : The Architectural Blade ─── -->
    <section class="relative flex min-h-screen items-center overflow-hidden bg-[#fafaf4]">
      <div class="container mx-auto grid grid-cols-1 items-stretch gap-0 px-6 md:grid-cols-12 md:px-12">
        <!-- Text Content -->
        <div class="z-10 flex flex-col justify-center py-20 pr-0 md:col-span-7 md:pr-12">
          <span class="mb-6 block font-sans text-sm font-semibold uppercase tracking-widest text-[#6d5d33]">
            Cabinet de Conseil en Gestion de Patrimoine
          </span>
          <h1
            class="mb-8 font-serif text-5xl leading-tight tracking-tighter text-[#081a3e] md:text-7xl lg:text-8xl"
            style="letter-spacing: -0.02em"
          >
            L'art de <br />
            <span class="font-normal italic">préserver</span> <br />
            votre héritage.
          </h1>
          <p class="mb-12 max-w-xl text-lg leading-relaxed text-[#45464e] md:text-xl">
            AMS Patrimoine accompagne les familles et les chefs d'entreprise dans la structuration, l'optimisation et la
            transmission de leur patrimoine avec une vision long terme.
          </p>
          <div class="flex flex-col gap-6 sm:flex-row">
            <NuxtLink
              to="/expertise"
              class="rounded-sm bg-[#081a3e] px-10 py-5 font-sans font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#0c2559]"
            >
              Découvrir notre expertise
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 border-b border-[#6d5d33]/30 px-4 py-5 font-sans font-medium tracking-wide text-[#6d5d33] transition-all duration-300 hover:border-[#6d5d33]"
            >
              Prendre rendez-vous
              <UIcon name="i-lucide-arrow-right" class="text-sm" />
            </NuxtLink>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative min-h-125 md:col-span-5 md:min-h-0">
          <div class="absolute inset-0 z-0 translate-x-12 translate-y-12 bg-[#f4f4ef]"></div>
          <div class="relative z-10 h-full w-full overflow-hidden shadow-2xl">
            <NuxtImg
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0YzQ49KlwYYgC0BP7l8MWxIvy98-kRYzVNS7Mt2rPXoTMkyNWXF6fylC4exMEt9XimQq0ADCdWkArIM2br9F4AM1ZhH41fXXT5UhxLuCVwUaSu2gQ1S5OXhNSXscfjcIINI9UqT_KSRAzUkZH4pl6HisAZJe55SIDPQhwJxo1ZPUBBmn5yGUPz3dGg8cvqtAr1ihujl-DO3UGgsftZwYlUReNKzGfDs_hM2V_Wnplts8QHTHxldUfe54iSzRJ7oWnnvP1DFBFYyPh"
              alt="Marie-Sophie LECLUYSE - Fondatrice AMS Patrimoine"
              class="absolute inset-0 h-full w-full object-cover"
              style="filter: grayscale(20%)"
            />
          </div>
          <!-- Overlapping Quote Card -->
          <div
            class="absolute -left-20 bottom-10 z-20 max-w-xs border-l-4 border-[#6d5d33] bg-white p-8 shadow-xl"
          >
            <p class="font-serif text-xl leading-snug text-[#081a3e]">
              "Chaque patrimoine raconte une histoire unique qui mérite une stratégie sur-mesure."
            </p>
            <p class="mt-4 font-sans text-xs font-bold uppercase tracking-widest text-[#6d5d33]">
              Marie-Sophie LECLUYSE
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Expertise Section : Tonal Grid ─── -->
    <section class="py-32" style="background-color: #f4f4ef">
      <div class="container mx-auto px-6 md:px-12">
        <div class="mb-24 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div class="max-w-2xl">
            <h2 class="mb-6 font-serif text-4xl text-[#081a3e] md:text-5xl" style="letter-spacing: -0.02em">
              Expertise 360°
            </h2>
            <p class="text-lg text-[#45464e]">
              Une approche globale de votre situation patrimoniale combinant vision juridique, fiscale et financière.
            </p>
          </div>
          <span class="hidden font-serif text-8xl text-[#081a3e]/20 md:block">01</span>
        </div>

        <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div v-for="card in expertiseCards" :key="card.title" class="group">
            <div
              class="flex h-full flex-col bg-white p-10 transition-transform duration-500 group-hover:-translate-y-2"
            >
              <UIcon :name="card.icon" class="mb-8 text-4xl text-[#6d5d33]" />
              <h3 class="mb-4 font-serif text-2xl text-[#081a3e]">{{ card.title }}</h3>
              <p class="grow leading-relaxed text-[#45464e]">{{ card.description }}</p>
              <div
                class="mt-8 border-t border-[#c5c6cf]/20 pt-8 transition-colors group-hover:border-[#6d5d33]/50"
              >
                <NuxtLink
                  :to="card.to"
                  class="inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-widest text-[#6d5d33]"
                >
                  En savoir plus
                  <UIcon name="i-lucide-chevron-right" class="text-xs" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── DNA Section : The Ledger Look ─── -->
    <section class="py-32 bg-[#fafaf4]">
      <div class="container mx-auto grid grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 md:px-12">
        <!-- Image -->
        <div class="relative order-2 lg:order-1">
          <div class="aspect-square overflow-hidden bg-[#f4f4ef]">
            <NuxtImg
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgk02VPwy-vKt57w_NutwTTUKGQI_IERBiz_hgZAudsBqC_qh5aWRTliBMSueBLCGBDNeH4sgTIOoAPoCFmNqZA3UKybnGSQ4azkmbDuZZs2kHr-W66Ha2SgqAEBga96rwZLb5qdVzZhyzIKDYgzzpdd_5tDkpS17LTQ_1xjGOc2MHnXmPDU-KiXPOcLQgJh9fGAsxZaKR7Ayqn_HGb7yXyM76P6nkzjUZYEOm0g-H4IHouWcensciSDbZeZ59Llu5T1FM0ATYCLgD"
              alt="Bureau AMS Patrimoine"
              class="h-full w-full object-cover opacity-80 mix-blend-multiply"
            />
          </div>
          <div class="absolute -bottom-10 -right-10 hidden bg-[#081a3e] p-12 text-white md:block">
            <div class="mb-2 font-serif text-4xl italic">15+</div>
            <div class="text-xs uppercase tracking-[0.2em] opacity-70">Années d'Expertise</div>
          </div>
        </div>

        <!-- Text -->
        <div class="order-1 lg:order-2">
          <span class="mb-6 block font-sans text-sm font-semibold uppercase tracking-widest text-[#6d5d33]">
            L'ADN du Cabinet
          </span>
          <h2
            class="mb-10 font-serif text-4xl leading-tight text-[#081a3e] md:text-5xl"
            style="letter-spacing: -0.02em"
          >
            Une approche résolument <span class="italic">indépendante</span> et confidentielle.
          </h2>
          <div class="space-y-12">
            <div v-for="item in adnItems" :key="item.numeral" class="flex gap-6">
              <span class="font-serif text-2xl text-[#6d5d33]">{{ item.numeral }}</span>
              <div>
                <h4 class="mb-3 font-serif text-xl text-[#081a3e]">{{ item.title }}</h4>
                <p class="text-[#45464e]">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Trust Section ─── -->
    <section class="py-32" style="background-color: rgba(232,232,227,0.3)">
      <div class="container mx-auto max-w-4xl px-6 text-center md:px-12">
        <h2 class="mb-12 font-serif text-4xl text-[#081a3e] md:text-5xl" style="letter-spacing: -0.02em">
          La Confiance se mérite
        </h2>
        <p class="mb-16 font-serif text-xl italic leading-relaxed text-[#45464e]">
          "Notre métier n'est pas seulement financier ; il est avant tout humain. Nous protégeons ce que nos clients
          ont mis une vie à bâtir."
        </p>
        <div class="grid grid-cols-2 items-center gap-12 opacity-60 md:grid-cols-4">
          <div v-for="badge in trustBadges" :key="badge.label" class="flex flex-col items-center gap-2">
            <div
              class="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
              style="background-color: rgba(197,198,207,0.3)"
            >
              <UIcon :name="badge.icon" class="text-[#081a3e]" />
            </div>
            <p class="text-[10px] font-bold uppercase tracking-widest">{{ badge.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA Section ─── -->
    <section class="relative overflow-hidden bg-[#081a3e] py-32">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-white to-transparent"></div>
      </div>
      <div class="container relative z-10 mx-auto px-6 text-center md:px-12">
        <h2 class="mb-10 font-serif text-4xl leading-tight text-white md:text-6xl" style="letter-spacing: -0.02em">
          Prêt à valoriser <br /> votre patrimoine ?
        </h2>
        <NuxtLink
          to="/contact"
          class="inline-block rounded-sm bg-[#6d5d33] px-12 py-6 font-sans font-medium tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-[#857342]"
        >
          PARLER À UN CONSEILLER
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
