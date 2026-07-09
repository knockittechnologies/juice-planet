'use client';

import { useState } from 'react';
import styles from './Partner.module.css';

// SETUP (one-time, ~2 minutes): create a free form at https://formspree.io,
// verify the destination email you want submissions delivered to, then
// replace the placeholder below with your real form endpoint ID.
const FORMSPREE_ID = 'YOUR_FORM_ID';

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
      <img className={styles.img} src="/images/partner.webp" alt="Partner With Us" />
      <form className={styles.overlay} onSubmit={handleSubmit}>
        <input type="text" name="name" className={`${styles.field} ${styles.name}`} required aria-label="Name" />
        <input type="text" name="club" className={`${styles.field} ${styles.club}`} placeholder="e.g. Ealing Run Club" aria-label="Club or company" />
        <input type="email" name="email" className={`${styles.field} ${styles.email}`} required aria-label="Email" />
        <input type="tel" name="phone" className={`${styles.field} ${styles.phone}`} aria-label="Phone" />
        <select name="about" className={`${styles.field} ${styles.about}`} defaultValue="Sponsorships" aria-label="What's this about">
          <option value="Run Clubs">Run Clubs</option>
          <option value="Padel Clubs">Padel Clubs</option>
          <option value="Sponsorships">Sponsorships</option>
          <option value="Events & Pop-ups">Events & Pop-ups</option>
          <option value="Wholesale & Stockists">Wholesale & Stockists</option>
          <option value="Franchise & Partnership">Franchise & Partnership</option>
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
  );
}
