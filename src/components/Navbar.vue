<template>
  <nav
    class="custom-navbar navbar fixed-top"
    id="navbar"
    [ngClass]="{
    'custom-navbar-scrolled': (scrollPage$ | async)?.scrolled,
    'custom-navbar-scrolled-up': (scrollPage$ | async)?.direction === scrollDirection.UP
  }"
  >
    <svg class="custom-navbar__logo" (click)="reloadPage()" aria-label="site logo">
      <use href="assets/icons/icons.svg#site-logo"></use>
    </svg>

    <svg class="custom-navbar__menu" (click)="showSideNav()" *ngIf="(sideNavOpened$ | async) === false" aria-label="menu button">
      <use [attr.href]="'assets/icons/icons.svg#menu-right'"></use>
    </svg>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.custom-navbar {
  padding: 10px !important;
  transition: transform 0.3s;

  &-scrolled {
    box-shadow: 1px 4px 14px 0 rgba(0, 0, 0, 0.69);
    background-color: $eerie-black;
  }

  &-scrolled-up {
    transform: translateY(-100px);
  }

  &__logo {
    font-size: 16px;
    @include scaleSvg(52px);

    &:hover {
      opacity: 0.75;
    }
  }

  &__menu {
    @include scaleSvg(42px);
    color: $cultured;

    &:hover {
      color: $tart-orange;
    }
  }
}
</style>
