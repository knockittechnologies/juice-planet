import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div id="top" className={`stage ${styles.hero}`}>
      {/* Desktop/tablet: nav now cropped out, handled separately by DesktopNav */}
      <div className={`${styles.frame} ${styles.desktopOnly}`}>
        <img className={styles.img} src="/images/hero.webp" alt="Juice Planet — Fresh juices from another planet" />
        <a href="#app" className={styles.ctaOrder} aria-label="Order on the app"></a>
        <a href="#juice" className={styles.ctaMenu} aria-label="See the menu"></a>
      </div>

      {/* Mobile: nav cropped out, handled separately by MobileNav */}
      <div className={`${styles.frame} ${styles.mobileOnly}`}>
        <img className={styles.img} src="/images/hero-mobile.webp" alt="Juice Planet — Fresh juices from another planet" />
        <a href="#app" className={styles.ctaOrderMobile} aria-label="Order on the app"></a>
        <a href="#juice" className={styles.ctaMenuMobile} aria-label="See the menu"></a>
      </div>
    </div>
  );
}
