import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Food-Delivery-Website1/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.swiggy.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
});