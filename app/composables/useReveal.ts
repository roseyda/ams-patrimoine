/**
 * Fires once when the target element enters the viewport.
 * Returns a readonly boolean ref that becomes `true` on first intersection.
 *
 * @param target  - Template ref of the element to observe
 * @param threshold - Fraction of element visible before triggering (default 0.12)
 */
export function useReveal(target: Readonly<Ref<HTMLElement | null>>, threshold = 0.12): Readonly<Ref<boolean>> {
  const visible = ref(false);

  useIntersectionObserver(
    target,
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting) visible.value = true;
    },
    { threshold, rootMargin: '0px 0px -40px 0px' }
  );

  return readonly(visible);
}
