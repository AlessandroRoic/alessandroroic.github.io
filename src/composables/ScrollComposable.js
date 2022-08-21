import { ScrollDirection } from '@/enums/scroll-direction.enum';
import { ref, watch } from 'vue';
import { useScroll } from '@vueuse/core';

export function useCScroll(threshold = 100) {
  const { isScrolling, y } = useScroll(window);
  const isScrolled = ref(false);
  const direction = ref(null);

  watch(y, (newValue, oldValue) => {
    if (newValue >= 0 && newValue <= threshold) {
      direction.value = null;
      isScrolled.value = false;
      return;
    }
    isScrolled.value = true;
    direction.value = newValue > oldValue ? ScrollDirection.DOWN : ScrollDirection.UP;
  });

  return {
    isScrolling,
    isScrolled,
    direction,
  };
}
