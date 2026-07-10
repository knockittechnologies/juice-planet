import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={`stage ${styles.wrap}`}>
      {/* Desktop/tablet */}
      <div className={styles.desktopOnly}>
        <img className={styles.img} src="/images/footer.webp" alt="Footer" />
        <nav className={styles.overlay} aria-label="Footer">
          <a href="#juice" className={styles.menu}>Menu</a>
          <a href="#app" className={styles.app}>The App</a>
          <a href="#about" className={styles.story}>Our Story</a>
          <a href="#partner" className={styles.partner}>Partner with us</a>
          <a
            href="https://www.instagram.com/juiceplanet.uk?igsh=cXBqZTdqMWJqYzRh"
            target="_blank"
            rel="noopener"
            className={styles.insta}
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@juiceplanetuk?_r=1&_t=ZN-97rIKP9RxdW"
            target="_blank"
            rel="noopener"
            className={styles.tiktok}
          >
            Tik Tok
          </a>
          <a href="mailto:Official@knockittechnologies.com" className={styles.credit}>
            KnockIt Technologies
          </a>
        </nav>
      </div>

      {/* Mobile */}
      <div className={styles.mobileOnly}>
        <img className={styles.img} src="/images/footer-mobile.webp" alt="Footer" />
        <nav className={styles.mOverlay} aria-label="Footer">
          <a href="#juice" className={styles.mMenu}>Menu</a>
          <a href="#app" className={styles.mApp}>The App</a>
          <a href="#about" className={styles.mStory}>Our Story</a>
          <a href="#partner" className={styles.mPartner}>Partner with us</a>
          <a
            href="https://www.instagram.com/juiceplanet.uk?igsh=cXBqZTdqMWJqYzRh"
            target="_blank"
            rel="noopener"
            className={styles.mInsta}
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@juiceplanetuk?_r=1&_t=ZN-97rIKP9RxdW"
            target="_blank"
            rel="noopener"
            className={styles.mTiktok}
          >
            Tik Tok
          </a>
        </nav>
        <p className={styles.mCredit}>
          Digital experience designed &amp; developed by KnockIt Technologies |{' '}
          <a href="mailto:Official@knockittechnologies.com">Official@knockittechnologies.com</a>
        </p>
      </div>
    </div>
  );
}
