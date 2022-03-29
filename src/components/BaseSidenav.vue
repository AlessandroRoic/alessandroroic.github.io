<template>
  <transition @enter="openSidenav()">
    <div class="sidenav" v-if="sideNavOpened">
      <div @click="closeSidenav()"></div>
      <div class="sidenav__menu">
        <div class="sidenav__links">
          <BaseLink @click="closeSidenav()" class="sidenav__link" href="#about">ABOUT</BaseLink>
          <BaseLink @click="closeSidenav()" class="sidenav__link" href="#work">WORK</BaseLink>
          <BaseLink @click="closeSidenav()" class="sidenav__link" href="#projects">PROJECTS</BaseLink>
          <BaseLink @click="closeSidenav()" class="sidenav__link" href="#contacts">CONTACTS</BaseLink>
        </div>
        <div>
          <SocialMedias />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import SocialMedias from '@/components/SocialMedias';
import BaseLink from '@/components/BaseLink';
import { useUiStore } from '@/store/UIStore';
import { storeToRefs } from 'pinia/dist/pinia';
import anime from 'animejs';
import { animateSlide } from '@/animations/slide-animations';
import { animateFade } from '@/animations/fade-animations';

const uiStore = useUiStore();
const { sideNavOpened } = storeToRefs(uiStore);
const { toggleSidenav } = uiStore;

const animateBackground = (isClose) =>
  anime({ targets: '.sidenav', background: `rgba(0, 0, 0, ${isClose ? 0 : 0.5})`, duration: 250, easing: 'linear' });

const openSidenav = () => {
  animateBackground();
  const timeline = anime.timeline();
  timeline.add(animateSlide('.sidenav__menu')).add(animateFade('.sidenav__link')).add(animateFade('.social-medias__icon'));
};
const closeSidenav = () => {
  animateBackground(true);
  animateSlide('.sidenav__menu', true, () => toggleSidenav());
};
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/lib/layout';

.sidenav {
  display: grid;
  grid-template-columns: 60% 40%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: map-get(variables.$z-index, sidenav);
  background: rgba(0, 0, 0, 0.5);

  &__menu {
    background: variables.$jet;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 86% 14%;
    transform: translateX(100%);
  }

  &__links {
    display: grid;
    grid-template-columns: fit-content(1fr);
    justify-content: center;
    align-content: center;
    gap: 1rem;
  }

  &__link {
    font-size: 1.2rem;
  }
}
</style>
