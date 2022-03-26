<template>
  <svg id="welcome-card" viewBox="0 0 170 69" aria-labelledby="welcome-title" ref="welcomeCard">
    <title id="welcome-title">Hello, This is Alessandro Roic Front End Developer</title>
    <text x="0" y="15">Hello,</text>
    <text x="0" y="40">This is</text>
    <text x="50" y="40" fill="#F64E4D">Alessandro Roic</text>
    <text x="0" y="65">Front End Developer</text>
    <line x1="50" y1="44" y2="44" stroke="#F64E4D" stroke-width="2" stroke-linecap="round"></line>
  </svg>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const welcomeCard = ref(null);

onMounted(() => {
  const textElements = welcomeCard.value.getElementsByTagName('text');
  for (let i = 0; i < textElements.length; i++) {
    textElements[i].innerHTML = textElements[i].textContent.replace(/\S/g, "<tspan class='letter'>$&</tspan>");
  }
});
</script>

<style scoped lang="scss">
@use '~@/styles/variables';

#welcome-card {
  font-size: 0.84rem;
  font-weight: 500;
  fill: variables.$cultured;
}

.text-underline {
}
</style>
