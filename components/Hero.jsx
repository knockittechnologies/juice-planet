import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-label="Fresh juices from another planet">
      <div className={styles.stars} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true" />

      <img
        src="/images/hero-planet-orange.png"
        alt=""
        className={styles.planetOrange}
        aria-hidden="true"
      />
      <img src="/images/hero-saturn.png" alt="" className={styles.saturn} aria-hidden="true" />

      <div className={`wrap ${styles.inner}`}>
        <span className="eyebrow on-purple">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
          </svg>
          Southall
        </span>

        <h1 className={`pixel-heading ${styles.headline}`}>
          <span className={styles.hash}>#</span>FRESH JUICES
          <br />
          <span className={styles.planetLine}>FROM ANOTHER PLANET</span>
        </h1>

        <p className={styles.lead}>
          Real fruit, blended loud. No refined sugar, no shortcuts, no boring cups. Every juice
          blended to give you that boost of energy while the taste brings you back for Round 2.
        </p>

        <div className={styles.ctas}>
          <a href="#app" className="btn btn-primary">
            Order on the App
          </a>
          <a href="#juice" className="btn btn-outline">
            See the Menu
          </a>
        </div>

        <figure className={`${styles.callout} ${styles.calloutLeft}`}>
          <img src="/images/hero-callout-lunar.png" alt="Juice Planet Lunar smoothie cup" />
          <figcaption>Chill out with our signature Lunar</figcaption>
        </figure>

        <figure className={`${styles.callout} ${styles.calloutRight}`}>
          <img
            src="/images/hero-callout-organic.png"
            alt="Two Juice Planet smoothie cups side by side"
          />
          <figcaption>
            <strong>100%</strong> Organic Juices
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
