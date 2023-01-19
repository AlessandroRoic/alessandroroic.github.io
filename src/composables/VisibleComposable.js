import { onBeforeUnmount } from 'vue';

export default function useVisible(elements, callback, observerOptions) {
  const options = observerOptions
    ? observerOptions
    : {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      };
  const observer = new IntersectionObserver(wrapperFunction, options);
  elements.forEach((element) => observer.observe(element));

  function wrapperFunction(entries, intersectionObserver) {
    entries.forEach((entry) => {
      if (!entry || !entry.isIntersecting) return;
      checkFunction(callback, entry, intersectionObserver);
      intersectionObserver.unobserve(entry.target);
    });
  }

  function checkFunction(func, entry, observer) {
    if (func.length === 1) {
      func(entry);
      return;
    }
    if (func.length === 2) {
      func(entry, observer);
    }
  }

  onBeforeUnmount(() => {
    observer.disconnect();
  });
}
