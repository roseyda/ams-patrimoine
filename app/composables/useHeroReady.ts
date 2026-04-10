/**
 * Returns a boolean ref that becomes `true` ~80ms after mount,
 * giving the browser one paint frame to apply the initial CSS state
 * before triggering the hero entrance animation.
 */
export function useHeroReady(): Readonly<Ref<boolean>> {
  const ready = ref(false);
  onMounted(() => setTimeout(() => (ready.value = true), 80));
  return readonly(ready);
}
