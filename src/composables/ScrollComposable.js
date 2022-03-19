import { ScrollDirection } from '@/enums/scroll-direction.enum';
import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useCScroll(threshold = 100) {
  const isScrolled = ref(false);
  const direction = ref(null);
  let oldScrollY = null;
  let ticking = false;

  onMounted(() => window.addEventListener('scroll', onScroll));
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollDir);
      ticking = true;
    }
  };

  const updateScrollDir = () => {
    const newScrollY = window.top.scrollY || window.pageYOffset;
    if (Math.abs(newScrollY - oldScrollY) < threshold) {
      ticking = false;
      return;
    }
    isScrolled.value = newScrollY > threshold;
    direction.value = checkDirection(newScrollY);
    oldScrollY = newScrollY <= 0 ? 0 : newScrollY;
    ticking = false;
  };

  const checkDirection = (newValue) => {
    if (newValue >= 0 && newValue <= threshold) return null;
    return newValue > oldScrollY ? ScrollDirection.DOWN : ScrollDirection.UP;
  };

  return {
    isScrolled,
    direction,
  };
}
