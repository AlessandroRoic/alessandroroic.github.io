<template>
  <svg (click)="goBackTop()" *ngIf="isScrolled$ | async" @item class="arrow" aria-label="back top arrow">
    <use href="assets/icons/icons.svg#arrow-up"></use>
  </svg>
</template>

<script>
export default {
  name: 'BackTopArrow',
};
</script>

<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.arrow {
  @include scaleSvg(50px);
  color: $tart-orange;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: 1rem;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  filter: drop-shadow(0px 0px 6px rgba(17, 20, 23, 0.7));
  z-index: 100;

  &:active {
    transform: translateY(4px);
  }
}
</style>
