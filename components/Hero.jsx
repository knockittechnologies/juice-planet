'use client';

import { useState } from 'react';
import MerchModal from './MerchModal';
import styles from './Hero.module.css';

export default function Hero() {
  const [merchOpen, setMerchOpen] = useState(false);

  return (
    <div id="top" className={`stage ${styles.hero}`}>
      {/* Desktop: full image with nav baked in */}
      <div className={`${styles.frame} ${styles.desktopOnly}`}>
        <img className={styles.img} src="/images/hero.webp" alt="Juice Planet — Fresh juices from another planet" />
        <nav className={styles.navOverlay} aria-label="Primary">
          <a href="#about" className={styles.navAbout}>About us</a>
          <a href="#juice" className={styles.navJuices}>Juices</a>
          <span className={styles.navStore} title="Store locator coming soon">Store Locator</span>
          <a href="#partner" className={styles.navContact}>Contact</a>
          <button type="button" className={styles.navShopMerch} onClick={() => setMerchOpen(true)}>
            Shop Merch
          </button>
        </nav>
        <a href="#app" className={styles.ctaOrder} aria-label="Order on the app"></a>
        <a href="#juice" className={styles.ctaMenu} aria-label="See the menu"></a>
      </div>

      {/* Mobile/tablet: nav cropped out (MobileNav component handles nav separately) */}
      <div className={`${styles.frame} ${styles.mobileOnly}`}>
        <img className={styles.img} src="/images/hero-mobile.webp" alt="Juice Planet — Fresh juices from another planet" />
        <a href="#app" className={styles.ctaOrderMobile} aria-label="Order on the app"></a>
        <a href="#juice" className={styles.ctaMenuMobile} aria-label="See the menu"></a>
      </div>

      <MerchModal open={merchOpen} onClose={() => setMerchOpen(false)} />
    </div>
  );
}
