import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react_practice/my-react-app/',
  plugins: [react()],
});