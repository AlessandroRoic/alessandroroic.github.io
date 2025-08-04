import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        // Add any other global variables your project uses
        // For example, if you use Vue's defineProps, defineEmits, etc.
        // defineProps: "readonly",
        // defineEmits: "readonly",
        // defineExpose: "readonly",
        // withDefaults: "readonly",
      },
    },
  },
  {
    rules: {
      // Override or add custom rules here
      'vue/multi-word-component-names': 'off',
    },
    env: {
      browser: true,
      amd: true,
      node: true,
    },
  },
];
