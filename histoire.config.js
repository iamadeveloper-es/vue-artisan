import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';
import { defaultColors } from 'histoire';
// import './src/assets/scss/index.scss';


export default defineConfig({
  theme: {
    colors: {
      gray: defaultColors.slate,
      primary: defaultColors.emerald
    }
  },
  plugins: [
    HstVue(),
  ],
  setupFile: './histoire.setup.js',
});
