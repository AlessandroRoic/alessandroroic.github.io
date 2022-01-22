<template>
  <footer class="footer">
    <div class="col-12">
      <SocialMedias :is-footer="true"></SocialMedias>
      <div class="mt-1/8">© 2020 - Present Alessandro Roic. All Rights Reserved.</div>
    </div>
  </footer>
</template>

<script>
import SocialMedias from '@/components/SocialMedias';
export default {
  name: 'BaseFooter',
  components: { SocialMedias },
};
</script>

<style scoped lang="scss">
@use '../styles/lib/layout';

.footer {
  @include layout.row();
  text-align: center;
}
</style>
