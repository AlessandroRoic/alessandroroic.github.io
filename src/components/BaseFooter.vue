<template>
  <footer class="text-center mt-4">
    <SocialMedias :is-footer="true"></SocialMedias>
    <div class="mt-1">© 2020 - Present Alessandro Roic. All Rights Reserved.</div>
  </footer>
</template>

<script>
import SocialMedias from '@/components/SocialMedias';

export default {
  name: 'BaseFooter',
  components: { SocialMedias },
};
</script>
