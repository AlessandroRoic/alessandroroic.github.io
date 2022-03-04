<template>
  <div class="card__wrapper">
    <div v-if="$slots.logo" class="card__logo">
      <slot name="logo"></slot>
    </div>
    <div v-if="$slots.title" class="card__content" :class="{ 'text-center': centerText }">
      <slot name="title"></slot>
    </div>
    <div v-if="$slots.content" class="card__content" :class="{ 'text-center': centerText }">
      <slot name="content"></slot>
    </div>
    <div v-if="$slots.link" class="card__link">
      <slot name="link"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps(['centerText']);
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/lib/layout';

.card {
  &__wrapper {
    height: 100%;
    border-radius: variables.$card-border-radius;
    background: variables.$jet;
    color: variables.$cultured;
    padding: 20px;
    border: 2px solid variables.$jet;
    box-shadow: variables.$black-shadow;
  }

  &__logo {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    ::v-slotted(img),
    ::v-slotted(svg) {
      border-radius: variables.$card-border-radius;
      background: variables.$spanish-grey;
      width: 80px;
      height: 80px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__content {
    margin-bottom: 10px;
  }

  &__link {
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
