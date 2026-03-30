import { NavLink } from 'react-router-dom';
import styles from './TopNav.module.css';

export function TopNav() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <NavLink to="/" className={styles.logo}>
        color-quest$
      </NavLink>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/sandbox"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            sandbox
          </NavLink>
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
