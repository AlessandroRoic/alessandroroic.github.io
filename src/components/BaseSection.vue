<template>
  <section class="section" :id="id">
    <article class="section__content-wrapper">
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
@use '../styles/layout';

.section {
  @include layout.row();
  align-content: center;
  justify-content: center;
  padding-top: 17vh;
  padding-bottom: 17vh;

  &__content-wrapper {
    @include layout.col(12);
    @include layout.col(10, 'tablet');
    @include layout.col(8, 'desktop');
    @include layout.col(6, 'desktop-m');
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
