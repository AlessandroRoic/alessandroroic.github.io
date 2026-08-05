<template>
  <BaseSection id="contacts" class="contacts" data-observable>
    <h2 class="text-tart-orange">Get in touch</h2>
    <div class="mt-1 mb-1">
      Whether you have an open full-time position or simply want to connect,
      feel free to reach out. I’m always open to exploring new professional
      opportunities
    </div>
    <div class="text-center">
      <BaseButton>
        <a
          class="reset-link"
          @click="openSite('linkedin.com/in/alessandroroic')"
          aria-label="linkedin"
          >Contact me on Linkedin</a
        >
      </BaseButton>
    </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from "../BaseSection.vue";
import BaseButton from "../BaseButton.vue";
import { openSite } from "../../helpers/utils";
</script>

<style scoped lang="scss">
@use "../../styles/utilities";

.contacts {
  margin-bottom: 20rem;
}
</style>
