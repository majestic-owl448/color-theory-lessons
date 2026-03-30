import { Link } from 'react-router-dom';
import { units } from '../data/units.ts';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <span className={styles.prompt}>~/color-quest $ learn --interactive</span>
        <h1 className={styles.title}>
          Color Theory
          <br />
          for Developers
        </h1>
        <p className={styles.subtitle}>
          Six units of hands-on lessons covering color perception, digital color
          models, accessibility, and design systems — built for people who write code.
        </p>
        <Link to="/lesson/u1-l1" className={styles.startBtn}>
          start learning
        </Link>
      </section>

      <section>
        <p className={styles.unitsHeading}>units</p>
        <ul className={styles.units}>
          {units.map((unit, i) => (
            <li key={unit.id} className={styles.unitCard}>
              <span className={styles.unitIndex}>{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.unitInfo}>
                <span className={styles.unitTitle}>{unit.title}</span>
                <span className={styles.unitDesc}>{unit.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
