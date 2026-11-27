// Report a successful lead form submit: the Google Ads conversion and a GA4 generate_lead event.
// gtag() is defined inline in index.html, so calls made before gtag.js has loaded are queued.
export const trackLead = (formId) => {
  if (!window.gtag) return;
  window.gtag('event', 'conversion', { send_to: 'AW-18254252296/Hd6pCKHMlcIcEIiSp4BE', value: 1.0, currency: 'INR' });
  window.gtag('event', 'generate_lead', { send_to: 'G-3KREY3BL81', form_id: formId });
};
