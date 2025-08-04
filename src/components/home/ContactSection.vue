<template>
  <BaseSection id="contacts" class="contacts" data-observable>
    <h2 class="text-tart-orange">Get in touch</h2>
    <div class="mt-1 mb-1">I'm looking for opportunities, so if you're interested in my resume and want to contact me, please do!</div>
    <div class="text-center">
      <BaseButton>
        <a class="reset-link" href="mailto:" target="_blank" aria-label="email">Mail me</a>
      </BaseButton>
    </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from '../BaseSection.vue';
import BaseButton from '../BaseButton.vue';
</script>

<style scoped lang="scss">
@use '../../styles/utilities';

.contacts {
  margin-bottom: 20rem;
}
</style>
