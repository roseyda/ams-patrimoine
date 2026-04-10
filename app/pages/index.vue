<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-[#fafaf4]">
      <div class="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-44">
        <div class="max-w-3xl">
          <p class="mb-6 font-sans text-xs font-semibold tracking-[0.1em] text-[#6d5d33] uppercase">
            Conseil en gestion de patrimoine
          </p>
          <h1
            class="text-primary-500 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style="letter-spacing: -0.02em"
          >
            Votre patrimoine merite une attention particuliere
          </h1>
          <p class="mt-8 max-w-2xl text-lg leading-relaxed text-[#45464e]">
            AMS Patrimoine accompagne dirigeants et particuliers dans la construction et la protection de leur
            patrimoine avec une approche sur-mesure.
          </p>
          <div class="mt-10 flex flex-wrap items-center gap-4">
            <UButton
              label="Decouvrir notre approche"
              to="/approche"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              class="rounded-sm"
            />
            <UButton
              label="Prendre rendez-vous"
              to="/contact"
              size="xl"
              variant="ghost"
              class="rounded-sm text-[#6d5d33] hover:bg-[#f4f4ef]"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ADN Section -->
    <section class="bg-[#f4f4ef]">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div class="mb-16 max-w-2xl">
          <p class="mb-4 font-sans text-xs font-semibold tracking-[0.1em] text-[#6d5d33] uppercase">L'ADN du cabinet</p>
          <h2 class="font-serif text-3xl leading-tight tracking-tight sm:text-4xl" style="letter-spacing: -0.02em">
            Une vision patrimoniale globale
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div v-for="(item, index) in adnItems" :key="index" class="rounded-sm bg-white p-8 lg:p-10">
            <span class="font-serif text-2xl text-[#6d5d33]/30">{{ item.numeral }}</span>
            <h3 class="mt-4 mb-3 font-serif text-xl">{{ item.title }}</h3>
            <p class="text-sm leading-relaxed text-[#45464e]">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Domaines Section -->
    <section class="bg-[#fafaf4]">
      <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div class="mb-16 max-w-2xl">
          <p class="mb-4 font-sans text-xs font-semibold tracking-[0.1em] text-[#6d5d33] uppercase">Nos domaines</p>
          <h2 class="font-serif text-3xl leading-tight tracking-tight sm:text-4xl" style="letter-spacing: -0.02em">
            Des expertises complementaires
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div v-for="(domain, index) in domainItems" :key="index" class="group">
            <div
              class="rounded-sm bg-white p-8 transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(8,26,62,0.05)] lg:p-10"
            >
              <UIcon :name="domain.icon" class="mb-5 text-2xl text-[#6d5d33]" />
              <h3 class="mb-3 font-serif text-xl">{{ domain.title }}</h3>
              <p class="mb-6 text-sm leading-relaxed text-[#45464e]">{{ domain.description }}</p>
              <NuxtLink
                :to="domain.to"
                class="hover:text-primary-500 inline-flex items-center gap-1.5 font-sans text-xs font-medium tracking-[0.05em] text-[#6d5d33] uppercase transition-colors duration-300"
              >
                En savoir plus
                <UIcon name="i-lucide-arrow-right" class="text-sm" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  const adnItems = [
    {
      numeral: 'I',
      title: 'Ingenierie',
      description:
        'Solutions patrimoniales sur-mesure, construites avec rigueur et creativite pour repondre a vos objectifs.',
    },
    {
      numeral: 'II',
      title: 'Conseil',
      description: "Un accompagnement independant et transparent, guide par l'interet exclusif de nos clients.",
    },
    {
      numeral: 'III',
      title: 'Accompagnement',
      description:
        'Un suivi dans la duree pour adapter votre strategie aux evolutions de votre vie et de votre patrimoine.',
    },
  ];

  const domainItems = [
    {
      icon: 'i-lucide-briefcase',
      title: 'Accompagnement Dirigeants',
      description:
        "Optimisation de la remuneration, transmission d'entreprise et protection du patrimoine professionnel.",
      to: '/expertise/dirigeants',
    },
    {
      icon: 'i-lucide-users',
      title: 'Accompagnement Particuliers',
      description: 'Gestion patrimoniale globale, investissements et preparation de la retraite.',
      to: '/expertise/particuliers',
    },
    {
      icon: 'i-lucide-trending-up',
      title: 'Strategie Financiere',
      description: "Allocation d'actifs, placements financiers et optimisation fiscale.",
      to: '/expertise/finance',
    },
  ];
</script>
