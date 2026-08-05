<template>
  <BaseSection id="about" data-observable>
    <h2 class="text-tart-orange">About Me</h2>
    <div class="about__summary">
      <img
        class="about__side-photo"
        alt="profile"
        :src="profile"
        aria-label="profile picture"
      />
      <div class="m-auto">
        Hi, I'm Alessandro and as you read before in the huge card above I'm a
        Front End Developer. <br />
        <br />
        I have 6+ years of experience building modular and responsive website
        design. Right now my focus is on improving and developing my skills, but
        I'm always interested in trying new stuff out and learning more. I have
        many side-projects and ideas to realize and hopefully they will see the
        light soon, so stay tuned!
        <div class="mt-2 text-center">
          <BaseButton @click="downloadCv()" aria-label="cv"
            >Interested? Get my CV!</BaseButton
          >
        </div>
      </div>
    </div>
    <hr class="mx-2" />
    <h2 class="text-tart-orange">My Skills</h2>
    <div>
      Here some of the languages, frameworks and technologies that I'm using:
    </div>
    <div class="section__pill-wrapper">
      <div v-for="skill in skills" :key="skill" class="section__pill">
        {{ skill }}
      </div>
    </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from "../BaseSection.vue";
import BaseButton from "../BaseButton.vue";
import { downloadCv } from "../../helpers/utils";
import { skills } from "../../data/skills";
import profile from "../../assets/images/profile.webp";
</script>

<style scoped lang="scss">
@use "../../styles/variables";
@use "../../styles/mixins";
@use "../../styles/lib/layout";
@use "../../styles/lib/breakpoint";

.about {
  &__summary {
    @include breakpoint.show-for(desktop) {
      grid-template-columns: auto auto !important;
    }

    @include layout.grid-template(repeat(1, minmax(0, 1fr)), null, 2rem);
  }

  &__side-photo {
    align-self: center;
    width: 100%;
    height: auto;
    border: 2px solid variables.$jet;
    border-radius: variables.$card-border-radius;
    box-shadow: variables.$tart-orange-shadow;
  }
}

.section {
  &__pill {
    font-weight: bold;
    border-radius: variables.$card-border-radius;
    background: variables.$cultured;
    color: variables.$eerie-black-2;
    margin: 10px 12px 10px 0;
    padding: 5px 8px 5px 8px;
    box-shadow: variables.$tart-orange-shadow;
    border: 2px solid variables.$eerie-black-2;

    &-wrapper {
      @include layout.row();
    }

    &:hover {
      cursor: pointer;
      filter: drop-shadow(5px 5px 10px variables.$eerie-black-2);
      transform: scale(1.2);
      transition: transform 0.3s ease-in-out;
    }
  }
}
</style>
