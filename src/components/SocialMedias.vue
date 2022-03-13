<template>
  <div v-bind:class="isFooter ? 'social-medias--footer' : 'social-medias'">
    <button @click="openSite('github.com/AlessandroRoic')" aria-label="github">
      <svg class="social-medias__icon">
        <use href="~@/assets/icons/icons.svg#github"></use>
      </svg>
    </button>

    <button @click="openSite('linkedin.com/in/alessandroroic')" aria-label="linkedin">
      <svg class="social-medias__icon">
        <use href="~@/assets/icons/icons.svg#linkedin"></use>
      </svg>
    </button>

    <button @click="downloadCv()" aria-label="cv">
      <svg class="social-medias__icon">
        <use href="~@/assets/icons/icons.svg#cv"></use>
      </svg>
    </button>

    <a class="social-medias__icon-wrapper" href="mailto:alessandro.roic@gmail.com" target="_blank" aria-label="email">
      <svg class="social-medias__icon">
        <use href="~@/assets/icons/icons.svg#email"></use>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { downloadCv, openSite } from '@/helpers/utils';
defineProps(['isFooter']);
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/lib/layout';
@use '../styles/lib/positioning';

.social-medias {
  display: grid;
  grid-template-columns: repeat(2, fit-content(50%));
  align-content: center;
  justify-content: center;
  gap: 1rem 1rem;

  &--footer {
    display: grid;
    grid-template-columns: repeat(4, fit-content(25%));
    align-content: center;
    justify-content: center;
  }

  &__icon-wrapper {
    align-self: center;
    justify-self: center;
  }

  &__icon {
    @include mixins.scaleSvg(32px);
    fill: variables.$cultured;
    color: variables.$cultured;

    &:hover {
      fill: variables.$tart-orange;
      color: variables.$tart-orange;
    }
  }
}
</style>
