<template>
  <div class="card__wrapper d-flex flex-column">
    <div class="row justify-content-center">
      <div class="card__logo col-auto">
        <ng-content select="[card-logo]"></ng-content>
      </div>
    </div>
    <div class="row">
      <div class="card__title col-12 text-center">
        <b><ng-content select="[card-title]"></ng-content></b>
      </div>
      <div class="card__content col-12">
        <ng-content select="[card-content]"></ng-content>
      </div>
    </div>
    <div class="row flex-grow-1 align-content-end">
      <div class="card__link col-12 text-center">
        <ng-content select="[card-button]"></ng-content>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
};
</script>

<style scoped lang="scss">
@import '../styles/variables';

.card {
  &__wrapper {
    height: 100%;
    border-radius: $card-border-radius;
    background: $jet;
    color: $cultured;
    padding: 20px;
    border: 2px solid $jet;
    box-shadow: $black-shadow;
  }

  &__logo {
    margin-bottom: 10px;

    img[card-logo],
    svg[card-logo] {
      border-radius: $card-border-radius;
      background: $spanish-grey;
      width: 80px;
      height: 80px;
    }
  }

  &__title {
    margin-bottom: 10px;
  }

  &__content {
    margin-bottom: 10px;
  }

  &__link {
    button[card-button] {
      color: $cultured;
      border: 2px solid $tart-orange;
      border-radius: $card-border-radius;
      background-color: $eerie-black;
      padding: 5px 10px 5px 10px;

      &:hover {
        box-shadow: $black-shadow;
      }

      &:active {
        transform: translateY(4px);
      }
    }
  }
}
</style>
