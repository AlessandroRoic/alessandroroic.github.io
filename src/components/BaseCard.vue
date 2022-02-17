<template>
  <div class="card__wrapper">
    <div class="card__logo-wrapper" v-if="$slots.logo">
      <div class="card__logo">
        <slot name="logo"></slot>
      </div>
    </div>
    <div class="row">
      <div class="card__title" v-if="$slots.title">
        <slot name="title" class="card__title"></slot>
      </div>
      <div class="card__title--center" v-if="$slots['title-center']">
        <slot name="title-center"></slot>
      </div>
      <div class="card__content" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="card__link-wrapper" v-if="$slots.link">
      <div class="card__link">
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  methods: {
    slotExists: (slotName) => {
      return !!this.$slots[slotName];
    },
  },
};
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/lib/layout';

.card {
  &__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: variables.$card-border-radius;
    background: variables.$jet;
    color: variables.$cultured;
    padding: 20px;
    border: 2px solid variables.$jet;
    box-shadow: variables.$black-shadow;
  }

  &__logo-wrapper {
    @include layout.row();
    justify-content: center;
  }

  &__logo {
    @include layout.col(auto);
    margin-bottom: 10px;

    ::v-slotted(img),
    ::v-slotted(svg) {
      border-radius: variables.$card-border-radius;
      background: variables.$spanish-grey;
      width: 80px;
      height: 80px;
    }
  }

  &__title {
    @include layout.col(12);
    margin-bottom: 10px;

    &--center {
      @extend .card__title;
      text-align: center;
    }
  }

  &__content {
    @include layout.col(12);
    margin-bottom: 10px;
  }

  &__link-wrapper {
    @include layout.row();
    flex-grow: 1;
    align-content: flex-end;
  }

  &__link {
    @include layout.col(12);
    text-align: center;

    ::v-slotted(button) {
      color: variables.$cultured;
      border: 2px solid variables.$tart-orange;
      border-radius: variables.$card-border-radius;
      background-color: variables.$eerie-black;
      padding: 5px 10px 5px 10px;

      &:hover {
        box-shadow: variables.$black-shadow;
      }

      &:active {
        transform: translateY(4px);
      }
    }
  }
}
</style>
