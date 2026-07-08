import styles from './Features.module.css';

const FEATURES = [
  {
    emoji: '🍊',
    title: 'Real Fruit Only',
    text: 'Whole fruit, blended fresh to order. What you taste is what is in the cup.',
  },
  {
    emoji: '🧊',
    title: 'No Refined Sugar',
    text: 'Sweetened by fruit, dates and a touch of honey. Never the white stuff.',
  },
  {
    emoji: '🍓',
    title: 'Built For Flavour',
    text: 'Wellness that does not taste like punishment. Big, bold, properly good.',
  },
  {
    emoji: '🥤',
    title: 'Made To Look Unreal',
    text: 'Every drink is a little bit of space in your hand. Aesthetic is the point.',
  },
];

export default function Features() {
  return (
    <section className={styles.features} aria-label="Why Juice Planet">
      <div className={`wrap ${styles.grid}`}>
        {FEATURES.map((f) => (
          <div key={f.title} className={styles.item}>
            <span className={styles.emoji} aria-hidden="true">
              {f.emoji}
            </span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
