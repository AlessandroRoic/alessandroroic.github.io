import { ScrollDirection } from '@/enums/scroll-direction.enum';
import { UI_MUTATIONS } from '@/store/ui/ui-mutations.enum';

export const ui = {
  namespaced: true,
  state: () => ({
    sideNavOpened: false,
    pageScroll: {
      scrolled: false,
      direction: ScrollDirection.DOWN,
    },
  }),
  mutations: {
    [UI_MUTATIONS.SET_PAGE_SCROLL](state, payload) {
      state.pageScroll = payload;
    },
    [UI_MUTATIONS.TOGGLE_SIDENAV](state, payload) {
      state.sideNavOpened = payload;
    },
  },
  getters: {
    getPageScrolled(state) {
      return state.pageScroll.scrolled;
    },
    getPageScroll(state) {
      return state.pageScroll;
    },
    getSideNavOpened(state) {
      return state.sideNavOpened;
    },
  },
};
