import { useEffect } from 'react';

const baseUrl = 'https://remaxforge.com';

// SEO tags for the city / state-hub / market-area strategy pages. Lives with those pages (not in
// SEOManager) so the 200 KB cityStrategyData file only loads on the pages that use it.
// Runs after SEOManager's effect and overrides its generic tags.
const useStrategySeo = (pageData) => {
  useEffect(() => {
    if (!pageData) return;

    document.title = pageData.title;

    const setMeta = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) tag.setAttribute('content', content);
      else {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    const setProp = (prop, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (tag) tag.setAttribute('content', content);
      else {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    const setLink = (rel, href, attributes = {}) => {
      if (!href) return;
      const selector = attributes.hreflang ? `link[rel="${rel}"][hreflang="${attributes.hreflang}"]` : `link[rel="${rel}"]`;
      let tag = document.querySelector(selector);
      if (tag) tag.setAttribute('href', href);
      else {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        tag.setAttribute('href', href);
        Object.keys(attributes).forEach(k => tag.setAttribute(k, attributes[k]));
        document.head.appendChild(tag);
      }
    };

    const oldKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (oldKeywordsTag) oldKeywordsTag.remove();

    setMeta('robots', 'index, follow');
    setMeta('description', pageData.meta_desc);
    setLink('canonical', `${baseUrl}${pageData.url}`);
    setLink('alternate', `${baseUrl}${pageData.url}`, { hreflang: 'en' });
    setLink('alternate', `${baseUrl}${pageData.url}`, { hreflang: 'x-default' });

    setProp('og:title', pageData.title);
    setProp('og:description', pageData.meta_desc);
    setProp('og:url', `${baseUrl}${pageData.url}`);
    setProp('og:image', `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`);
    setProp('og:type', 'website');
    setProp('og:site_name', 'Remax Forge & Fittings');
    setProp('og:locale', 'en_IN');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', pageData.title);
    setMeta('twitter:description', pageData.meta_desc);
    setMeta('twitter:image', `${baseUrl}/images/REMAX_FORGE_AND_FITTINGS-01.webp`);

    document.querySelectorAll('script[type="application/ld+json"]').forEach(script => script.remove());
    if (pageData.schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(pageData.schema);
      document.head.appendChild(script);
    }
  }, [pageData]);
};

export default useStrategySeo;
