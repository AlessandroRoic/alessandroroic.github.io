<template>
  <HomePage />
  <BackTopArrow />
</template>

<script>
import HomePage from '@/views/HomePage';
import BackTopArrow from '@/components/BackTopArrow';
export default {
  name: 'App',
  components: { BackTopArrow, HomePage },
};
</script>
