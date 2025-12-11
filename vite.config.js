import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Set this to your GitHub repo name, e.g. '/whealth-app/'
  base: '/whealth-app/',
  plugins: [react()],
  server: {
    port: 5173
  }
})
