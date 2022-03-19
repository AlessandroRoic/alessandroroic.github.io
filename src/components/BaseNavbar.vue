<template>
  <nav
    class="navbar"
    id="navbar"
    :class="{
      'navbar--scrolled': isPageScrolled,
      'navbar--scrolled-up': isClosed,
    }"
  >
    <svg class="navbar__logo" @click="reloadPage()" aria-label="site logo">
      <use href="~@/assets/icons/icons.svg#site-logo"></use>
    </svg>

    <svg v-if="isMobile" @click="toggleSidenav()" class="navbar__menu" aria-label="menu button">
      <use href="~@/assets/icons/icons.svg#menu-right"></use>
    </svg>

    <div v-else>
      <BaseLink href="#about" @click="closeNavbar()">ABOUT</BaseLink>
      <BaseLink href="#work" @click="closeNavbar()">WORK</BaseLink>
      <BaseLink href="#projects" @click="closeNavbar()">PROJECTS</BaseLink>
      <BaseLink href="#contacts" @click="closeNavbar()">CONTACTS</BaseLink>
    </div>
  </nav>
</template>

<script setup>
import { reloadPage } from '@/helpers/utils';
import { ScrollDirection } from '@/enums/scroll-direction.enum';
import BaseLink from '@/components/BaseLink';
import { breakpoints } from '@/helpers/breakpoints';
import { computed, ref, watch } from 'vue';
import { useCScroll } from '@/composables/ScrollComposable';
import { useUiStore } from '@/store/UIStore';
import { useScroll } from '@vueuse/core/index';

const uiStore = useUiStore();
const { toggleSidenav } = uiStore;

const isMobile = breakpoints.smaller('mobile-l');

const { isScrolled, direction } = useCScroll();
const isPageScrolled = computed(() => !direction.value || isScrolled.value);
const isClosed = computed(() => direction.value === ScrollDirection.DOWN);

const isLinkClicked = ref(false);
const { isScrolling } = useScroll(window);
const closeNavbar = () => {
  isLinkClicked.value = true;
};
watch(isScrolling, (newValue, oldValue) => {
  if (isLinkClicked.value && !newValue && oldValue) {
    direction.value = ScrollDirection.DOWN;
    isLinkClicked.value = false;
  }
});
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
  transition: transform 0.3s;

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
