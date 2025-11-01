import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Minimal Vite config for this landing page
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
