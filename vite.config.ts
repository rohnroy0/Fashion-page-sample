import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Fashion-page-sample/', // 🔥 Add your GitHub repo name here!
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
