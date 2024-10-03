import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      host: '0.0.0.0',
      port: 3000,
      watch: {
        usePolling: true
      }
  },
  define: {
    'process.env': process.env
  }
})
