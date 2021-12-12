<template>
  <main class="homepage">
    <BaseSection id="info">
      <svg viewBox="0 0 169 60" aria-label="welcome card" class="section__welcome">
        <use href="../assets/icons/icons.svg#welcome-card"></use>
      </svg>
    </BaseSection>
  </main>
</template>

<script>
import BaseSection from '@/components/BaseSection';

export default {
  name: 'HomePage',
  components: {
    BaseSection,
  },
};
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/layout';

.homepage {
  @include layout.container();
}

.section {
  &__welcome {
    font-size: 0.84rem;
  }

  &__side-photo {
    @include mixins.scaleHeight(257px);
    @include mixins.scaleWidth(230px);
    border: 2px solid variables.$jet;
    box-shadow: variables.$tart-orange-shadow;
    border-radius: variables.$card-border-radius;
  }

  &__pill {
    font-weight: bold;
    border-radius: variables.$card-border-radius;
    background: variables.$cultured;
    color: variables.$eerie-black-2;
    margin-bottom: 10px;
    padding: 5px 8px 5px 8px;
    box-shadow: variables.$tart-orange-shadow;
    border: 2px solid variables.$eerie-black-2;
  }
}
</style>
