'use client';

import { useState } from 'react';
import styles from './Partner.module.css';

const TAGS = [
  'Run Clubs',
  'Padel Clubs',
  'Sponsorships',
  'Events & Pop-ups',
  'Wholesale & Stockists',
  'Franchise & Partnership',
];

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
    <section id="partner" className={styles.partner} aria-label="Partner with us">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow on-purple">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
            </svg>
            Partner With Us
          </span>
          <h2 className="pixel-heading">Let&rsquo;s build something together.</h2>
          <p>
            We love teaming up with people who move. Whether you want us pouring at your event,
            fuelling your run club or sponsoring your next match, drop us a line and we will come
            back to you fast.
          </p>
          <div className={styles.tags}>
            {TAGS.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="p-name">Name</label>
            <input id="p-name" name="name" type="text" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="p-club">Club / company</label>
            <input id="p-club" name="club" type="text" placeholder="e.g. Ealing Run Club" />
          </div>
          <div className={styles.split}>
            <div className={styles.field}>
              <label htmlFor="p-email">Email</label>
              <input id="p-email" name="email" type="email" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="p-phone">Phone</label>
              <input id="p-phone" name="phone" type="tel" />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="p-about">What&rsquo;s this about?</label>
            <select id="p-about" name="about" defaultValue="Sponsorships">
              {TAGS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="p-message">Tell us more</label>
            <textarea
              id="p-message"
              name="message"
              rows={4}
              placeholder="Numbers, dates, what you have in mind. The more detail the better"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={status.state === 'sending'}>
            Send It Over
          </button>
          <p className={`${styles.status} ${styles[status.state] || ''}`} role="status">
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}
