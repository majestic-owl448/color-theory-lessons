import { useState } from 'react';
import { useAppDispatch } from '../state/app-context.tsx';
import styles from './SettingsPage.module.css';

export function SettingsPage() {
  const dispatch = useAppDispatch();
  const [confirmed, setConfirmed] = useState(false);

  function handleReset() {
    if (!confirmed) {
      setConfirmed(true);
      return;
    }
    dispatch({ type: 'RESET_PROGRESS' });
    setConfirmed(false);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>settings</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>progress</h2>
        <p className={styles.sectionDesc}>
          Reset all completed lessons, milestones, and badges. This cannot be undone.
        </p>
        <button
          className={`${styles.resetBtn} ${confirmed ? styles.resetBtnConfirm : ''}`}
          onClick={handleReset}
        >
          {confirmed ? 'are you sure? click again to confirm' : 'reset all progress'}
        </button>
        {confirmed && (
          <button className={styles.cancelBtn} onClick={() => setConfirmed(false)}>
            cancel
          </button>
        )}
      </section>
    </div>
  );
}
