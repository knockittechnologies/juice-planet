import CupIcon from './CupIcon';
import styles from './JuiceMenu.module.css';

const SIGNATURE = [
  {
    name: 'Supernova',
    tag: 'Signature',
    color: '#f2b23e',
    text: 'Apple, banana, mango, dates and milk. Our biggest seller and a proper meal in a cup.',
  },
  {
    name: 'Berry Blast',
    tag: null,
    color: '#8a5fc7',
    text: 'Raspberry, blueberry, banana and honey. Sharp, fruity and dangerously easy to finish.',
  },
  {
    name: 'Starburst',
    tag: null,
    color: '#f2d24e',
    text: 'Pineapple, guava, mango and rose. Tropical with a little something different.',
  },
  {
    name: 'Lunar',
    tag: 'Vegan',
    color: '#cdd66b',
    text: 'Pineapple, mango, coconut milk and spirulina. Dairy free and out of this world.',
  },
  {
    name: 'Planet X',
    tag: 'Protein',
    color: '#e8dcc0',
    text: 'Dates, peanut butter, protein and honey. The post-workout fix that actually fills you up.',
  },
  {
    name: 'Stardust',
    tag: 'Glow',
    color: '#d98fae',
    text: 'Strawberry, pineapple, blueberry, mango and collagen. Pretty, pink and good for the skin.',
  },
];

const OTHERS = [
  {
    emoji: '🍵',
    name: 'Matcha Range',
    text: 'Mango, Strawberry, Blueberry and White Chocolate. Real ceremonial matcha, layered with fruit.',
  },
  {
    emoji: '☕',
    name: 'Coffee',
    text: 'Espresso, flat white, latte and iced. Add Hazelnut, Vanilla, Caramel or Pistachio syrup.',
  },
  {
    emoji: '🍹',
    name: 'Refreshers & Mojitos',
    text: 'Non-alcoholic mojitos and fruit refreshers. Lychee, classic mint and seasonal specials.',
  },
  {
    emoji: '🧪',
    name: 'Power Ups',
    text: 'Add to any drink: Protein, Collagen, Spirulina, Turmeric and our Immunity boost.',
  },
  {
    emoji: '🧃',
    name: 'Create Your Own',
    text: 'Pick your base, fruit and toppings and build your own juice or smoothie.',
  },
  {
    emoji: '🍰',
    name: 'Sweet Treats',
    text: 'A rotating little dessert counter to go with your drink. Ask in store for what is fresh today.',
  },
];

export default function JuiceMenu() {
  return (
    <section id="juice" className={styles.menu} aria-label="Our juice menu">
      <div className={`wrap ${styles.wrap}`}>
        <div className={styles.intro}>
          <span className="eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
            </svg>
            The Menu
          </span>
          <h2 className="pixel-heading">Galactic Blends</h2>
          <p>
            Our signature smoothies. Thick, fresh and loaded with real fruit. These are the ones
            people come back for.
          </p>
          <a href="#juice" className="btn btn-primary">
            Discover Our Blends
          </a>
        </div>

        <h3 className={`pixel-heading ${styles.subhead}`}>Signature Smoothies</h3>
        <div className={styles.grid}>
          {SIGNATURE.map((s) => (
            <article key={s.name} className={styles.card}>
              <div className={styles.cardTop}>
                <CupIcon color={s.color} />
                {s.tag && <span className={styles.pill}>{s.tag}</span>}
              </div>
              <h4>{s.name}</h4>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <h3 className={`pixel-heading ${styles.subhead}`}>Others</h3>
        <div className={styles.grid}>
          {OTHERS.map((o) => (
            <article key={o.name} className={styles.card}>
              <span className={styles.otherEmoji} aria-hidden="true">
                {o.emoji}
              </span>
              <h4>{o.name}</h4>
              <p>{o.text}</p>
            </article>
          ))}
        </div>

        <p className={styles.footnote}>
          Full menu and prices live in store and on the app. Allergen info available on request,
          just ask the team.
        </p>
      </div>
    </section>
  );
}
