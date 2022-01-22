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
  data: () => ({ oldValue: null }),
  computed: {
    ...mapGetters('ui', ['getPageScroll']),
  },
  methods: {
    ...mapMutations('ui', [UI_MUTATIONS.SET_PAGE_SCROLL]),
    onScroll(event) {
      const newValue = window.top.scrollY || window.pageYOffset || event.target.documentElement.scrollTop;
      if (newValue !== this.oldValue) {
        const calculatedPageScroll = {
          scrolled: newValue > 200,
          direction: newValue > this.oldValue ? ScrollDirection.DOWN : ScrollDirection.UP,
        };
        this.oldValue = newValue <= 0 ? 0 : newValue;
        if (
          calculatedPageScroll.scrolled !== this.getPageScroll.scrolled ||
          calculatedPageScroll.direction !== this.getPageScroll.direction
        ) {
          this.SET_PAGE_SCROLL(calculatedPageScroll);
        }
      }
    },
  },
};
