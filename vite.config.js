import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import purgeCss from 'vite-plugin-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    purgeCss({
      content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
      ],
      defaultExtractor: content => content.match(/[\w-/:@]+(?<!:)/g) || [],
    }),
  ],
});