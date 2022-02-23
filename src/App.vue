<template>
  <BaseNavbar />
  <BaseSidenav />
  <HomePage />
  <BaseFooter isFooter="true" />
</template>

<script>
import HomePage from '@/views/HomePage';
import { scrollMixin } from '@/mixins/ScrollMixin';
import BaseNavbar from '@/components/BaseNavbar';
import BaseFooter from '@/components/BaseFooter';
import BaseSidenav from '@/components/BaseSidenav';
export default {
  name: 'App',
  components: { BaseSidenav, BaseNavbar, HomePage, BaseFooter },
  mixins: [scrollMixin],
};
</script>
