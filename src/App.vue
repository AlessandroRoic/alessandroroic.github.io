<template>
  <BaseNavbar />
  <HomePage />
  <BackTopArrow />
  <BaseFooter />
</template>

<script>
import HomePage from '@/views/HomePage';
import BackTopArrow from '@/components/BackTopArrow';
import { scrollMixin } from '@/mixins/ScrollMixin';
import BaseNavbar from '@/components/BaseNavbar';
import BaseFooter from '@/components/BaseFooter';
export default {
  name: 'App',
  components: { BaseNavbar, BackTopArrow, HomePage, BaseFooter },
  mixins: [scrollMixin],
};
</script>
