import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            return 'vendor-other';
          }
          if (id.includes('marketAreaData.js')) {
            return 'data-market-area';
          }
          if (id.includes('exportCitiesData.js')) {
            return 'data-export-cities';
          }
          if (id.includes('cityStrategyData.js')) {
            return 'data-city-strategy';
          }
          if (id.includes('newFlangePagesData.js')) {
            return 'data-flange-pages';
          }
          if (id.includes('sheet4MetaData.js')) {
            return 'data-sheet4-meta';
          }
        }
      }
    }
  }
})
