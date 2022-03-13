<template>
  <nav
    class="navbar"
    id="navbar"
    :class="{
      'navbar--scrolled': isScrolled,
      'navbar--scrolled-up': pageScroll.direction === ScrollDirection.DOWN,
    }"
  >
    <svg class="navbar__logo" @click="reloadPage()" aria-label="site logo">
      <use href="~@/assets/icons/icons.svg#site-logo"></use>
    </svg>

    <svg v-if="isMobile" @click="toggleSidenav()" class="navbar__menu" aria-label="menu button">
      <use href="~@/assets/icons/icons.svg#menu-right"></use>
    </svg>

    <div v-else>
      <BaseLink href="#about">ABOUT</BaseLink>
      <BaseLink href="#work">WORK</BaseLink>
      <BaseLink href="#projects">PROJECTS</BaseLink>
      <BaseLink href="#contacts">CONTACTS</BaseLink>
    </div>
  </nav>
</template>

<script setup>
import { reloadPage } from '@/helpers/utils';
import { ScrollDirection } from '@/enums/scroll-direction.enum';
import BaseLink from '@/components/BaseLink';
import { breakpoints } from '@/helpers/breakpoints';
import { computed } from 'vue';
import { useUiStore } from '@/store/UIStore';
import { storeToRefs } from 'pinia/dist/pinia';

const uiStore = useUiStore();
const { toggleSidenav } = uiStore;
const { pageScroll } = storeToRefs(uiStore);
const isMobile = breakpoints.smaller('mobile-l');
const isScrolled = computed(() => !pageScroll.direction || pageScroll.scrolled);
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
