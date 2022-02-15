<template>
  <section :id="id">
    <article class="section__wrapper">
      <div class="section__content">
        <slot></slot>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'BaseSection',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/lib/layout';

.section {
  &__wrapper {
    box-shadow: variables.$card-shadow;
  }

  &__content {
    padding: 20px;
    border: 5px solid variables.$tart-orange;
    box-shadow: 0 0 0 5px variables.$jet;
    border-radius: variables.$card-border-radius;
  }
}
</style>
