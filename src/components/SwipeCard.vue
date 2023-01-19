<template>
  <div class="swipe" ref="swipeWrapper" @wheel.prevent="manageSwipe($event)" :class="styleClass">
    <div class="swipe__bullet-wrapper">
      <button
        v-for="bullet in cardNumber"
        :key="bullet"
        @click="index = bullet - 1"
        :aria-label="`open card ${bullet}`"
        :class="{ 'swipe__bullet--selected': index === bullet - 1 }"
        class="swipe__bullet"
      ></button>
    </div>
    <div ref="contentWrapper" class="swipe__content">
      <slot :index="index"></slot>
    </div>
  </div>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { SwipeDirection, useSwipe } from '@vueuse/core';
import { breakpoints } from '@/helpers/breakpoints';
import anime from 'animejs';

const props = defineProps({
  cardNumber: {
    type: Number,
    required: true,
  },
  styleClass: {
    type: String,
    required: true,
  },
  classToAnimate: {
    type: String,
  },
});

const index = ref(0);
const previousIndex = ref(0);
const swipeWrapper = ref(null);
const contentWrapper = ref(null);
const isMobile = breakpoints.smaller('tablet');
const observer = new MutationObserver(() => {
  const direction = index.value > previousIndex.value ? ['-100%', 0] : ['100%', 0];
  anime({
    targets: `.swipe__content .${props.classToAnimate}`,
    ...(!isMobile.value ? { translateY: direction } : {}),
    ...(isMobile.value ? { translateX: direction } : {}),
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 350,
    direction: 'normal',
  });
});

onMounted(() => {
  observer.observe(contentWrapper.value, {
    subtree: false,
    childList: true,
  });
});

onBeforeUnmount(() => observer.disconnect());

useSwipe(swipeWrapper, {
  onSwipeEnd(event, direction) {
    if (isMobile.value) {
      manageSwipe(event, direction);
    }
  },
});

watch(index, (newValue, oldValue) => (previousIndex.value = oldValue));

const manageSwipe = (event, direction = null) => {
  if (event.deltaY < 0 || direction === SwipeDirection.RIGHT) {
    index.value = index.value - 1 >= 0 ? index.value - 1 : index.value;
  } else if (event.deltaY > 0 || direction === SwipeDirection.LEFT) {
    index.value = index.value + 1 < props.cardNumber ? index.value + 1 : index.value;
  }
};
</script>

<style scoped lang="scss">
@use '~@/styles/variables';
@use '~@/styles/lib/breakpoint';

.swipe {
  position: relative;
  overflow: hidden;
  border-radius: variables.$card-border-radius;
  box-shadow: variables.$black-shadow;

  &__bullet {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: variables.$cultured;
    transition: all 0.3s ease-in-out;

    &-wrapper {
      position: absolute;
      width: 100%;
      top: 15px;
      display: grid;
      grid-auto-flow: column;
      gap: 0 10px;
      z-index: map-get(variables.$z-index, swipeBullet);
      justify-content: center;

      @include breakpoint.show-for(desktop) {
        width: auto;
        height: 100%;
        top: 0;
        right: 15px;
        align-content: center;
        gap: 10px 0;
        grid-auto-flow: initial;
      }
    }

    &--selected {
      width: 24px;
      border-radius: 6px;
      background-color: variables.$tart-orange;
      transition: all 0.3s ease-in-out;

      @include breakpoint.show-for(desktop) {
        width: 12px;
        height: 24px;
        transition: all 0.3s ease-in-out;
      }
    }
  }

  &__content {
    height: 100%;
  }
}
</style>
