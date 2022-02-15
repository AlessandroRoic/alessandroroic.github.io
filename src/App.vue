<template>
  <BaseNavbar />
  <BaseSidenav />
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
import BaseSidenav from '@/components/BaseSidenav';
export default {
  name: 'App',
  components: { BaseSidenav, BaseNavbar, BackTopArrow, HomePage, BaseFooter },
  mixins: [scrollMixin],
};
</script>
