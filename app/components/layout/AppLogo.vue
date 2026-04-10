<script setup lang="ts">
  defineProps<{
    variant?: 'full' | 'mark';
  }>();
</script>

<template>
  <div class="flex items-center gap-2.5">
    <!-- AMS Monogram mark -->
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 shrink-0">
      <rect width="48" height="48" rx="2" fill="var(--color-primary-500)" />
      <path
        d="M14 34L20.5 16H22.5L29 34H27L25.3 29H17.7L16 34H14ZM18.3 27.2H24.7L21.5 18.2L18.3 27.2Z"
        fill="#FFFFFF"
      />
      <path d="M24 34V16H26.5L31 28L35.5 16H38V34H36V20L31.5 32H30.5L26 20V34H24Z" fill="#FFFFFF" opacity="0.85" />
    </svg>
    <!-- Wordmark -->
    <span v-if="variant !== 'mark'" class="font-serif text-lg leading-tight tracking-tight">
      <span class="text-primary-500 font-semibold">AMS</span>
      <span class="text-primary-500/70"> Patrimoine</span>
    </span>
  </div>
</template>
