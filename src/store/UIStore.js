import { defineStore } from 'pinia/dist/pinia';
import { ref } from 'vue';

export const useUiStore = defineStore('ui', () => {
  const sideNavOpened = ref(false);
  const pageScroll = ref({
    scrolled: false,
    direction: null,
  });

  function setPageScroll(payload) {
    this.pageScroll = payload;
  }

  function toggleSidenav() {
    this.sideNavOpened = !this.sideNavOpened;
  }

  return {
    sideNavOpened,
    pageScroll,
    toggleSidenav,
    setPageScroll,
  };
});
