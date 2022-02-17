<template>
  <!--  <div @click="closeSideNav()">-->
  <!--    <svg class="sidenav__close-button">-->
  <!--      <use href="~@/assets/icons/icons.svg#close-sidenav"></use>-->
  <!--    </svg>-->
  <!--  </div>-->

  <!--  <div class="mb-1"><a @click="closeSideNav()" class="sidenav____text" href="#about">ABOUT</a></div>-->
  <!--  <div class="mb-1"><a @click="closeSideNav()" class="sidenav____text" href="#work">WORK</a></div>-->
  <!--  <div class="mb-1"><a @click="closeSideNav()" class="sidenav____text" href="#projects">PROJECTS</a></div>-->

  <div class="sidenav" v-if="getSideNavOpened">
    <div>
      <div @click="closeSideNav()"></div>

      <div class="sidenav__menu">
        <svg class="sidenav__close-button">
          <use href="~@/assets/icons/icons.svg#close-sidenav"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { UI_MUTATIONS } from '@/store/ui/ui-mutations.enum';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'BaseSidenav',
  components: {},
  computed: {
    ...mapGetters('ui', ['getSideNavOpened']),
  },
  methods: {
    ...mapMutations('ui', [UI_MUTATIONS.TOGGLE_SIDENAV]),
    closeSideNav() {
      this.TOGGLE_SIDENAV();
    },
  },
};
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/lib/layout';

.sidenav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: map-get(variables.$z-index, sidenav);
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  &__menu {
    background: variables.$jet;
    @include layout.col(3);
  }

  &__text {
    color: variables.$cultured;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: underline;
    text-decoration-color: variables.$tart-orange;

    &:hover {
      color: variables.$tart-orange;
      text-decoration-color: variables.$cultured;
    }
  }

  &__close-button {
    @include mixins.scaleSvg(32px);
    color: variables.$cultured;

    &:hover {
      color: variables.$tart-orange;
    }
  }

  &__social-medias {
    @include layout.row();
    align-items: flex-end;
    flex-grow: 1;
  }
}
</style>
