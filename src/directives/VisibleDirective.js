export const VisibleDirective = {
  mounted(element, binding) {
    if (binding.value) {
      element.intersectionObserver = new IntersectionObserver(binding.value, {
        rootMargin: '0px',
        threshold: 0.5,
      });
      element.intersectionObserver.observe(element);
    }
  },
  beforeUnmount(element) {
    if (element.intersectionObserver) {
      element.intersectionObserver.disconnect();
    }
  },
};
