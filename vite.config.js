import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import purgeCss from 'vite-plugin-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    purgeCss({
      content: [`./src/**/*.vue`, `./index.html`],
      defaultExtractor: content => {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
      },
      safelist: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /data-v-.*/,
      ],
    }),
  ],
});
