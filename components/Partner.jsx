'use client';

import { useState } from 'react';
import styles from './Partner.module.css';

// SETUP (one-time, ~2 minutes): create a free form at https://formspree.io,
// verify the destination email you want submissions delivered to, then
// replace the placeholder below with your real form endpoint ID.
const FORMSPREE_ID = 'mjgqqjgj';

const ABOUT_OPTIONS = [
  'Run Clubs',
  'Padel Clubs',
  'Sponsorships',
  'Events & Pop-ups',
  'Wholesale & Stockists',
  'Franchise & Partnership',
];

export default function Partner() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      setStatus({
        state: 'error',
        message: 'Form backend not connected yet — see FORMSPREE_ID in Partner.jsx.',
      });
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: 'sending', message: 'Sending…' });

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus({ state: 'ok', message: "Thanks — we'll be in touch soon." });
        form.reset();
      } else {
        setStatus({ state: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' });
    }
  }

  const fields = (prefix) => (
    <>
      <input type="text" name="name" className={`${styles.field} ${styles[prefix + 'Name']}`} required aria-label="Name" />
      <input type="text" name="club" className={`${styles.field} ${styles[prefix + 'Club']}`} placeholder="e.g. Ealing Run Club" aria-label="Club or company" />
      <input type="email" name="email" className={`${styles.field} ${styles[prefix + 'Email']}`} required aria-label="Email" />
      <input type="tel" name="phone" className={`${styles.field} ${styles[prefix + 'Phone']}`} aria-label="Phone" />
      <select name="about" className={`${styles.field} ${styles[prefix + 'About']}`} defaultValue="Sponsorships" aria-label="What's this about">
        {ABOUT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <textarea
        name="message"
        className={`${styles.field} ${styles[prefix + 'Message']}`}
        placeholder="Numbers, dates, what you have in mind. The more detail the better"
        required
        aria-label="Tell us more"
      />
    </>
  );

  return (
    <div id="partner" className={`stage ${styles.wrap}`}>
      {/* Desktop/tablet: image with precisely-mapped invisible overlay fields */}
      <div className={styles.desktopOnly}>
        <img className={styles.img} src="/images/partner.webp" alt="Partner With Us" />
        <form className={styles.overlay} onSubmit={handleSubmit}>
          {fields('d')}
          <button type="submit" className={styles.submit} aria-label="Send it over"></button>
          <p className={`${styles.status} ${styles[status.state] || ''}`} role="status">
            {status.message}
          </p>
        </form>
      </div>

      {/* Mobile: new pixel-matched design, image with invisible overlay fields */}
      <div className={styles.mobileOnly}>
        <img className={styles.img} src="/images/partner-mobile.webp" alt="Partner With Us" />
        <form className={styles.mOverlay} onSubmit={handleSubmit}>
          {fields('m')}
          <button type="submit" className={styles.mSubmit} aria-label="Send it over"></button>
          <p className={`${styles.mStatus} ${styles[status.state] || ''}`} role="status">
            {status.message}
          </p>
        </form>
      </div>
    </div>
  );
}
