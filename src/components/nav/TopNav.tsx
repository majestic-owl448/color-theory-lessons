import { NavLink } from 'react-router-dom';
import styles from './TopNav.module.css';

export function TopNav() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <NavLink to="/" end className={styles.logo}>
        color-quest$
      </NavLink>
      <ul className={styles.links}>
        <li>
          <a
            href="https://majestic-owl448.github.io/palette-contrast-checker/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            contrast checker ↗
          </a>
        </li>
        <li>
          <NavLink
            to="/glossary"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            glossary
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/review"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            review
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
