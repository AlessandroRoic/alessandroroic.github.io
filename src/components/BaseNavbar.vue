<template>
  <nav
    class="navbar"
    id="navbar"
    v-bind:class="{
      'navbar--scrolled': isScrolled,
      'navbar--scrolled-up': getPageScroll.direction === ScrollDirection.DOWN,
    }"
  >
    <svg class="navbar__logo" @click="reloadPage()" aria-label="site logo">
      <use href="~@/assets/icons/icons.svg#site-logo"></use>
    </svg>

    <svg class="navbar__menu" @click="showSideNav()" v-if="isMobile && getSideNavOpened === false" aria-label="menu button">
      <use href="~@/assets/icons/icons.svg#menu-right"></use>
    </svg>

    <div v-else>
      <BaseLink href="#about">ABOUT</BaseLink>
      <BaseLink href="#work">WORK</BaseLink>
      <BaseLink href="#projects">PROJECTS</BaseLink>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { reloadPage } from '@/helpers/utils';
import { UI_MUTATIONS } from '@/store/ui/ui-mutations.enum';
import { ScrollDirection } from '@/enums/scroll-direction.enum';
import BaseLink from '@/components/BaseLink';

export default {
  name: 'BaseNavbar',
  components: { BaseLink },
  data: () => ({
    ScrollDirection,
    mobileScreenWidth: 768,
    windowWidth: window.innerWidth,
  }),
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize');
  },
  computed: {
    ...mapGetters('ui', ['getPageScroll', 'getSideNavOpened']),
    isScrolled() {
      return !this.getPageScroll.direction || this.getPageScroll.scrolled;
    },
    isMobile() {
      return this.windowWidth <= this.mobileScreenWidth;
    },
  },
  methods: {
    ...mapMutations('ui', [UI_MUTATIONS.TOGGLE_SIDENAV]),
    reloadPage,
    showSideNav() {
      // this.TOGGLE_SIDENAV();
    },
  },
};
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/lib/positioning';
@use '../styles/lib/layout';
@use '../styles/lib/breakpoint';

.navbar {
  @include positioning.fixed-top();
  @include layout.row();
  @include breakpoint.show-for(desktop) {
    transition: transform 0.3s;
  }
  align-items: center;
  justify-content: space-between;
  z-index: map-get(variables.$z-index, navbar);
  padding: 10px;
  transition: transform 0.5s;

  &--scrolled {
    box-shadow: 1px 4px 14px 0 rgba(0, 0, 0, 0.69);
    background-color: variables.$eerie-black;
  }

  &--scrolled-up {
    transform: translateY(-100px);
  }

  &__logo {
    @include mixins.scaleSvg(52px);
    font-size: 16px;

    &:hover {
      opacity: 0.75;
    }
  }

  &__menu {
    @include mixins.scaleSvg(42px);
    color: variables.$cultured;

    &:hover {
      color: variables.$tart-orange;
    }
  }
}
</style>
