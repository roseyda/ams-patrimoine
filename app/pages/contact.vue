<script setup lang="ts">
  interface ContactForm {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    consent: boolean;
  }

  const subjects = ['Gestion Privée', 'Investissement Immobilier', 'Optimisation Fiscale', 'Transmission', 'Autre'];

  const form = reactive<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: 'Gestion Privée',
    message: '',
    consent: false,
  });

  const heroReady = ref(false);
  const formVisible = useReveal(useTemplateRef('formRef'));
  const mapVisible = useReveal(useTemplateRef('mapRef'));

  onMounted(() => setTimeout(() => (heroReady.value = true), 80));

  useHead({
    title: 'Contact — AMS Patrimoine',
    meta: [
      {
        name: 'description',
        content:
          'Un accompagnement sur mesure commence par une écoute attentive. Rencontrons-nous pour définir vos objectifs de demain.',
      },
    ],
  });
</script>

<template>
  <div class="bg-[#fafaf4] text-[#1a1c19]">
    <!-- ─── Hero Header ─── -->
    <section class="container mx-auto px-6 pt-36 pb-20 md:px-12">
      <div class="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div class="max-w-3xl">
          <span
            class="mb-4 block font-sans text-xs font-semibold tracking-[0.2em] text-[#6d5d33] uppercase transition-all duration-700 ease-out"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Entrer en relation
          </span>
          <h1
            class="font-serif text-5xl leading-tight font-bold tracking-tight text-[#081a3e] transition-all duration-700 ease-out md:text-7xl"
            style="transition-delay: 150ms"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Concrétisons votre <br />
            <span class="font-normal italic">vision patrimoniale.</span>
          </h1>
        </div>
        <div
          class="transition-all duration-700 ease-out md:pb-4"
          style="transition-delay: 300ms"
          :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        >
          <p class="max-w-sm leading-relaxed text-[#45464e]">
            Un accompagnement sur mesure commence par une écoute attentive. Rencontrons-nous pour définir vos objectifs
            de demain.
          </p>
        </div>
      </div>
    </section>

    <!-- ─── Contact Layout ─── -->
    <section ref="formRef" class="container mx-auto grid grid-cols-1 gap-16 px-6 pb-24 md:px-12 lg:grid-cols-12">
      <!-- Contact info + image -->
      <div
        class="space-y-12 transition-all duration-700 ease-out lg:col-span-5"
        :class="formVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <div class="group relative">
          <div class="aspect-[4/5] overflow-hidden rounded-sm">
            <NuxtImg
              src="/images/contact/office.jpg"
              alt="Bureau exécutif minimaliste — AMS Patrimoine"
              class="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="absolute -right-10 -bottom-10 hidden border-l-4 border-[#6d5d33] bg-white p-10 lg:block">
            <h3 class="mb-2 font-serif text-2xl font-bold text-[#081a3e]">Disponibilité</h3>
            <p class="text-sm leading-loose text-[#45464e]">
              Du Lundi au Vendredi<br />
              09:00 — 19:00<br />
              Uniquement sur rendez-vous
            </p>
          </div>
        </div>

        <div class="space-y-8 pt-8">
          <div>
            <p class="mb-3 font-sans text-[10px] tracking-widest text-[#75777f] uppercase">Email Direct</p>
            <a
              href="mailto:contact@amspatrimoine.fr"
              class="font-serif text-2xl text-[#081a3e] transition-colors duration-300 hover:text-[#6d5d33]"
            >
              contact@amspatrimoine.fr
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <p class="mb-3 font-sans text-[10px] tracking-widest text-[#75777f] uppercase">Confidentialité</p>
              <p class="text-sm leading-relaxed text-[#45464e]">
                Vos données sont traitées avec la plus haute rigueur déontologique.
              </p>
            </div>
            <div>
              <p class="mb-3 font-sans text-[10px] tracking-widest text-[#75777f] uppercase">Expertise</p>
              <p class="text-sm leading-relaxed text-[#45464e]">Réponse personnalisée sous 48 heures ouvrées.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div
        class="rounded-sm bg-[#f4f4ef] p-8 transition-all duration-700 ease-out md:p-16 lg:col-span-7"
        style="transition-delay: 200ms"
        :class="formVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <form class="space-y-10" @submit.prevent>
          <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <label class="mb-2 block font-sans text-[10px] tracking-widest text-[#45464e] uppercase">
                Nom Complet
              </label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Jean-Baptiste Lully"
                class="w-full border-b border-[#c5c6cf]/30 bg-transparent px-0 py-3 font-sans text-[#000000] placeholder-[#c5c6cf]/50 transition-colors focus:border-[#6d5d33] focus:outline-none"
              />
            </div>
            <div>
              <label class="mb-2 block font-sans text-[10px] tracking-widest text-[#45464e] uppercase"> Email </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="lully@patrimoine.fr"
                class="w-full border-b border-[#c5c6cf]/30 bg-transparent px-0 py-3 font-sans text-[#000000] placeholder-[#c5c6cf]/50 transition-colors focus:border-[#6d5d33] focus:outline-none"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <label class="mb-2 block font-sans text-[10px] tracking-widest text-[#45464e] uppercase">
                Téléphone
              </label>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+33 0 00 00 00 00"
                class="w-full border-b border-[#c5c6cf]/30 bg-transparent px-0 py-3 font-sans text-[#000000] placeholder-[#c5c6cf]/50 transition-colors focus:border-[#6d5d33] focus:outline-none"
              />
            </div>
            <div>
              <label class="mb-2 block font-sans text-[10px] tracking-widest text-[#45464e] uppercase"> Objet </label>
              <select
                v-model="form.subject"
                class="w-full border-b border-[#c5c6cf]/30 bg-transparent px-0 py-3 font-sans text-[#000000] transition-colors focus:border-[#6d5d33] focus:outline-none"
              >
                <option v-for="s in subjects" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>
          </div>

          <div>
            <label class="mb-2 block font-sans text-[10px] tracking-widest text-[#45464e] uppercase">
              Votre Message
            </label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Décrivez brièvement votre situation..."
              class="w-full resize-none border-b border-[#c5c6cf]/30 bg-transparent px-0 py-3 font-sans text-[#000000] placeholder-[#c5c6cf]/50 transition-colors focus:border-[#6d5d33] focus:outline-none"
            ></textarea>
          </div>

          <div class="flex items-start gap-4">
            <input
              id="consent"
              v-model="form.consent"
              type="checkbox"
              class="mt-1 rounded-none border-[#c5c6cf] text-[#081a3e] focus:ring-[#6d5d33]"
            />
            <label for="consent" class="text-xs leading-relaxed text-[#45464e]">
              J'accepte que les informations saisies soient utilisées pour permettre de me recontacter dans le cadre de
              ma demande.
            </label>
          </div>

          <div class="pt-6">
            <button
              type="submit"
              class="group flex items-center gap-4 rounded-sm bg-[#081a3e] px-10 py-5 transition-opacity hover:opacity-90"
            >
              <span class="font-sans text-xs tracking-widest text-white uppercase">Envoyer la demande</span>
              <UIcon
                name="i-lucide-arrow-right"
                class="text-sm text-white transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- ─── Location Section ─── -->
    <section ref="mapRef" class="relative h-[500px] w-full overflow-hidden bg-[#e8e8e3]">
      <div class="absolute inset-0 opacity-60" style="filter: grayscale(100%)">
        <NuxtImg
          src="/images/contact/map-bg.jpg"
          alt="Façade de verre — Cabinet AMS Patrimoine"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div class="absolute inset-0 flex items-center justify-center">
        <div
          class="max-w-md border border-white/20 bg-[#fafaf4]/90 p-12 text-center shadow-2xl backdrop-blur-md transition-all duration-700 ease-out"
          :class="mapVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <UIcon name="i-lucide-map-pin" class="mb-4 text-4xl text-[#6d5d33]" />
          <h3 class="mb-4 font-serif text-2xl font-bold text-[#1a1c19]">Un Cabinet à votre écoute</h3>
          <p class="mb-6 text-sm leading-relaxed text-[#45464e]">
            Nous vous recevons au sein de nos bureaux confidentiels pour une étude approfondie de votre situation.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-widest text-[#000000] uppercase"
          >
            Prendre rendez-vous
            <UIcon name="i-lucide-external-link" class="text-xs" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
