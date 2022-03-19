<template>
  <a v-bind:href="href" class="base-link" @click="$emit('click')">
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@use '~@/styles/variables';

.base-link {
  font-size: 1rem;
  color: variables.$cultured;
  margin: 5px 10px;
  text-decoration: none;

  &:hover {
    color: variables.$tart-orange;
    text-decoration: underline variables.$cultured;
  }
}
</style>
