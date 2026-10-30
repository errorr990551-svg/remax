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
          // Only the React runtime is shared by every page. Icons, axios, emailjs etc. are left to
          // Rollup so they ship with the pages that use them instead of one sitewide vendor file.
          if (/node_modules\/(react|react-dom|scheduler|react-router|react-router-dom)\//.test(id)) {
            return 'vendor-react';
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
