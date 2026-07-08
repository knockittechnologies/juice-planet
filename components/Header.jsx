'use client';

import { useState } from 'react';
import MerchModal from './MerchModal';
import styles from './Header.module.css';

const LINKS = [
  { href: '#juice', label: 'Juices' },
  { href: '#app', label: 'The App' },
  { href: '#about', label: 'Our Story' },
  { href: '#partner', label: 'Partner With Us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [merchOpen, setMerchOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.dot} aria-hidden="true" />
          Juice Planet
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#partner" className={styles.cta} onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>

        <button type="button" className={styles.shopMerch} onClick={() => setMerchOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 7h12l1 13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
            <path d="M9 7a3 3 0 0 1 6 0" />
          </svg>
          <span>Shop Merch</span>
        </button>

        <button
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MerchModal open={merchOpen} onClose={() => setMerchOpen(false)} />
    </header>
  );
}
