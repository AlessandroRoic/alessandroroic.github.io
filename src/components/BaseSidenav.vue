<template>
  <div class="sidenav" v-if="getSideNavOpened">
    <div @click="toggleSidenav()"></div>
    <div class="sidenav__menu">
      <div class="sidenav__links">
        <BaseLink @click="toggleSidenav()" class="sidenav__link" href="#about">ABOUT</BaseLink>
        <BaseLink @click="toggleSidenav()" class="sidenav__link" href="#work">WORK</BaseLink>
        <BaseLink @click="toggleSidenav()" class="sidenav__link" href="#projects">PROJECTS</BaseLink>
      </div>
      <div>
        <SocialMedias />
      </div>
    </div>
  </div>
</template>

<script>
import { UI_MUTATIONS } from '@/store/ui/ui-mutations.enum';
import { mapGetters, mapMutations } from 'vuex';
import SocialMedias from '@/components/SocialMedias';
import BaseLink from '@/components/BaseLink';

export default {
  name: 'BaseSidenav',
  components: { BaseLink, SocialMedias },
  computed: {
    ...mapGetters('ui', ['getSideNavOpened']),
  },
  methods: {
    ...mapMutations('ui', [UI_MUTATIONS.TOGGLE_SIDENAV]),
  },
};
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/lib/layout';

.sidenav {
  display: grid;
  grid-template-columns: 60% 40%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: map-get(variables.$z-index, sidenav);
  background: rgba(0, 0, 0, 0.5);

  &__menu {
    background: variables.$jet;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 88% 12%;
  }

  &__links {
    display: grid;
    grid-template-columns: fit-content(1fr);
    justify-content: center;
    align-content: center;
    gap: 1rem;
  }

  &__link {
    font-size: 1.2rem;
  }
}
</style>
