import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={`stage ${styles.wrap}`}>
      <img className={styles.img} src="/images/footer.png" alt="Footer" />
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
      </nav>
    </div>
  );
}
