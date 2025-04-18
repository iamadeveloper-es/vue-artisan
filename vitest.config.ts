// vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfigFn from './vite.config';

export default defineConfig(async () => {
  const viteConfig = await viteConfigFn({ mode: 'test' }); // <-- Ejecutamos la función
  return mergeConfig(viteConfig, {
    test: {
      environment: 'jsdom',
      include: ['**/*.{test,spec}.ts?(x)'],
      coverage: {
        provider: 'istanbul'
      }
    }
  });
});
