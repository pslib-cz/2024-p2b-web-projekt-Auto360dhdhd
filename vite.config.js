import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'vystavy.html'),
        contact: resolve(__dirname, 'kontakty.html')
      }
    }
  }
});