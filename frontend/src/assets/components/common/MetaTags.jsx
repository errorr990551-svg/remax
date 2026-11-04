import { useEffect } from 'react';

const MetaTags = ({ 
  title, 
  description, 
  canonical,
  robots = "index, follow",
  author = "Remax Forge & Fittings",
  publisher = "Remax Forge & Fittings"
}) => {
  useEffect(() => {
    // meta keywords is ignored by Google and was intentionally removed sitewide (SEOManager)
    document.querySelector('meta[name="keywords"]')?.remove();

    if (title) {
      document.title = title;
    }

    const setMetaTag = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    const setLinkTag = (rel, href) => {
      if (!href) return;
      let tag = document.querySelector(`link[rel="${rel}"]`);
      if (tag) {
        tag.setAttribute('href', href);
      } else {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        tag.setAttribute('href', href);
        document.head.appendChild(tag);
      }
    };

    const setPropertyTag = (property, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    setMetaTag('description', description);
    // Keep social previews in sync with the page-level title/description
    setPropertyTag('og:title', title);
    setPropertyTag('og:description', description);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('robots', robots);
    setMetaTag('author', author);
    setMetaTag('publisher', publisher);

    // Set canonical URL to the provided one, or default to the production URL with trailing slash
    let cleanPath = window.location.pathname;
    if (cleanPath !== '/' && !cleanPath.endsWith('/')) {
      cleanPath += '/';
    }
    let targetCanonical = canonical || `https://remaxforge.com${cleanPath}`;
    if (targetCanonical !== 'https://remaxforge.com/' && targetCanonical.endsWith('/') === false) {
      targetCanonical += '/';
    }
    setLinkTag('canonical', targetCanonical);
    setPropertyTag('og:url', targetCanonical);

  }, [title, description, canonical, robots, author, publisher]);

  return null;
};

export default MetaTags;
