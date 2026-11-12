<template>
  <svg
    id="welcome-card"
    viewBox="0 0 150 69"
    aria-labelledby="welcome-title"
    ref="welcomeCard"
  >
    <title id="welcome-title">
      Hello, I'm Alessandro Roic, Software Engineer.
    </title>
    <g class="hand">
      <use :href="`${icons}#hand`" x="5" y="7.5" width="8" height="8"></use>
    </g>
    <text class="welcome-card__small" x="15" y="15">
      Hello I'm,
    </text>
    <text class="welcome-card__name" x="5" y="40" fill="#F64E4D">
      Alessandro Roic
    </text>
    <text class="welcome-card__role" x="5" y="65">Senior Software Engineer</text>
    <line
      x1="4"
      x2="138"
      y1="43"
      y2="43"
      stroke="#F64E4D"
      stroke-width="2"
      stroke-linecap="round"
    ></line>
  </svg>
</template>

<script setup>
import { onMounted, ref } from "vue";
import icons from "../assets/icons/icons.svg";

const welcomeCard = ref(null);

onMounted(() => {
  const textElements = welcomeCard.value.getElementsByTagName("text");
  for (let i = 0; i < textElements.length; i++) {
    textElements[i].innerHTML = textElements[i].textContent.replace(
      /\S/g,
      "<tspan class='letter'>$&</tspan>"
    );
  }
});
</script>

<style scoped lang="scss">
@use "../styles/variables";

#welcome-card {
  font-weight: 500;
  fill: variables.$cultured;

  .hand {
    transform-origin: 70% 70%;
    transform-box: fill-box;
  }

  .welcome-card__name {
    font-size: 1.1rem;
  }

  .welcome-card__small {
    font-size: 0.5rem;
    font-weight: 400;
  }

  .welcome-card__role {
    font-size: 0.4rem;
    font-weight: 400;
  }
}
</style>
