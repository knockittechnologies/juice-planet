import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div id="top" className={styles.hero}>
      <img className={styles.heroBg} src="/images/hero-bg.png" alt="" />

      <div className={styles.titleBlock}>
        <img src="/images/hero-title.png" alt="#FRESH JUICES FROM ANOTHER PLANET" />
      </div>

      <div className={styles.bodyCta}>
        <img src="/images/hero-cta.png" alt="" />
        <a href="#app" className={styles.ctaOrder} aria-label="Order on the app"></a>
        <a href="#juice" className={styles.ctaMenu} aria-label="See the menu"></a>
      </div>

      <div className={styles.decoOrange}>
        <img src="/images/deco-orange.png" alt="" />
      </div>
      <div className={styles.decoTube}>
        <img src="/images/deco-tube.png" alt="" />
      </div>
      <div className={styles.decoCups}>
        <img src="/images/deco-cups.png" alt="" />
      </div>
      <div className={styles.decoOrganic}>
        <img src="/images/deco-organic.png" alt="" />
      </div>
      <div className={styles.decoSaturn}>
        <img src="/images/deco-saturn.png" alt="" />
      </div>
      <div className={styles.decoSwirl}>
        <img src="/images/deco-swirl.png" alt="" />
      </div>
    </div>
  );
}
