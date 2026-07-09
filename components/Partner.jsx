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

  return (
    <div id="partner" className={`stage ${styles.wrap}`}>
      {/* Desktop/tablet: image with precisely-mapped invisible overlay fields */}
      <div className={styles.desktopOnly}>
        <img className={styles.img} src="/images/partner.webp" alt="Partner With Us" />
        <form className={styles.overlay} onSubmit={handleSubmit}>
          <input type="text" name="name" className={`${styles.field} ${styles.name}`} required aria-label="Name" />
          <input type="text" name="club" className={`${styles.field} ${styles.club}`} placeholder="e.g. Ealing Run Club" aria-label="Club or company" />
          <input type="email" name="email" className={`${styles.field} ${styles.email}`} required aria-label="Email" />
          <input type="tel" name="phone" className={`${styles.field} ${styles.phone}`} aria-label="Phone" />
          <select name="about" className={`${styles.field} ${styles.about}`} defaultValue="Sponsorships" aria-label="What's this about">
            {ABOUT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <textarea
            name="message"
            className={`${styles.field} ${styles.message}`}
            placeholder="Numbers, dates, what you have in mind. The more detail the better"
            required
            aria-label="Tell us more"
          />
          <button type="submit" className={styles.submit} aria-label="Send it over"></button>
          <p className={`${styles.status} ${styles[status.state] || ''}`} role="status">
            {status.message}
          </p>
        </form>
      </div>

      {/* Mobile: real stacked form, sized for touch */}
      <div className={styles.mobileOnly}>
        <span className={styles.mEyebrow}>Partner With Us</span>
        <h2 className={styles.mHeading}>Let&rsquo;s build something together.</h2>
        <p className={styles.mLead}>
          We love teaming up with people who move. Whether you want us pouring at your event,
          fuelling your run club or sponsoring your next match, drop us a line and we will come
          back to you fast.
        </p>
        <form className={styles.mForm} onSubmit={handleSubmit}>
          <div className={styles.mField}>
            <label htmlFor="m-name">Name</label>
            <input id="m-name" type="text" name="name" required />
          </div>
          <div className={styles.mField}>
            <label htmlFor="m-club">Club / company</label>
            <input id="m-club" type="text" name="club" placeholder="e.g. Ealing Run Club" />
          </div>
          <div className={styles.mField}>
            <label htmlFor="m-email">Email</label>
            <input id="m-email" type="email" name="email" required />
          </div>
          <div className={styles.mField}>
            <label htmlFor="m-phone">Phone</label>
            <input id="m-phone" type="tel" name="phone" />
          </div>
          <div className={styles.mField}>
            <label htmlFor="m-about">What&rsquo;s this about?</label>
            <select id="m-about" name="about" defaultValue="Sponsorships">
              {ABOUT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div className={styles.mField}>
            <label htmlFor="m-message">Tell us more</label>
            <textarea
              id="m-message"
              name="message"
              rows={4}
              placeholder="Numbers, dates, what you have in mind. The more detail the better"
              required
            />
          </div>
          <button type="submit" className={styles.mSubmit}>Send It Over</button>
          <p className={`${styles.mStatus} ${styles[status.state] || ''}`} role="status">
            {status.message}
          </p>
        </form>
      </div>
    </div>
  );
}
