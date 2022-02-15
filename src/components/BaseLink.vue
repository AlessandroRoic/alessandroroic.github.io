<template>
  <a v-bind:href="href" class="base-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
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
