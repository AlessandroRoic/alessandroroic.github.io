import { defineStore } from 'pinia/dist/pinia';
import { ref } from 'vue';

export const useUiStore = defineStore('ui', () => {
  const sideNavOpened = ref(false);

  const toggleSidenav = () => {
    sideNavOpened.value = !sideNavOpened.value;
  };

  return {
    sideNavOpened,
    toggleSidenav,
  };
});
