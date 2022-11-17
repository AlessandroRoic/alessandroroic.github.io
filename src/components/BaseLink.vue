<template>
  <a :href="href" :class="`base-link ${showUnderline ? 'base-link--underline' : ''}`" @click="$emit('click')">
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  showUnderline: {
    type: Boolean,
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

  &--underline {
    text-decoration: underline variables.$tart-orange;
  }
}
</style>
