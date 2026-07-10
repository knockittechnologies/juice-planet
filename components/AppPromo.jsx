import styles from './AppPromo.module.css';

export default function AppPromo() {
  return (
    <section id="app" className={`stage ${styles.appWrap}`} aria-label="Get the app">
      <div className={styles.desktopOnly}>
        <img className={styles.img} src="/images/the-app.webp" alt="The Juice Planet app" />
        <a
          className={styles.appStore}
          href="https://apps.apple.com/search?term=juice+planet"
          target="_blank"
          rel="noopener"
          aria-label="Download on the App Store"
        ></a>
        <a
          className={styles.googlePlay}
          href="https://play.google.com/store/search?q=juice+planet&c=apps"
          target="_blank"
          rel="noopener"
          aria-label="Get it on Google Play"
        ></a>
      </div>

      <div className={styles.mobileOnly}>
        <img className={styles.img} src="/images/app-mobile.webp" alt="The Juice Planet app" />
        <a
          className={styles.appStoreMobile}
          href="https://apps.apple.com/search?term=juice+planet"
          target="_blank"
          rel="noopener"
          aria-label="Download on the App Store"
        ></a>
        <a
          className={styles.googlePlayMobile}
          href="https://play.google.com/store/search?q=juice+planet&c=apps"
          target="_blank"
          rel="noopener"
          aria-label="Get it on Google Play"
        ></a>
      </div>
    </section>
  );
}
