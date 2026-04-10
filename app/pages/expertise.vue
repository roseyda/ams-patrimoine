<script setup lang="ts">
  interface ExpertiseCard {
    tag: string;
    title: string;
    description: string;
    ctaLabel: string;
    to: string;
    image: string;
  }

  const expertiseCards: ExpertiseCard[] = [
    {
      tag: 'Pôle Business',
      title: 'Dirigeants',
      description:
        "Accompagnement spécifique dans la gestion de la trésorerie d'entreprise, l'optimisation de la rémunération et la transmission de l'outil professionnel.",
      ctaLabel: 'Découvrir le conseil aux dirigeants',
      to: '/expertise/dirigeants',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0YzQ49KlwYYgC0BP7l8MWxIvy98-kRYzVNS7Mt2rPXoTMkyNWXF6fylC4exMEt9XimQq0ADCdWkArIM2br9F4AM1ZhH41fXXT5UhxLuCVwUaSu2gQ1S5OXhNSXscfjcIINI9UqT_KSRAzUkZH4pl6HisAZJe55SIDPQhwJxo1ZPUBBmn5yGUPz3dGg8cvqtAr1ihujl-DO3UGgsftZwYlUReNKzGfDs_hM2V_Wnplts8QHTHxldUfe54iSzRJ7oWnnvP1DFBFYyPh',
    },
    {
      tag: 'Pôle Privé',
      title: 'Particuliers',
      description:
        "Protection de la famille, préparation de la retraite et structuration d'actifs immobiliers pour bâtir un héritage solide et pérenne.",
      ctaLabel: "Voir l'offre particuliers",
      to: '/expertise/particuliers',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBVhVzDWkBsqouyMBOFVAVh1pP9A91z4mkKO0L7GUBqBCFiX9IXMtdWdM8wC0JF_PiMF7T8dUPOPIGjQVG8cUL6y1YDHrW3OJR6SEV1YY8KBFN5a_xBUEjQAXCBxMGIEgdp_JZFLGXq_pOdnOMQlwlTpOuiDFCfJE0I6NsJVDfHkTt_P9v0UfDrn4AvNIh0C9Wl78VzS-v9Y7pW1n4iJ5V7GXrWIiABiR5OLqPjlI7isBiWoYfC1kp4lY',
    },
    {
      tag: 'Ingénierie',
      title: 'Stratégie Patrimoniale',
      description:
        'Audit global et ingénierie juridique. Nous créons le cadre structurel nécessaire à la valorisation et à la sécurité de vos actifs.',
      ctaLabel: "Explorer l'ingénierie",
      to: '/expertise/patrimoine',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0YzQ49KlwYYgC0BP7l8MWxIvy98-kRYzVNS7Mt2rPXoTMkyNWXF6fylC4exMEt9XimQq0ADCdWkArIM2br9F4AM1ZhH41fXXT5UhxLuCVwUaSu2gQ1S5OXhNSXscfjcIINI9UqT_KSRAzUkZH4pl6HisAZJe55SIDPQhwJxo1ZPUBBmn5yGUPz3dGg8cvqtAr1ihujl-DO3UGgsftZwYlUReNKzGfDs_hM2V_Wnplts8QHTHxldUfe54iSzRJ7oWnnvP1DFBFYyPh',
    },
    {
      tag: 'Investissement',
      title: 'Stratégie Financière',
      description:
        "Allocation d'actifs en architecture ouverte. Accès aux meilleurs gérants mondiaux et solutions de placement privées exclusives.",
      ctaLabel: 'Découvrir nos solutions',
      to: '/expertise/finance',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBVhVzDWkBsqouyMBOFVAVh1pP9A91z4mkKO0L7GUBqBCFiX9IXMtdWdM8wC0JF_PiMF7T8dUPOPIGjQVG8cUL6y1YDHrW3OJR6SEV1YY8KBFN5a_xBUEjQAXCBxMGIEgdp_JZFLGXq_pOdnOMQlwlTpOuiDFCfJE0I6NsJVDfHkTt_P9v0UfDrn4AvNIh0C9Wl78VzS-v9Y7pW1n4iJ5V7GXrWIiABiR5OLqPjlI7isBiWoYfC1kp4lY',
    },
  ];

  useHead({
    title: 'Expertise — AMS Patrimoine',
    meta: [
      {
        name: 'description',
        content:
          'Découvrez les domaines de compétence AMS Patrimoine : conseil aux dirigeants, accompagnement des particuliers, ingénierie patrimoniale et stratégie financière.',
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero ─── -->
    <section class="pt-40 pb-20">
      <div class="container mx-auto px-6 md:px-12">
        <span class="mb-6 block font-sans text-xs font-semibold tracking-[0.2em] text-[#6d5d33] uppercase">
          Domaines de Compétence
        </span>
        <h1
          class="mb-8 max-w-3xl font-serif text-5xl leading-[1.1] tracking-tighter text-[#1a1c19] md:text-7xl"
          style="letter-spacing: -0.02em"
        >
          Une expertise<br />
          <span class="font-normal italic">multidimensionnelle</span><br />
          au service de votre avenir.
        </h1>
        <p class="max-w-2xl text-xl leading-relaxed font-light text-[#45464e]">
          Nous structurons des solutions sur mesure alliant conseil juridique, ingénierie fiscale et stratégie
          d'investissement pour pérenniser votre patrimoine.
        </p>
      </div>
    </section>

    <!-- ─── Expertise Grid ─── -->
    <section class="py-24" style="background-color: #f4f4ef">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          <NuxtLink
            v-for="card in expertiseCards"
            :key="card.title"
            :to="card.to"
            class="group relative overflow-hidden rounded-sm bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <!-- Image -->
            <div class="aspect-[16/10] overflow-hidden">
              <NuxtImg
                :src="card.image"
                :alt="card.title"
                class="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                style="filter: grayscale(15%)"
                loading="lazy"
              />
            </div>

            <!-- Content -->
            <div class="p-10">
              <!-- Category + arrow -->
              <div class="mb-6 flex items-start justify-between">
                <span class="font-sans text-xs font-semibold tracking-widest text-[#6d5d33] uppercase">
                  {{ card.tag }}
                </span>
                <UIcon
                  name="i-lucide-arrow-right"
                  class="text-xl text-[#6d5d33] transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>

              <!-- Title -->
              <h2
                class="mb-4 font-serif text-3xl text-[#1a1c19] transition-colors duration-300 group-hover:text-[#6d5d33]"
                style="letter-spacing: -0.02em"
              >
                {{ card.title }}
              </h2>

              <!-- Body -->
              <p class="mb-8 leading-relaxed text-[#45464e]">
                {{ card.description }}
              </p>

              <!-- CTA -->
              <span
                class="inline-flex items-center gap-2 font-sans text-sm font-semibold tracking-widest text-[#081a3e] uppercase transition-colors duration-300 group-hover:text-[#6d5d33]"
              >
                {{ card.ctaLabel }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── Quote Section (Asymmetric Overlap) ─── -->
    <section class="bg-[#fafaf4] py-32">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 items-center lg:grid-cols-12">
          <!-- Image — 7 cols -->
          <div class="relative lg:col-span-7">
            <NuxtImg
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0YzQ49KlwYYgC0BP7l8MWxIvy98-kRYzVNS7Mt2rPXoTMkyNWXF6fylC4exMEt9XimQq0ADCdWkArIM2br9F4AM1ZhH41fXXT5UhxLuCVwUaSu2gQ1S5OXhNSXscfjcIINI9UqT_KSRAzUkZH4pl6HisAZJe55SIDPQhwJxo1ZPUBBmn5yGUPz3dGg8cvqtAr1ihujl-DO3UGgsftZwYlUReNKzGfDs_hM2V_Wnplts8QHTHxldUfe54iSzRJ7oWnnvP1DFBFYyPh"
              alt="AMS Patrimoine — Conseil patrimonial"
              class="h-[600px] w-full rounded-sm object-cover grayscale"
              loading="lazy"
            />
          </div>

          <!-- Quote card — 6 cols, overlapping the image -->
          <div class="z-10 mt-[-6rem] lg:col-span-6 lg:mt-0 lg:-ml-24">
            <div class="border-l-4 border-[#6d5d33] bg-white p-12 shadow-xl lg:p-20">
              <UIcon name="i-lucide-quote" class="mb-6 text-5xl text-[#6d5d33]" />
              <blockquote class="mb-8 font-serif text-3xl leading-snug text-[#1a1c19] italic">
                "Le patrimoine n'est pas seulement une accumulation de valeurs, c'est l'expression d'une liberté que
                nous avons le devoir de protéger."
              </blockquote>
              <div class="flex items-center gap-4">
                <div class="h-px w-12 bg-[#6d5d33]" />
                <span class="font-sans text-sm font-bold tracking-widest text-[#6d5d33] uppercase">
                  AMS Patrimoine
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA Banner ─── -->
    <section class="bg-[#081a3e] py-28">
      <div class="container mx-auto px-6 text-center md:px-12">
        <span class="mb-4 block font-sans text-xs font-semibold tracking-[0.2em] text-[#7483ad] uppercase">
          Premier entretien offert
        </span>
        <h2
          class="mx-auto mb-8 max-w-3xl font-serif text-4xl leading-tight text-white md:text-5xl"
          style="letter-spacing: -0.02em"
        >
          Parlons de votre situation patrimoniale
        </h2>
        <p class="mx-auto mb-12 max-w-xl text-lg leading-relaxed font-light text-[#7483ad]">
          Un rendez-vous sans engagement pour identifier les leviers d'optimisation adaptés à votre profil.
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
