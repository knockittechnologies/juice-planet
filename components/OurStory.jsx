import styles from './OurStory.module.css';

export default function OurStory() {
  return (
    <section id="about" className={styles.story} aria-label="Our story">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.left}>
          <span className="eyebrow on-purple">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
            </svg>
            Our Story
          </span>
          <h2 className="pixel-heading">A family idea blended in West London.</h2>
          <p className={styles.intro}>
            Juice Planet started the way most good things do, around a kitchen table with a
            stubborn belief that a healthy drink should never be a boring one.
          </p>
          <div className={styles.mission}>
            <h3>Mission</h3>
            <p>Take over the smoothie game. Real fruit, real people, no nonsense.</p>
          </div>
        </div>

        <div className={styles.photoWrap}>
          <img src="/images/story-photo.jpg" alt="Juice Planet team member preparing a drink in store" />
        </div>

        <div className={styles.right}>
          <p>
            We are a family business, not a faceless chain. We run the blenders, we taste every
            recipe and we serve every cup like it has our name on it, because it does. The
            galactic look, the no-refined-sugar promise and the obsession with flavour all come
            from the same place: we only make drinks we would happily give our own kids.
          </p>
          <p>
            Right now we are a West London start-up with big plans. The mission is simple. Build
            the most loved smoothie brand in the country, then keep going. If you want in on that
            ride, scroll down.
          </p>
          <div className={styles.stats}>
            <div>
              <strong>0%</strong>
              <span>Refined sugar added</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Blended to order</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Flavour ambition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
