'use client';

import { useState } from 'react';
import MerchModal from './MerchModal';
import styles from './Header.module.css';

export default function Header() {
  const [merchOpen, setMerchOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`stage ${styles.navWrap}`}>
        <img className={styles.navImg} src="/images/nav.webp" alt="Juice Planet Navigation" />

        <nav className={styles.overlay} aria-label="Primary">
          <a href="#about" className={styles.about}>
            About us
          </a>
          <a href="#juice" className={styles.juices}>
            Juices
          </a>
          <span className={styles.store} title="Store locator coming soon">
            Store Locator
          </span>
          <a href="#partner" className={styles.contact}>
            Contact
          </a>
          <button type="button" className={styles.shopMerch} onClick={() => setMerchOpen(true)}>
            Shop Merch
          </button>
        </nav>
      </div>

      <MerchModal open={merchOpen} onClose={() => setMerchOpen(false)} />
    </header>
  );
}
