import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

// exportCitiesData.js (all ~450 export towns, edited daily) is served as one small index plus one
// chunk per country, so a town page downloads only its own country's towns.
const CITIES_FILE = path.resolve('src/assets/data/exportCitiesData.js')
const V = 'virtual:export-cities/'
function exportCitiesSplit() {
  return {
    name: 'export-cities-split',
    resolveId: (id) => (id.startsWith(V) ? '\0' + id : null),
    async load(id) {
      if (!id.startsWith('\0' + V)) return null
      this.addWatchFile(CITIES_FILE)
      const { exportCitiesData: all } = await import(pathToFileURL(CITIES_FILE).href + '?t=' + Date.now())
      const part = id.slice(V.length + 1)
      const countries = [...new Set(Object.keys(all).map((k) => k.split('/')[0]))]
      if (part === 'index') {
        const index = Object.values(all).map(({ city, citySlug, countrySlug, url }) => ({ city, citySlug, countrySlug, url }))
        return `export const exportCityIndex = ${JSON.stringify(index)};`
      }
      if (part === 'loaders') {
        return `export const countryLoaders = {${countries.map((c) => `${JSON.stringify(c)}: () => import(${JSON.stringify(V + 'country/' + c)})`).join(',')}};`
      }
      const c = part.replace(/^country\//, '')
      if (!countries.includes(c)) throw new Error(`export-cities-split: unknown module ${id}`)
      return `export default ${JSON.stringify(Object.fromEntries(Object.entries(all).filter(([k]) => k.split('/')[0] === c)))};`
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), exportCitiesSplit()],
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
