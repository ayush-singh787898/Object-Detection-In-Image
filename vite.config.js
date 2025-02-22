import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/object-detect-tfjs/',
  build: {chunkSizeWarningLimit:21600,}
})
