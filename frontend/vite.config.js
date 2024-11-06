import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/Soft-Park/', // Esto es equivalente a publicPath
  build: {
    outDir: 'dist' // Esto es equivalente a outputDir
  },
  plugins: [vue()]
});