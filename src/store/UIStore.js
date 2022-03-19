import { defineStore } from 'pinia/dist/pinia';
import { ref } from 'vue';

export const useUiStore = defineStore('ui', () => {
  const sideNavOpened = ref(false);

  function toggleSidenav() {
    this.sideNavOpened = !this.sideNavOpened;
  }

  return {
    sideNavOpened,
    toggleSidenav,
  };
});
