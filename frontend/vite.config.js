// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: 'https://JonathanADB.github.io/Soft-Park/', // URL de tu repositorio
  build: {
    outDir: 'dist' // Directorio de salida
  }
});
