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
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD6PN3eiZMThr1mr2GySQ9QFrAf-wDKBoSSFDjU8DpIMuhV6UUJOSPec1pWpbfPycMjimq6N3wYCkeFndS4qAjFT_zfpgpUO1WxUKamWEa2M5CXeb9i9fPHI09ghN1Ra1qmn7i2a22xIBVhBrt9XEvle95WSg2UNSpY8M7TUBXRKEvlGDZkygEmvlnIaSf3OqGWlX34MLtgzUTiCqvqTIGEOJiDFwgPI5ClWR9_-RWnBQjB9OkWgyziSWAWsLHRBXZJQRpwSlaQ8Bb5',
      imageAlt: "Façade en verre minimaliste d'un gratte-ciel — Pôle Business",
    },
    {
      category: 'Pôle Privé',
      title: 'Particuliers',
      description:
        "Protection de la famille, préparation de la retraite et structuration d'actifs immobiliers pour bâtir un héritage solide et pérenne.",
      ctaLabel: "Voir l'offre particuliers",
      to: '/expertise/particuliers',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDWOfUGlGGML9mYZb67p1uJ4sKlG5uTPnClhrE3_bT4FUZWeIfuk9Tvf2zhCdeJytkKAr-pEkJ0hS2lesqU1_4Mp4QsdvLERAygS6CCUT19mO5hesnc-jPVurUnF5vSb0lE8uH0CWJm2Pl3wl5ttT72YixO9aEilaz0IK-Gtnzwx4NOp9iwy5cBHN7NqjMXcStMOQosl-fq1O7cd118vhFeiW0aVLXRvAEZnqqnXlASgE1Z8ALd8_tQpRS-kjmLMeBB0eN9z7-h7OHT',
      imageAlt: "Intérieur d'une bibliothèque de luxe avec lumière naturelle — Pôle Privé",
    },
    {
      category: 'Ingénierie',
      title: 'Stratégie Patrimoniale',
      description:
        'Audit global et ingénierie juridique. Nous créons le cadre structurel nécessaire à la valorisation et à la sécurité de vos actifs.',
      ctaLabel: "Explorer l'ingénierie",
      to: '/expertise/patrimoine',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAedQORwMTeRMJT2Ycli7b-dWrFGJojU-KwGHDsDzLghRHmmeQFDxCu8-hcYGs3ZkLlUMzB_TmDNFk5ep3XC_cnMjS9m-9aJveKg6Na51m_nLB0AXqgqt6DN8Q9JuRsFvQASAe78Hge3ip8jVOU2TTTjnCoQTRj-TsNF4tYgV1gv9ALdkGjjHtD7lg_GlRbHF6QzTeIak-i2i4UIDQnOLTSGj2sZpLuFoaxZGQ-1RHADzbTzofO-kB626_a74HpYk-OURalap_CTES1',
      imageAlt: 'Stylo plume et plan architectural — Ingénierie Patrimoniale',
    },
    {
      category: 'Investissement',
      title: 'Stratégie Financière',
      description:
        "Allocation d'actifs en architecture ouverte. Accès aux meilleurs gérants mondiaux et solutions de placement privées exclusives.",
      ctaLabel: 'Découvrir nos solutions',
      to: '/expertise/finance',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAjuuJTm2AUtMVBC9OlC0v2RGRLmbv6nW-LAxa5V7zYGjTeajRM5RaLR4oJNsORoDWS_By7kCGSaOHLWEaccRhR7WagOe3q851IJjvW4V-fQ9ZH7gomSlanBrRvuJmNqIJj5sIa8TGVh5EuBmylqBpjO8ZjR1Zfq4H3aunnreMlG6q7tZcBMjPxcWbT1BQ3WEaP7HPcm1PDqogsrq8S0pWtfEObTHtd1wLg_6w4irbdRN4JJ-UTjIoMEqp-uui1blb8b9fwEgps0mwS',
      imageAlt: 'Lignes architecturales abstraites en tons monochromatiques — Stratégie Financière',
    },
  ];

  useHead({
    title: 'Expertise — AMS Patrimoine',
    meta: [
      {
        name: 'description',
        content:
          'Découvrez nos domaines de compétence : accompagnement dirigeants, particuliers, stratégie patrimoniale et financière. Une expertise multidimensionnelle au service de votre avenir.',
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero ─── -->
    <section class="container mx-auto px-6 pt-36 pb-20 md:px-12">
      <div class="max-w-3xl">
        <span class="mb-4 block font-sans text-sm font-semibold tracking-[0.2em] text-[#6d5d33] uppercase">
          Domaines de Compétence
        </span>
        <h1
          class="mb-8 font-serif text-5xl leading-tight font-bold text-[#000000] md:text-7xl"
          style="letter-spacing: -0.02em"
        >
          Une expertise
          <span class="font-normal text-[#6d5d33] italic">multidimensionnelle</span>
          au service de votre avenir.
        </h1>
        <p class="max-w-2xl text-xl leading-relaxed text-[#45464e]">
          Nous structurons des solutions sur mesure alliant conseil juridique, ingénierie fiscale et stratégie
          d'investissement pour pérenniser votre patrimoine.
        </p>
      </div>
    </section>

    <!-- ─── Expertise Grid ─── -->
    <section class="py-24" style="background-color: #f4f4ef">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          <div
            v-for="card in expertiseCards"
            :key="card.title"
            class="group relative overflow-hidden rounded-sm bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <!-- Card image -->
            <div class="aspect-[16/10] overflow-hidden">
              <NuxtImg
                :src="card.image"
                :alt="card.imageAlt"
                class="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <!-- Card content -->
            <div class="p-10">
              <div class="mb-6 flex items-start justify-between">
                <span class="font-sans text-xs font-semibold tracking-widest text-[#6d5d33] uppercase">
                  {{ card.category }}
                </span>
                <UIcon
                  name="i-lucide-arrow-right"
                  class="text-[#6d5d33] transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>
              <h2
                class="mb-4 font-serif text-3xl text-[#000000] transition-colors duration-300 group-hover:text-[#6d5d33]"
              >
                {{ card.title }}
              </h2>
              <p class="mb-8 leading-relaxed text-[#45464e]">
                {{ card.description }}
              </p>
              <NuxtLink
                :to="card.to"
                class="inline-flex items-center font-sans text-sm font-semibold tracking-widest text-[#081a3e] uppercase transition-colors duration-300 hover:text-[#6d5d33]"
              >
                {{ card.ctaLabel }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Signature Quote Section ─── -->
    <section class="py-32" style="background-color: #fafaf4">
      <div class="container mx-auto px-6 md:px-12">
        <div class="relative grid grid-cols-1 items-center lg:grid-cols-12">
          <!-- Image -->
          <div class="lg:col-span-7">
            <NuxtImg
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3bJTVRop_NPnnWvWQBLbfmIfGU8rsLN-9R4pnsrcrUAjKKzyTXBITiZgtEMPUjhLLhuS8EuVsb9vLw04EPmbpKb5aNBu0QVhhclrLiJeuodXVkIt57pspFZ2SEvFobAKnkUsehClC7srjrMqOOEBrB1b-QP_He4rkX-10jewAWIniVbfHmI5o4ZFg3LXZEiwuOFOD7BVFWO6oNXBCiiqTme_xDAZwO3Z7qj8HWXVtOc-Lr4Q9HoGFa2Dfe7T8IW36CqBRUtypzwQc"
              alt="Expert AMS Patrimoine — soin du détail"
              class="h-[600px] w-full rounded-sm object-cover grayscale"
              loading="lazy"
            />
          </div>

          <!-- Quote card (overlapping) -->
          <div class="z-10 mt-[-6rem] lg:col-span-6 lg:mt-0 lg:-ml-24">
            <div class="border-l-4 border-[#6d5d33] bg-white p-12 shadow-xl lg:p-20">
              <UIcon name="i-lucide-quote" class="mb-6 text-5xl text-[#6d5d33]" />
              <h3 class="mb-8 font-serif text-3xl leading-snug text-[#000000] italic">
                "Le patrimoine n'est pas seulement une accumulation de valeurs, c'est l'expression d'une liberté que
                nous avons le devoir de protéger."
              </h3>
              <div class="flex items-center gap-4">
                <div class="h-px w-12 bg-[#6d5d33]"></div>
                <p class="font-sans text-sm font-bold tracking-widest text-[#6d5d33] uppercase">AMS Patrimoine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
