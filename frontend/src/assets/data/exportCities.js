import { countryLoaders } from 'virtual:export-cities/loaders';

// Per-country export town data (split at build time from exportCitiesData.js, see vite.config.js).
const cache = {};
const pending = {};

export const loadExportCountry = (slug) => {
  if (cache[slug] || !countryLoaders[slug]) return Promise.resolve(cache[slug] || {});
  return (pending[slug] ||= countryLoaders[slug]().then((m) => (cache[slug] = m.default)));
};

// Returns the country's towns; while they download, suspends the nearest <Suspense>.
export const getExportCountry = (slug) => {
  if (cache[slug] || !countryLoaders[slug]) return cache[slug] || {};
  throw loadExportCountry(slug);
};
