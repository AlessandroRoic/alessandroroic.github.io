<template>
  <BaseNavbar />
  <BaseSidenav />
  <HomePage />
  <BaseFooter />
</template>

<script setup>
import HomePage from '@/views/HomePage';
import BaseNavbar from '@/components/BaseNavbar';
import BaseFooter from '@/components/BaseFooter';
import BaseSidenav from '@/components/BaseSidenav';
import { useScroll } from '@/composables/ScrollComposable';

useScroll();
</script>
