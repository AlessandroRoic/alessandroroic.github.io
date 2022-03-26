import { onBeforeUnmount } from 'vue';

export function useVisible(elements = [{ elementRef: null, functionRef: null }], observerOptions, commonFunction) {
  const wrapperFunction = (entries, observer) => {
    entries.forEach((entry) => {
      const elementIndex = elements.findIndex((element) => element.elementRef.id === entry.target.id);
      if (!entry || !entry.isIntersecting || elements[elementIndex].intersectOnce) return;
      elements[elementIndex].intersectOnce = true;
      if (commonFunction) {
        checkFunction(commonFunction, entry, observer);
      } else {
        checkFunction(elements[elementIndex].functionRef, entry, observer);
      }
    });
  };
  const options = observerOptions
    ? observerOptions
    : {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
  const observer = new IntersectionObserver(wrapperFunction, options);
  elements.forEach((element) => observer.observe(element.elementRef));

  onBeforeUnmount(() => {
    observer.disconnect();
  });

  const checkFunction = (func, entries, observer) => {
    if (func.length === 1) {
      func(entries);
      return;
    }
    if (func.length === 2) {
      func(entries, observer);
      return;
    }
    func();
  };
}
