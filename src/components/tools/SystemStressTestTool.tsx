import { memo, useState } from 'react';
import { simulateDeuteranopia } from '../../utils/color.ts';
import shellStyles from './ToolShell.module.css';

interface SystemStressTestToolProps {
  interactive?: boolean;
  onComplete?: () => void;
}

type CheckId =
  | 'hierarchy' | 'text-contrast' | 'semantic-clarity'
  | 'dark-mode' | 'chart-readability' | 'cvd-robustness';

interface Check {
  id: CheckId;
  label: string;
  description: string;
  failNote: string;
}

const CHECKS: Check[] = [
  { id: 'hierarchy', label: 'Visual hierarchy', description: 'Primary actions are more prominent than secondary ones. Page backgrounds recede, content surfaces step forward.', failNote: 'Action button blends into secondary controls — no clear prominence difference.' },
  { id: 'text-contrast', label: 'Text contrast', description: 'Body text meets 4.5:1, large text meets 3:1, placeholder text is at least 3:1 on its background.', failNote: 'Placeholder text (#aaa on #fff) is only ~2.3:1 — fails for interactive element context.' },
  { id: 'semantic-clarity', label: 'Semantic clarity', description: 'Success, warning, and error states use clearly different colors and are not easily confused.', failNote: 'Warning uses #ffcc00 (yellow) and success uses a similar yellow-green. Under CVD they are nearly identical.' },
  { id: 'dark-mode', label: 'Dark mode adaptation', description: 'Roles adapt to the dark context — surfaces step up in lightness, text inverts, accent remains visible.', failNote: 'Dark mode uses the same blue accent (#1e40af) that was designed for light — it becomes too dark to see.' },
  { id: 'chart-readability', label: 'Chart readability', description: 'Chart series have adequate contrast with each other and with the chart background. Labels or patterns supplement color.', failNote: 'Chart uses red/green only — indistinguishable under deuteranopia, no labels.' },
  { id: 'cvd-robustness', label: 'CVD robustness', description: 'Interface communicates meaning through shape, text, or icons in addition to color, and palette is legible under deuteranopia simulation.', failNote: 'Error icons are removed — only color distinguishes error from success in the notification row.' },
];

const SYSTEM_COLORS = {
  light: { bg: '#f9fafb', surface: '#ffffff', action: '#1e40af', success: '#16a34a', warning: '#b45309', error: '#dc2626', text: '#111827' },
  dark: { bg: '#0f172a', surface: '#1e293b', action: '#3b82f6', success: '#4ade80', warning: '#fbbf24', error: '#f87171', text: '#f1f5f9' },
};

/**
 * A comprehensive audit tool that simulates a "color system stress test."
 * Users must review a palette across light mode, dark mode, and CVD 
 * simulations, marking each system quality check as 'pass' or 'fail'.
 */
export const SystemStressTestTool = memo(function SystemStressTestTool({ interactive = false, onComplete }: SystemStressTestToolProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [cvd, setCvd] = useState(false);
  const [findings, setFindings] = useState<Record<CheckId, 'pass' | 'fail' | null>>({
    hierarchy: null, 'text-contrast': null, 'semantic-clarity': null,
    'dark-mode': null, 'chart-readability': null, 'cvd-robustness': null,
  });
  const [completed, setCompleted] = useState(false);

  const palette = SYSTEM_COLORS[mode];
  const display = (hex: string) => cvd ? simulateDeuteranopia(hex) : hex;

  /** Marks a specific quality check as Pass or Fail. Triggers onComplete when all are marked. */
  function mark(id: CheckId, result: 'pass' | 'fail') {
    if (!interactive) return;
    setFindings(prev => {
      const next = { ...prev, [id]: result };
      const allMarked = Object.values(next).every(v => v !== null);
      if (allMarked && !completed) {
        setCompleted(true);
        onComplete?.();
      }
      return next;
    });
  }

  const passCount = Object.values(findings).filter(v => v === 'pass').length;
  const failCount = Object.values(findings).filter(v => v === 'fail').length;
  const totalMarked = passCount + failCount;

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>system stress test</span>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
        {(['light', 'dark'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)} disabled={!interactive}
            style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: 4, cursor: interactive ? 'pointer' : 'default', border: 'none',
              background: mode === m ? 'var(--accent-cta)' : 'var(--border)', color: mode === m ? '#000' : 'var(--primary-foreground)' }}>
            {m} mode
          </button>
        ))}
        <button onClick={() => setCvd(v => !v)} disabled={!interactive}
          style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: 4, cursor: interactive ? 'pointer' : 'default', border: 'none',
            background: cvd ? 'var(--accent-cta)' : 'var(--border)', color: cvd ? '#000' : 'var(--primary-foreground)' }}>
          {cvd ? 'CVD sim ON' : 'CVD sim OFF'}
        </button>
      </div>

      {/* Live palette preview */}
      <div style={{ background: display(palette.bg), border: '1px solid var(--border)', borderRadius: 6, padding: '0.75rem', marginBottom: '0.75rem' }}>
        <div style={{ background: display(palette.surface), borderRadius: 4, padding: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <span style={{ color: display(palette.text), fontWeight: 600, fontSize: '0.85rem' }}>Account dashboard</span>
          <span style={{ color: display(palette.text), fontSize: '0.75rem', opacity: 0.6 }}>Manage your account and billing preferences</span>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            <div style={{ background: display(palette.action), color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 4, fontSize: '0.75rem' }}>Save</div>
            <div style={{ background: 'transparent', border: `1px solid ${display(palette.action)}`, color: display(palette.action), padding: '0.2rem 0.6rem', borderRadius: 4, fontSize: '0.75rem' }}>Cancel</div>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.2rem' }}>
            <span style={{ background: display(palette.success), color: '#fff', padding: '0.1rem 0.4rem', borderRadius: 99, fontSize: '0.7rem' }}>● Success</span>
            <span style={{ background: display(palette.warning), color: '#fff', padding: '0.1rem 0.4rem', borderRadius: 99, fontSize: '0.7rem' }}>▲ Warning</span>
            <span style={{ background: display(palette.error), color: '#fff', padding: '0.1rem 0.4rem', borderRadius: 99, fontSize: '0.7rem' }}>✕ Error</span>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {CHECKS.map(check => (
          <div key={check.id} style={{ borderRadius: 4, border: '1px solid var(--border)', padding: '0.5rem 0.6rem',
            background: findings[check.id] === 'pass' ? 'rgba(34,197,94,0.08)' : findings[check.id] === 'fail' ? 'rgba(239,68,68,0.08)' : 'transparent' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--primary-foreground)' }}>{check.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.15rem' }}>{check.description}</div>
                {findings[check.id] === 'fail' && (
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-danger)', marginTop: '0.2rem' }}>⚠ {check.failNote}</div>
                )}
              </div>
              {interactive && (
                <div style={{ display: 'flex', gap: '0.3rem', flexShrink: 0 }}>
                  <button onClick={() => mark(check.id, 'pass')}
                    style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: 3, border: 'none', cursor: 'pointer',
                      background: findings[check.id] === 'pass' ? '#16a34a' : 'var(--border)', color: findings[check.id] === 'pass' ? '#fff' : 'var(--primary-foreground)' }}>
                    ✓ Pass
                  </button>
                  <button onClick={() => mark(check.id, 'fail')}
                    style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: 3, border: 'none', cursor: 'pointer',
                      background: findings[check.id] === 'fail' ? '#dc2626' : 'var(--border)', color: findings[check.id] === 'fail' ? '#fff' : 'var(--primary-foreground)' }}>
                    ✕ Fail
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {interactive && totalMarked > 0 && (
        <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
          {passCount} pass · {failCount} fail · {CHECKS.length - totalMarked} remaining
        </p>
      )}

      {completed && (
        <p style={{ color: 'var(--accent-success)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          Stress test complete. A robust system survives light, dark, chart, alert, and CVD contexts.
        </p>
      )}
    </div>
  );
});
