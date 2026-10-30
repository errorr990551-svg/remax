// ============================================================================
// CONTACT DETAILS ARE GATED - SITE RULE (see CLAUDE.md / README "Contact gate")
//
// Phone numbers, WhatsApp and email addresses are only shown to visitors who
// have submitted the Get Quote / contact form. This file is the ONLY place they
// exist in the frontend, stored base64-encoded so they never appear as plain
// text in the pre-rendered HTML or the JS bundle.
//
// - Read them with getContactDetails(), and only render them when
//   isContactUnlocked() / the context's isUnlocked is true.
// - Before that, show a button that opens the Get Quote form instead.
// - `npm run build` runs check_contact_gate.js, which fails the build (and so the
//   deploy) if a phone number, email, tel:/mailto: or WhatsApp link appears
//   anywhere else.
// ============================================================================

const ENCODED = {
  phone: 'KzkxOTc2OTk4MzEwOA==',
  phoneDisplay: 'KzkxIDk3Njk5IDgzMTA4',
  landline: 'KzkxMjI2NjEwOTIxMQ==',
  landlineDisplay: 'MDIyIDY2MTAgOTIxMQ==',
  email: 'c2FsZXNAcmVtYXhmb3JnZS5jb20=',
  careersEmail: 'Y2FyZWVyc0ByZW1heGZvcmdlLmNvbQ==',
  whatsapp: 'aHR0cHM6Ly93YS5tZS85MTk3Njk5ODMxMDg/dGV4dD1IZWxsbyUyMFJlbWF4JTIwRm9yZ2UsJTIwSSUyMHdvdWxkJTIwbGlrZSUyMHRvJTIwaW5xdWlyZSUyMGFib3V0JTIwZmxhbmdlcyUyMGFuZCUyMGZpdHRpbmdzLg==',
};

const UNLOCK_KEY = 'remax_contact_unlocked';
export const CONTACT_UNLOCKED_EVENT = 'remax:contact-unlocked';

export const isContactUnlocked = () => {
  try {
    return localStorage.getItem(UNLOCK_KEY) === 'true';
  } catch {
    return false;
  }
};

// Called after any successful Get Quote / contact form submission (see services/api.js)
export const unlockContactDetails = () => {
  try {
    localStorage.setItem(UNLOCK_KEY, 'true');
  } catch {
    // storage blocked: still unlock for this page view via the event below
  }
  window.dispatchEvent(new Event(CONTACT_UNLOCKED_EVENT));
};

// Decoded details. Only call this when the visitor has unlocked them.
export const getContactDetails = () => {
  const d = Object.fromEntries(Object.entries(ENCODED).map(([k, v]) => [k, atob(v)]));
  return {
    ...d,
    phoneHref: ['tel', d.phone].join(':'),
    landlineHref: ['tel', d.landline].join(':'),
    emailHref: ['mailto', d.email].join(':'),
    careersEmailHref: ['mailto', d.careersEmail].join(':'),
  };
};
