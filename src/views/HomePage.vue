<template>
  <button class="scroll-down" @click="scrollIntoView('about')">
    Scroll down for more <br />
    <svg viewBox="0 0 25 25" aria-label="click to scroll down">
      <use :href="`${icons}#chevron-down`"></use>
    </svg>
  </button>
  <main class="main-container">
    <BaseSection id="info" class="align-self-center">
      <h1 class="mb-0">
        <WelcomeCard />
      </h1>
    </BaseSection>
    <AboutSection />
    <WorkSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<script setup>
import BaseSection from "../components/BaseSection.vue";
import { onMounted } from "vue";
import { scrollIntoView } from "../helpers/utils";
import {
  animateFade,
  fade,
  svgLineFade,
  svgTextFade,
} from "../animations/fade-animations";
import anime from "animejs";
import WelcomeCard from "../components/WelcomeCard.vue";
import useVisible from "../composables/VisibleComposable";
import AboutSection from "../components/home/AboutSection.vue";
import WorkSection from "../components/home/WorkSection.vue";
import ProjectsSection from "../components/home/ProjectsSection.vue";
import ContactSection from "../components/home/ContactSection.vue";
import icons from "../assets/icons/icons.svg";

onMounted(() => {
  useVisible(document.querySelectorAll("[data-observable]"), fadeSection);
  const timeline = anime.timeline();
  timeline
    .add(fade("#info", 400))
    .add(svgTextFade("#welcome-card .letter", 200, 35))
    .add(svgLineFade("#welcome-card line", 200))
    .add(fade(".scroll-down", 400));
});

const fadeSection = (entry) => animateFade(`#${entry.target.id}`, 1000);
</script>

<style scoped lang="scss">
@use "../styles/variables";
@use "../styles/mixins";
@use "../styles/lib/layout";
@use "../styles/lib/spacing";
@use "../styles/lib/breakpoint";
@use "../styles/utilities";

.main-container {
  @include layout.container();
  @include breakpoint.show-for(desktop) {
    max-width: 900px;
  }
  @include layout.width-columns(11);
  @include layout.width-columns(10, tablet);
  @include layout.grid-template(
    repeat(1, minmax(0, 1fr)),
    minmax(100vh, max-content),
    20rem 0
  );
}

.scroll-down {
  color: variables.$cultured;
  position: absolute;
  top: 85vh;
  width: fit-content;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;

  svg {
    @include mixins.scaleSvg(25px);
  }
}

#about,
#work,
#contacts,
#projects {
  opacity: 0;
}
</style>
