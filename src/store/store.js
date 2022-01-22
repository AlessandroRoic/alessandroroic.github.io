import { createStore } from 'vuex';
import { ui } from '@/store/ui/ui-module';

export const store = createStore({
  modules: {
    ui,
  },
});
