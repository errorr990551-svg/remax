import React from 'react';

// React.lazy wrapper with a preload() hook. main.jsx preloads the page for the current URL
// before the first render, so the pre-rendered HTML is never swapped for a Suspense fallback.
export function lazyPage(load) {
  let Loaded = null;
  const preload = () => load().then((mod) => {
    Loaded = mod.default;
    return mod;
  });
  const LazyPage = React.lazy(preload);
  const Page = (props) => (Loaded ? <Loaded {...props} /> : <LazyPage {...props} />);
  Page.preload = preload;
  return Page;
}
