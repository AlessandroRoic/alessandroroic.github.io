import { mapGetters, mapMutations } from 'vuex';
import { UI_MUTATIONS } from '@/store/ui/ui-mutations.enum';
import { ScrollDirection } from '@/enums/scroll-direction.enum';

export const scrollMixin = {
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  data: () => ({
    oldValue: null,
    scrollStartPosition: 100,
  }),
  computed: {
    ...mapGetters('ui', ['getPageScroll']),
  },
  methods: {
    ...mapMutations('ui', [UI_MUTATIONS.SET_PAGE_SCROLL]),
    onScroll(event) {
      const newValue = window.top.scrollY || window.pageYOffset || event.target.documentElement.scrollTop;
      if (newValue === this.oldValue) return;
      const calculatedPageScroll = {
        scrolled: newValue > this.scrollStartPosition,
        direction: this.checkDirection(newValue),
      };
      this.oldValue = newValue <= 0 ? 0 : newValue;
      if (
        calculatedPageScroll.scrolled !== this.getPageScroll.scrolled ||
        calculatedPageScroll.direction !== this.getPageScroll.direction
      ) {
        this.SET_PAGE_SCROLL(calculatedPageScroll);
      }
    },
    checkDirection(newValue) {
      if (newValue >= 0 && newValue <= this.scrollStartPosition) return null;
      return newValue > this.oldValue ? ScrollDirection.DOWN : ScrollDirection.UP;
    },
  },
};
