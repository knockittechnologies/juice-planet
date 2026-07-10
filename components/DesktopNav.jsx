'use client';

import { useState } from 'react';
import MerchModal from './MerchModal';
import styles from './DesktopNav.module.css';

const LINKS = [
  { href: '#about', label: 'About us' },
  { href: '#juice', label: 'Juices' },
  { href: '#partner', label: 'Contact' },
];

export default function DesktopNav() {
  const [open, setOpen] = useState(false);
  const [merchOpen, setMerchOpen] = useState(false);

  return (
    <>
      <header className={`stage ${styles.wrap}`}>
        <img className={styles.img} src="/images/nav-desktop.webp" alt="Juice Planet" />
        <a href="#top" className={styles.logoHit} aria-label="Juice Planet home"></a>
        <button type="button" className={styles.shopMerch} onClick={() => setMerchOpen(true)}>
          Shop Merch
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        ></button>

        <nav className={`${styles.menu} ${open ? styles.menuOpen : ''}`} aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <span className={styles.storeLocator}>Store Locator</span>
        </nav>
      </header>

      <MerchModal open={merchOpen} onClose={() => setMerchOpen(false)} />
    </>
  );
}
