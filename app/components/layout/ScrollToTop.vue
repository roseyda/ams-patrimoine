<script setup lang="ts">
  const { y } = useWindowScroll({ behavior: 'smooth' });

  const isVisible = computed(() => y.value > 400);

  function scrollToTop(): void {
    y.value = 0;
  }
</script>

<template>
  <BaseFadeTransition>
    <div v-if="isVisible">
      <UButton
        icon="i-lucide-arrow-up"
        color="primary"
        size="xl"
        aria-label="Revenir en haut de page"
        class="fixed right-10 bottom-10 z-50 rounded-full shadow-lg"
        @click="scrollToTop"
      />
    </div>
  </BaseFadeTransition>
</template>
