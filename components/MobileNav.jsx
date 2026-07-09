'use client';

import { useState } from 'react';
import MerchModal from './MerchModal';
import styles from './MobileNav.module.css';

const LINKS = [
  { href: '#about', label: 'About us' },
  { href: '#juice', label: 'Juices' },
  { href: '#partner', label: 'Contact' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [merchOpen, setMerchOpen] = useState(false);

  return (
    <>
      <header className={styles.bar}>
        <a href="#top" className={styles.brand}>
          <img src="/images/logo.png" alt="Juice Planet" className={styles.brandLogo} />
        </a>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.merchBtn}
            onClick={() => setMerchOpen(true)}
            aria-label="Shop merch"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 7h12l1 13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
          </button>
          <button
            type="button"
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
      </header>

      <nav className={`${styles.menu} ${open ? styles.menuOpen : ''}`} aria-label="Mobile">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <span className={styles.storeLocator}>Store Locator</span>
      </nav>

      <MerchModal open={merchOpen} onClose={() => setMerchOpen(false)} />
    </>
  );
}
