<template>
  <div class="side-nav container-fluid d-flex flex-column p-0" v-if="getSideNavOpened">
    <div class="row vh-100 m-0">
      <div class="col-7 col-md-10 col-lg-9 col-xl-10" @click="closeSideNav()"></div>

      <div class="menu col-5 col-md-2 col-lg-3 col-xl-2">
        <div class="d-flex flex-column h-100">
          <div class="row mt-4">
            <div class="col-2">
              <div @click="closeSideNav()">
                <svg class="menu__close-button">
                  <use href="assets/icons/icons.svg#close-sidenav"></use>
                </svg>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-12 text-center">
              <div>
                <div class="mb-3"><a @click="closeSideNav()" class="menu__text" href="#about">ABOUT</a></div>
                <div class="mb-3"><a @click="closeSideNav()" class="menu__text" href="#work">WORK</a></div>
                <div class="mb-3"><a @click="closeSideNav()" class="menu__text" href="#projects">PROJECTS</a></div>
              </div>
            </div>
          </div>

          <div class="row flex-grow-1 align-items-end">
            <div class="col-12">
              <SocialMedias></SocialMedias>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedias from '@/components/SocialMedias';
import { UI_MUTATIONS } from '@/store/ui/ui-mutations.enum';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'BaseSidenav',
  components: { SocialMedias },
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
@import '../styles/variables';
@import '../styles/mixins';

.side-nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);

  .menu {
    background: $jet;

    &__text {
      color: $cultured;
      font-weight: bold;
      font-size: 1.2rem;
      text-decoration: underline;
      text-decoration-color: $tart-orange;

      &:hover {
        color: $tart-orange;
        text-decoration-color: $cultured;
      }
    }

    &__close-button {
      @include scaleSvg(32px);
      color: $cultured;

      &:hover {
        color: $tart-orange;
      }
    }
  }
}
</style>
