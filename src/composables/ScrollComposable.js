import { ScrollDirection } from '@/enums/scroll-direction.enum';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useUiStore } from '@/store/UIStore';

export function useScroll() {
  const uiStore = useUiStore();
  const oldValue = ref(null);
  const scrollStartPosition = ref(100);

  onMounted(() => window.addEventListener('scroll', onScroll));
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

  function onScroll(event) {
    const newValue = window.top.scrollY || window.pageYOffset || event.target.documentElement.scrollTop;
    if (newValue === oldValue.value) return;
    const calculatedPageScroll = {
      scrolled: newValue > scrollStartPosition.value,
      direction: checkDirection(newValue),
    };
    oldValue.value = newValue <= 0 ? 0 : newValue;
    if (calculatedPageScroll.scrolled !== uiStore.pageScroll.scrolled || calculatedPageScroll.direction !== uiStore.pageScroll.direction) {
      uiStore.setPageScroll(calculatedPageScroll);
    }
  }

  function checkDirection(newValue) {
    if (newValue >= 0 && newValue <= scrollStartPosition.value) return null;
    return newValue > oldValue.value ? ScrollDirection.DOWN : ScrollDirection.UP;
  }
}
