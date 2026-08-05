<template>
  <BaseNavbar />
  <BaseSidenav />
  <HomePage />
  <BaseFooter />
</template>

<script setup>
import HomePage from "./views/HomePage.vue";
import BaseNavbar from "./components/BaseNavbar.vue";
import BaseFooter from "./components/BaseFooter.vue";
import BaseSidenav from "./components/BaseSidenav.vue";
</script>
