<script setup lang="ts">
  const { y } = useWindowScroll({ behavior: 'smooth' });

  const isVisible = computed<boolean>(() => y.value > 400);

  function scrollToTop(): void {
    y.value = 0;
  }
</script>

<template>
  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="-translate-y-6 opacity-0"
    leave-active-class="transition duration-300"
    leave-to-class="-translate-y-6 opacity-0"
    mode="out-in"
  >
    <div v-if="isVisible" class="fixed right-10 bottom-10 z-50">
      <UButton
        icon="i-lucide-arrow-up"
        size="xl"
        aria-label="Revenir en haut de page"
        class="border-sand-400 cursor-pointer rounded-full border shadow-xl"
        @click="scrollToTop"
      />
    </div>
  </Transition>
</template>
