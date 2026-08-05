<template>
  <BaseSection id="work" data-observable>
    <h2 class="text-tart-orange">Work & Education</h2>
    <SwipeCard
      v-slot="{ index }"
      :card-number="4"
      style-class="work__cards"
      class-to-animate="card__content"
    >
      <BaseCard v-if="index === 0" :is-swipe="true">
        <template #content>
          <h2 class="text-tart-orange">{{ workExperience[0].company }}</h2>
          <h3>{{ workExperience[0].role }}</h3>
          <p class="mt-1">{{ workExperience[0].period }}</p>
          <ul>
            <li v-for="task in workExperience[0].tasks" :key="task">
              <span>{{ task }}</span>
            </li>
          </ul>
        </template>
      </BaseCard>
      <BaseCard v-if="index === 1" :is-swipe="true">
        <template #content>
          <h2 class="text-tart-orange">{{ workExperience[1].company }}</h2>
          <h3>{{ workExperience[1].role }}</h3>
          <p class="mt-1">{{ workExperience[1].period }}</p>
          <ul>
            <li v-for="task in workExperience[1].tasks" :key="task">
              <span>{{ task }}</span>
            </li>
          </ul>
        </template>
      </BaseCard>
      <BaseCard v-if="index === 2" :is-swipe="true">
        <template #content>
          <h2 class="text-tart-orange">{{ workExperience[2].company }}</h2>
          <h3>{{ workExperience[2].role }}</h3>
          <p class="mt-1">{{ workExperience[2].period }}</p>
          <ul>
            <li v-for="task in workExperience[2].tasks" :key="task">
              <span>{{ task }}</span>
            </li>
          </ul>
        </template>
      </BaseCard>
      <BaseCard v-if="index === 3" :is-swipe="true">
        <template #content>
          <h2 class="text-tart-orange">{{ workExperience[3].university }}</h2>
          <h3>{{ workExperience[3].degree }}</h3>
          <h4>{{ workExperience[3].university }}</h4>
          <p class="mt-1">{{ workExperience[3].period }}</p>
          <ul>
            <li
              v-for="project in workExperience[3].projects"
              :key="project.name"
            >
              <span class="text-tart-orange"
                ><b>{{ project.name }}</b></span
              >: {{ project.description }}
            </li>
          </ul>
        </template>
      </BaseCard>
      <BaseCard v-if="index === 4" :is-swipe="true">
        <template #content>
          <h2 class="text-tart-orange">Certifications</h2>
          <ul>
            <li
              v-for="certification in workExperience[4].certifications"
              :key="certification.name"
            >
              <BaseLink :href="certification.link" :show-underline="true">
                <b>{{ certification.name }}</b>
              </BaseLink>
            </li>
          </ul>
        </template>
      </BaseCard>
    </SwipeCard>
  </BaseSection>
</template>

<script setup>
import BaseSection from "../BaseSection.vue";
import BaseCard from "../BaseCard.vue";
import SwipeCard from "../SwipeCard.vue";
import BaseLink from "../BaseLink.vue";
import { workExperience } from "../../data/work-experience";
</script>

<style scoped lang="scss">
@use "../../styles/lib/breakpoint";

.work {
  &__cards {
    @include breakpoint.show-for(mobile-s) {
      height: 1250px;
    }
    @include breakpoint.show-for(mobile-m) {
      height: 1050px;
    }
    @include breakpoint.show-for(mobile-l) {
      height: 880px;
    }
    @include breakpoint.show-for(tablet) {
      height: 550px;
    }
    @include breakpoint.show-for-range(desktop, desktop-l) {
      height: 470px;
    }
  }
}
</style>
