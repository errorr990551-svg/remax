import { useEffect } from 'react';

// Page-level JSON-LD (e.g. FAQPage) that SEOManager does not generate.
// Tagged with data-page-schema so SEOManager's cleanup leaves it alone; removed on unmount.
const usePageSchema = (schemas) => {
  const json = JSON.stringify(schemas || []);
  useEffect(() => {
    const scripts = JSON.parse(json).map((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-schema', '');
      script.text = JSON.stringify(schema);
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

export default usePageSchema;
