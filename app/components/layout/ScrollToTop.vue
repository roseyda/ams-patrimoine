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
        size="xl"
        aria-label="Revenir en haut de page"
        class="border-sand-400 fixed right-10 bottom-10 z-50 cursor-pointer rounded-full border shadow-xl"
        @click="scrollToTop"
      />
    </div>
  </BaseFadeTransition>
</template>
