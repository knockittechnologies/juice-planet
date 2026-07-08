import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.top}`}>
        <div className={styles.col}>
          <h4>Menu</h4>
          <a href="#juice">Menu</a>
          <a href="#app">The App</a>
          <a href="#about">Our Story</a>
          <a href="#partner">Partner with us</a>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <a href="mailto:hello@juiceplanet.co.uk">hello@juiceplanet.co.uk</a>
          <a href="tel:+442074321001">+44 20 7432 1001</a>
        </div>

        <div className={styles.brand}>
          <img src="/images/logo-badge.png" alt="Juice Planet — Shakes &amp; Smoothies" />
          <p>
            Fresh juice from another planet.
            <br />
            A family-run start-up out of West London, here to take over the smoothie game.
          </p>
        </div>

        <div className={styles.col}>
          <h4>Visit</h4>
          <span>Juice Planet HQ</span>
          <span>West London, UK</span>
          <span>Mon&ndash;Sun: 8am &ndash; 6pm</span>
        </div>

        <div className={styles.col}>
          <h4>Follow</h4>
          <a
            href="https://www.instagram.com/juiceplanet.uk?igsh=cXBqZTdqMWJqYzRh"
            target="_blank"
            rel="noopener"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@juiceplanetuk?_r=1&_t=ZN-97rIKP9RxdW"
            target="_blank"
            rel="noopener"
          >
            Tik Tok
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`wrap ${styles.bottomInner}`}>
          <span>&copy; {year} Juice Planet. All rights reserved.</span>
          <span>Made with 🍊 Real fruit</span>
        </div>
      </div>
    </footer>
  );
}
