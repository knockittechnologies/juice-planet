import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div id="top" className={`stage ${styles.hero}`}>
      <img className={styles.img} src="/images/hero.webp" alt="Fresh juices from another planet" />
      <img
        className={styles.planetOrange}
        src="/images/planet-orange.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className={styles.planetSaturn}
        src="/images/planet-saturn.png"
        alt=""
        aria-hidden="true"
      />
      <a href="#app" className={styles.ctaOrder} aria-label="Order on the app"></a>
      <a href="#juice" className={styles.ctaMenu} aria-label="See the menu"></a>
    </div>
  );
}
