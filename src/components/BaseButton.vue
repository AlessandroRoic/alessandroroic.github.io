<template>
  <button class="base-button" @click="$emit('click')" :type="type" :class="className">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  className: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
@use '../styles/variables';
.base-button {
  color: variables.$cultured;
  border: 2px solid variables.$tart-orange;
  border-radius: variables.$card-border-radius;
  background-color: variables.$eerie-black;
  padding: 10px 15px 10px 15px;

  &:hover {
    background-color: variables.$jet;
    box-shadow: variables.$black-shadow;
  }

  &:active {
    transform: translateY(4px);
  }
}
</style>
