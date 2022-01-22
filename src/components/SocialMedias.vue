<template>
  <div v-bind:class="{ 'g-0': !isFooter }" class="social-medias">
    <div v-bind:class="isFooter ? 'col-auto' : 'col-6 desktop:col-3 mb-1'">
      <button @click="openSite('github.com/AlessandroRoic')" aria-label="github" class="social-medias__button" type="button">
        <svg class="social-medias__icon">
          <use href="~@/assets/icons/icons.svg#github"></use>
        </svg>
      </button>
    </div>

    <div v-bind:class="isFooter ? 'col-auto' : 'col-6 desktop:col-3 mb-1'">
      <button @click="openSite('linkedin.com/in/alessandroroic')" aria-label="linkedin" class="social-medias__button" type="button">
        <svg class="social-medias__icon">
          <use href="~@/assets/icons/icons.svg#linkedin"></use>
        </svg>
      </button>
    </div>

    <div v-bind:class="isFooter ? 'col-auto' : 'col-6 desktop:col-3 mb-1'">
      <button @click="downloadCv()" aria-label="cv" class="social-medias__button" type="button">
        <svg class="social-medias__icon">
          <use href="~@/assets/icons/icons.svg#cv"></use>
        </svg>
      </button>
    </div>

    <div v-bind:class="isFooter ? 'col-auto' : 'col-6 desktop:col-3 mb-1'">
      <a href="mailto:alessandro.roic@gmail.com" aria-label="email" class="social-medias__button">
        <svg class="social-medias__icon">
          <use href="~@/assets/icons/icons.svg#email"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { downloadCv, openSite } from '@/helpers/utils';

export default {
  name: 'SocialMedias',
  props: {
    isFooter: null,
  },
  methods: {
    openSite,
    downloadCv,
  },
};
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/lib/layout';
@use '../styles/lib/positioning';

.social-medias {
  @include layout.row();
  @include positioning.centered();

  &__icon {
    @include mixins.scaleSvg(32px);
    fill: variables.$cultured;
    color: variables.$cultured;

    &:hover {
      fill: variables.$tart-orange;
      color: variables.$tart-orange;
    }
  }

  &__button {
    border: none;
    background: none;
  }
}
</style>
