import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.PNG'], // Add PNG files to asset processing
  server: {
    port: 3000, // Specify the desired port
  },
})
