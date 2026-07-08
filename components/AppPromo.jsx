import styles from './AppPromo.module.css';

const POINTS = [
  {
    title: 'Order and pay from your phone',
    text: 'and collect when it suits you. No waiting around at the counter.',
  },
  {
    title: 'Play to win.',
    text: 'Our in-app fruit-slicing game lets you rack up points and unlock real rewards.',
  },
  {
    title: 'Cash in at checkout.',
    text: 'Hit the score and redeem 10% off, 20% off, or a free small juice on the spot.',
  },
  {
    title: 'Members get first dibs',
    text: 'on new drinks, drops and seasonal specials before anyone else.',
  },
];

export default function AppPromo() {
  return (
    <section id="app" className={styles.app} aria-label="Get the app">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow on-purple">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
            </svg>
            The Juice Planet App
          </span>
          <h2 className="pixel-heading">
            Order ahead.
            <br />
            Skip the queue.
            <br />
            Slice some fruit.
          </h2>

          <ul className={styles.points}>
            {POINTS.map((p) => (
              <li key={p.title}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.badges}>
            <a
              className={styles.badge}
              href="https://apps.apple.com/search?term=juice+planet"
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 384 512" fill="currentColor" width="26" height="26">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141 8 184.8 8 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-65.7-90-65.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <span>
                <small>Download on the</small>
                <b>App Store</b>
              </span>
            </a>
            <a
              className={styles.badge}
              href="https://play.google.com/store/search?q=juice+planet&c=apps"
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 512 512" fill="currentColor" width="26" height="26">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60-34.1c17.1-11.7 17.1-49.1-1.1-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <span>
                <small>GET IT ON</small>
                <b>Google Play</b>
              </span>
            </a>
          </div>
        </div>

        <div className={styles.phoneWrap}>
          <img src="/images/app-phone-mockup.png" alt="Juice Planet app fruit-slicing game" />
        </div>
      </div>
    </section>
  );
}
