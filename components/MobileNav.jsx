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
      <div className={styles.barWrap}>
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
              <img src="/images/icon-shop.png" alt="" className={styles.iconImg} />
            </button>
            <button
              type="button"
              className={styles.toggle}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <img src="/images/icon-menu.png" alt="" className={styles.iconImg} />
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
      </div>

      <MerchModal open={merchOpen} onClose={() => setMerchOpen(false)} />
    </>
  );
}
