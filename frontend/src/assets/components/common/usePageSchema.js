import { useEffect } from 'react';

// Page-level JSON-LD (e.g. FAQPage) that SEOManager does not generate.
// Tagged with data-page-schema so SEOManager's cleanup leaves it alone; removed on unmount.
// Scripts added by this browser session. Any other data-page-schema script is a
// prerendered copy (createRoot renders fresh) and is removed to avoid duplicates.
const live = new WeakSet();

const usePageSchema = (schemas) => {
  const json = JSON.stringify(schemas || []);
  useEffect(() => {
    document.querySelectorAll('script[data-page-schema]').forEach((s) => { if (!live.has(s)) s.remove(); });
    const scripts = JSON.parse(json).map((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-schema', '');
      script.text = JSON.stringify(schema);
      live.add(script);
      document.head.appendChild(script);
      return script;
    });
    return () => scripts.forEach((script) => script.remove());
  }, [json]);
};

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map((f) => ({
    '@type': 'Question',
    'name': f.q || f.question,
    'acceptedAnswer': { '@type': 'Answer', 'text': (f.a || f.answer).trim() }
  }))
});

// Component form, for pages that return early before their schema data exists.
export const PageSchema = ({ schemas }) => { usePageSchema(schemas); return null; };

export default usePageSchema;
