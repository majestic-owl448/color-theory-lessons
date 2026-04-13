import { useMemo, useState } from 'react';
import { simulateDeuteranopia } from '../../../utils/color.ts';
import styles from './SimulationSpotterChallenge.module.css';

interface SimulationSpotterChallengeProps {
  onComplete: () => void;
}

type Fix = 'icon' | 'pattern' | 'label' | 'contrast';

interface Item {
  id: string;
  label: string;
  color: string;
  fragile: boolean;
  validFixes: Fix[];
}

const ITEMS: Item[] = [
  { id: 'status', label: 'Status badge pair (green/red only)', color: '#22c55e', fragile: true, validFixes: ['icon', 'label'] },
  { id: 'bars', label: 'Chart bars (red vs green)', color: '#ef4444', fragile: true, validFixes: ['pattern', 'label'] },
  { id: 'form', label: 'Form errors in red-only labels', color: '#f97316', fragile: true, validFixes: ['icon', 'label', 'contrast'] },
  { id: 'link', label: 'Underlined link', color: '#3b82f6', fragile: false, validFixes: ['label'] },
  { id: 'toggle', label: 'Toggle with text On/Off', color: '#8b5cf6', fragile: false, validFixes: ['label'] },
  { id: 'alert', label: 'Alert with icon + heading', color: '#eab308', fragile: false, validFixes: ['icon'] },
];

const FIX_LABELS: Record<Fix, string> = {
  icon: 'Add icon',
  pattern: 'Add pattern',
  label: 'Add label',
  contrast: 'Increase contrast',
};

export function SimulationSpotterChallenge({ onComplete }: SimulationSpotterChallengeProps) {
  const [simulated, setSimulated] = useState(false);
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [fixes, setFixes] = useState<Record<string, Fix | ''>>({});

  const scored = useMemo(() => {
    const fragileIds = ITEMS.filter((item) => item.fragile).map((item) => item.id);
    const nonFragileIds = ITEMS.filter((item) => !item.fragile).map((item) => item.id);

    const flagsGood =
      fragileIds.every((id) => flagged[id]) &&
      nonFragileIds.every((id) => !flagged[id]);

    const fixesGood = fragileIds.every((id) => {
      const fix = fixes[id];
      if (!fix) return false;
      const item = ITEMS.find((candidate) => candidate.id === id);
      return item ? item.validFixes.includes(fix) : false;
    });

    return {
      flagsGood,
      fixesGood,
      passed: flagsGood && fixesGood,
    };
  }, [flagged, fixes]);

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span>Flag fragile elements and choose fixes</span>
        <button type="button" className={styles.toggle} onClick={() => setSimulated((prev) => !prev)}>
          {simulated ? 'view: deuteranopia' : 'view: normal'}
        </button>
      </div>

      <div className={styles.list}>
        {ITEMS.map((item) => {
          const visibleColor = simulated ? simulateDeuteranopia(item.color) : item.color;
          const isFlagged = !!flagged[item.id];
          return (
            <div key={item.id} className={styles.row}>
              <button
                type="button"
                className={`${styles.flag} ${isFlagged ? styles.flagged : ''}`}
                onClick={() => setFlagged((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
              >
                {isFlagged ? 'flagged' : 'flag'}
              </button>
              <span className={styles.dot} style={{ backgroundColor: visibleColor }} />
              <span className={styles.label}>{item.label}</span>
              <select
                className={styles.select}
                value={fixes[item.id] ?? ''}
                onChange={(event) => {
                  const value = event.target.value as Fix | '';
                  setFixes((prev) => ({ ...prev, [item.id]: value }));
                }}
              >
                <option value="">Choose fix...</option>
                {(Object.keys(FIX_LABELS) as Fix[]).map((fix) => (
                  <option key={fix} value={fix}>{FIX_LABELS[fix]}</option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      <p className={styles.help}>
        Tip: Only the three fragile rows need a fix selection.
      </p>

      <div className={styles.status}>
        <p className={scored.flagsGood ? styles.good : styles.bad}>Flagging: mark exactly the 3 fragile items</p>
        <p className={scored.fixesGood ? styles.good : styles.bad}>Fixes: each fragile item needs a valid repair</p>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.button} disabled={!scored.passed} onClick={onComplete}>
          finish challenge
        </button>
      </div>
    </div>
  );
}
