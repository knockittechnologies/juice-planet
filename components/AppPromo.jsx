import styles from './AppPromo.module.css';

export default function AppPromo() {
  return (
    <section id="app" className={styles.appWrap} aria-label="Get the app">
      <img className={styles.img} src="/images/the-app.png" alt="The Juice Planet app" />
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
    </section>
  );
}
