<template>
  <BaseSection id="projects" data-observable>
    <h2 class="text-tart-orange">Projects</h2>
    <div class="projects__cards">
      <BaseCard
        v-for="project in projects"
        :key="project.name"
        :centerText="true"
      >
        <template #logo>
          <svg
            v-if="project.logo.includes('.svg')"
            width="80"
            height="80"
            aria-label="site logo"
          >
            <use :href="project.logo"></use>
          </svg>
          <img v-else :src="project.logo" :alt="`${project.name} logo`" />
        </template>
        <template #title>
          <b>{{ project.name }}</b>
        </template>
        <template #content>{{ project.description }}</template>
        <template #link>
          <BaseButton @click="openSite(project.site)">Check it</BaseButton>
        </template>
      </BaseCard>

      <BaseCard :center-text="true" class="more-to-come">
        <template #content>
          <h3>More to come!</h3>
        </template>
      </BaseCard>
    </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from "../BaseSection.vue";
import BaseCard from "../BaseCard.vue";
import BaseButton from "../BaseButton.vue";
import { openSite } from "../../helpers/utils";
import { projects } from "../../data/projects";
</script>

<style scoped lang="scss">
@use "../../styles/lib/layout";
@use "../../styles/lib/breakpoint";

.projects {
  &__cards {
    @include breakpoint.show-for(desktop) {
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    }

    @include layout.grid-template(repeat(1, minmax(0, 1fr)), null, 1rem);
  }
}

.more-to-come {
  @include breakpoint.show-for(desktop) {
    grid-column: span 2;
    display: grid;
    place-items: center;
  }
}
</style>
