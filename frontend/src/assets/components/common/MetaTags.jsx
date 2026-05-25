import { useEffect } from 'react';

const MetaTags = ({ 
  title, 
  description, 
  keywords,
  canonical,
  robots = "index, follow",
  author = "Remax Forge & Fittings",
  publisher = "Remax Forge & Fittings"
}) => {
  useEffect(() => {
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

    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('robots', robots);
    setMetaTag('author', author);
    setMetaTag('publisher', publisher);

    // Set canonical URL to the provided one, or default to the production URL
    const canonicalUrl = canonical || 'https://remaxforge.com' + window.location.pathname;
    setLinkTag('canonical', canonicalUrl);

  }, [title, description, keywords, canonical, robots, author, publisher]);

  return null;
};

export default MetaTags;
