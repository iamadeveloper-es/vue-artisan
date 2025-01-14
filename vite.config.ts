import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const isProduction = mode === 'production';
  return {
    plugins: [
      vue({
        template: {
          preprocessOptions: {}
        }
      }),
      svgLoader()
    ],
    css: {
      postcss: {
        plugins: [
          autoprefixer({}) // add options if needed
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: isProduction ? '@import "./src/assets/scss/index.scss";' : '', // Importa variables globales automáticamente
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'VueArtsian',
        // the proper extensions will be added
        fileName: 'vue-artisan',
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
          assetFileNames: 'css/[name].[ext]',
        },
      },
    },
  };
});
