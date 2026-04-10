<script setup lang="ts">
  interface ContactForm {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    consent: boolean;
  }

  interface SelectItem {
    label: string;
    value: string;
  }

  const subjectItems: SelectItem[] = [
    { label: 'Gestion Privée', value: 'gestion-privee' },
    { label: 'Investissement Immobilier', value: 'investissement-immobilier' },
    { label: 'Optimisation Fiscale', value: 'optimisation-fiscale' },
    { label: 'Transmission', value: 'transmission' },
    { label: 'Autre', value: 'autre' },
  ];

  const form = reactive<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: 'gestion-privee',
    message: '',
    consent: false,
  });

  const heroReady = useHeroReady();
  const formVisible = useReveal(useTemplateRef('formRef'));
  const mapVisible = useReveal(useTemplateRef('mapRef'));

  useSeoMeta({
    title: 'Contact — AMS Patrimoine',
    description:
      'Un accompagnement sur mesure commence par une écoute attentive. Rencontrons-nous pour définir vos objectifs de demain.',
  });
</script>

<template>
  <div class="bg-sand-100 text-sand-900">
    <!-- ─── Hero Header ─── -->
    <section class="container mx-auto px-6 pt-36 pb-20 md:px-12">
      <div class="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div class="max-w-3xl">
          <span
            class="text-gold-500 mb-4 block font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-700 ease-out"
            :class="heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
          >
            Entrer en relation
          </span>
          <h1
            class="text-navy-500 font-serif text-5xl leading-tight font-bold tracking-tight transition-all duration-700 ease-out md:text-7xl"
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
          <p class="text-sand-700 max-w-sm leading-relaxed">
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
          <div class="aspect-4/5 overflow-hidden rounded-sm">
            <NuxtImg
              src="/images/contact/office.jpg"
              alt="Bureau exécutif minimaliste — AMS Patrimoine"
              class="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="border-gold-500 absolute -right-10 -bottom-10 hidden border-l-4 bg-white p-10 lg:block">
            <h3 class="text-navy-500 mb-2 font-serif text-2xl font-bold">Disponibilité</h3>
            <p class="text-sand-700 text-sm leading-loose">
              Du Lundi au Vendredi<br />
              09:00 — 19:00<br />
              Uniquement sur rendez-vous
            </p>
          </div>
        </div>

        <div class="space-y-8 pt-8">
          <div>
            <p class="text-sand-600 mb-3 font-sans text-[10px] tracking-widest uppercase">Email Direct</p>
            <a
              href="mailto:contact@amspatrimoine.fr"
              class="text-navy-500 hover:text-gold-500 font-serif text-2xl transition-colors duration-300"
            >
              contact@amspatrimoine.fr
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <p class="text-sand-600 mb-3 font-sans text-[10px] tracking-widest uppercase">Confidentialité</p>
              <p class="text-sand-700 text-sm leading-relaxed">
                Vos données sont traitées avec la plus haute rigueur déontologique.
              </p>
            </div>
            <div>
              <p class="text-sand-600 mb-3 font-sans text-[10px] tracking-widest uppercase">Expertise</p>
              <p class="text-sand-700 text-sm leading-relaxed">Réponse personnalisée sous 48 heures ouvrées.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div
        class="bg-sand-200 rounded-sm p-8 transition-all duration-700 ease-out md:p-16 lg:col-span-7"
        style="transition-delay: 200ms"
        :class="formVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <UForm :state="form" class="space-y-10" @submit="() => {}">
          <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
            <UFormField name="name" label="Nom Complet">
              <UInput
                v-model="form.name"
                placeholder="Jean-Baptiste Lully"
                variant="none"
                class="border-sand-500/30 focus-within:border-gold-500 w-full border-b"
              />
            </UFormField>
            <UFormField name="email" label="Email">
              <UInput
                v-model="form.email"
                type="email"
                placeholder="lully@patrimoine.fr"
                variant="none"
                class="border-sand-500/30 focus-within:border-gold-500 w-full border-b"
              />
            </UFormField>
          </div>

          <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
            <UFormField name="phone" label="Téléphone">
              <UInput
                v-model="form.phone"
                type="tel"
                placeholder="+33 0 00 00 00 00"
                variant="none"
                class="border-sand-500/30 focus-within:border-gold-500 w-full border-b"
              />
            </UFormField>
            <UFormField name="subject" label="Objet">
              <USelect
                v-model="form.subject"
                :items="subjectItems"
                variant="none"
                class="border-sand-500/30 focus-within:border-gold-500 w-full border-b"
              />
            </UFormField>
          </div>

          <UFormField name="message" label="Votre Message">
            <UTextarea
              v-model="form.message"
              :rows="4"
              placeholder="Décrivez brièvement votre situation..."
              variant="none"
              class="border-sand-500/30 focus-within:border-gold-500 w-full border-b"
            />
          </UFormField>

          <UCheckbox
            v-model="form.consent"
            label="J'accepte que les informations saisies soient utilisées pour permettre de me recontacter dans le cadre de ma demande."
          />

          <div class="pt-6">
            <UButton type="submit" label="Envoyer la demande" trailing-icon="i-lucide-arrow-right" size="xl" />
          </div>
        </UForm>
      </div>
    </section>

    <!-- ─── Location Section ─── -->
    <section ref="mapRef" class="bg-sand-300 relative h-125 w-full overflow-hidden">
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
          class="bg-sand-100/90 max-w-md border border-white/20 p-12 text-center shadow-2xl backdrop-blur-md transition-all duration-700 ease-out"
          :class="mapVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <UIcon name="i-lucide-map-pin" class="text-gold-500 mb-4 text-4xl" />
          <h3 class="text-sand-900 mb-4 font-serif text-2xl font-bold">Un Cabinet à votre écoute</h3>
          <p class="text-sand-700 mb-6 text-sm leading-relaxed">
            Nous vous recevons au sein de nos bureaux confidentiels pour une étude approfondie de votre situation.
          </p>
          <UButton
            label="Prendre rendez-vous"
            to="/contact"
            variant="link"
            color="neutral"
            trailing-icon="i-lucide-external-link"
          />
        </div>
      </div>
    </section>
  </div>
</template>
