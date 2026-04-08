import { useState, useRef } from 'react';
import shellStyles from './ToolShell.module.css';

interface Pattern {
  id: string;
  name: string;
  cueOptions: string[];
  brokenPreview: React.ReactNode;
  repairedPreview: (checked: string[]) => React.ReactNode;
}

const PATTERNS: Pattern[] = [
  {
    id: 'required-field',
    name: 'Required field',
    cueOptions: ['Add "Required" text label', 'Add asterisk legend note', 'Add field outline style'],
    brokenPreview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
        <label style={{ fontSize: '0.75rem', color: '#111' }}>
          Email <span style={{ color: '#ef4444', fontWeight: 700 }}>*</span>
        </label>
        <input readOnly value="" placeholder="Enter email" style={{ padding: '0.3rem 0.4rem', fontSize: '0.78rem', border: '1px solid #d1d5db', borderRadius: 3, width: '100%', boxSizing: 'border-box' }} />
      </div>
    ),
    repairedPreview: (checked) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
        <label style={{ fontSize: '0.75rem', color: '#111', display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
          Email <span style={{ color: '#ef4444', fontWeight: 700 }}>*</span>
          {checked.includes('Add "Required" text label') && <span style={{ color: '#ef4444', fontSize: '0.7rem' }}>(required)</span>}
        </label>
        <input
          readOnly value="" placeholder="Enter email"
          style={{
            padding: '0.3rem 0.4rem', fontSize: '0.78rem', borderRadius: 3,
            border: checked.includes('Add field outline style') ? '2px solid #ef4444' : '1px solid #d1d5db',
            width: '100%', boxSizing: 'border-box',
          }}
        />
        {checked.includes('Add asterisk legend note') && (
          <p style={{ fontSize: '0.68rem', color: '#6b7280', margin: 0 }}>* indicates a required field</p>
        )}
      </div>
    ),
  },
  {
    id: 'error-state',
    name: 'Error state',
    cueOptions: ['Add error icon (✕)', 'Add error message text', 'Add bold label'],
    brokenPreview: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
        <label style={{ fontSize: '0.75rem', color: '#111' }}>Email</label>
        <input readOnly value="notvalid" style={{ padding: '0.3rem 0.4rem', fontSize: '0.78rem', border: '2px solid #ef4444', borderRadius: 3, width: '100%', boxSizing: 'border-box' }} />
      </div>
    ),
    repairedPreview: (checked) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
        <label style={{ fontSize: '0.75rem', color: '#111', fontWeight: checked.includes('Add bold label') ? 700 : 400 }}>Email</label>
        <input readOnly value="notvalid" style={{ padding: '0.3rem 0.4rem', fontSize: '0.78rem', border: '2px solid #ef4444', borderRadius: 3, width: '100%', boxSizing: 'border-box' }} />
        {(checked.includes('Add error icon (✕)') || checked.includes('Add error message text')) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            {checked.includes('Add error icon (✕)') && <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.8rem' }}>✕</span>}
            {checked.includes('Add error message text') && <span style={{ color: '#ef4444', fontSize: '0.72rem' }}>Please enter a valid email address</span>}
          </div>
        )}
      </div>
    ),
  },
  {
    id: 'chart-series',
    name: 'Chart series',
    cueOptions: ['Add direct labels', 'Add pattern fills', 'Add value labels'],
    brokenPreview: (
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end', height: 60 }}>
        {[{ h: 80, color: '#22c55e', label: 'A' }, { h: 55, color: '#ef4444', label: 'B' }, { h: 70, color: '#3b82f6', label: 'C' }].map((bar) => (
          <div key={bar.label} style={{ flex: 1, height: `${bar.h}%`, background: bar.color, borderRadius: '3px 3px 0 0' }} />
        ))}
      </div>
    ),
    repairedPreview: (checked) => (
      <div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end', height: 60, position: 'relative' }}>
          {[{ h: 80, color: '#22c55e', label: 'A', val: '80' }, { h: 55, color: '#ef4444', label: 'B', val: '55' }, { h: 70, color: '#3b82f6', label: 'C', val: '70' }].map((bar) => (
            <div key={bar.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
              {checked.includes('Add value labels') && (
                <span style={{ fontSize: '0.65rem', color: '#333', marginBottom: '0.1rem' }}>{bar.val}</span>
              )}
              <div
                style={{
                  width: '100%', height: `${bar.h}%`,
                  background: checked.includes('Add pattern fills')
                    ? `repeating-linear-gradient(45deg, ${bar.color}, ${bar.color} 2px, transparent 2px, transparent 6px)`
                    : bar.color,
                  borderRadius: '3px 3px 0 0',
                  position: 'relative',
                }}
              >
                {checked.includes('Add direct labels') && (
                  <span style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', fontSize: '0.65rem', color: bar.color, fontWeight: 700 }}>{bar.label}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'selected-tab',
    name: 'Selected tab',
    cueOptions: ['Add bottom border', 'Add bold text', 'Add checkmark'],
    brokenPreview: (
      <div style={{ display: 'flex', gap: 0 }}>
        {['Overview', 'Details', 'Settings'].map((tab, i) => (
          <div
            key={tab}
            style={{
              padding: '0.3rem 0.6rem', fontSize: '0.78rem',
              background: i === 0 ? '#eff6ff' : 'transparent',
              color: i === 0 ? '#1d4ed8' : '#6b7280',
              cursor: 'default',
            }}
          >
            {tab}
          </div>
        ))}
      </div>
    ),
    repairedPreview: (checked) => (
      <div style={{ display: 'flex', gap: 0 }}>
        {['Overview', 'Details', 'Settings'].map((tab, i) => (
          <div
            key={tab}
            style={{
              padding: '0.3rem 0.6rem', fontSize: '0.78rem',
              background: i === 0 ? '#eff6ff' : 'transparent',
              color: i === 0 ? '#1d4ed8' : '#6b7280',
              fontWeight: i === 0 && checked.includes('Add bold text') ? 700 : 400,
              borderBottom: i === 0 && checked.includes('Add bottom border') ? '2px solid #1d4ed8' : '2px solid transparent',
              cursor: 'default',
              display: 'flex', alignItems: 'center', gap: '0.2rem',
            }}
          >
            {i === 0 && checked.includes('Add checkmark') && <span style={{ fontSize: '0.7rem' }}>✓</span>}
            {tab}
          </div>
        ))}
      </div>
    ),
  },
];

interface ColorAloneRebuildToolProps {
  interactive?: boolean;
  onComplete?: () => void;
}

export function ColorAloneRebuildTool({ interactive = false, onComplete }: ColorAloneRebuildToolProps) {
  const [checked, setChecked] = useState<Record<string, string[]>>(
    Object.fromEntries(PATTERNS.map((p) => [p.id, []])),
  );
  const [repaired, setRepaired] = useState<Record<string, boolean>>({});
  const completed = useRef(false);

  function toggleCue(patternId: string, cue: string) {
    if (!interactive || completed.current) return;
    setChecked((prev) => {
      const current = prev[patternId];
      const next = current.includes(cue) ? current.filter((c) => c !== cue) : [...current, cue];
      const isRepaired = next.length >= 1;
      setRepaired((prevR) => {
        const nextR = { ...prevR, [patternId]: isRepaired };
        const allRepaired = PATTERNS.every((p) => nextR[p.id]);
        if (allRepaired && !completed.current) {
          completed.current = true;
          onComplete?.();
        }
        return nextR;
      });
      return { ...prev, [patternId]: next };
    });
  }

  const repairedCount = Object.values(repaired).filter(Boolean).length;

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>color-only rebuild</span>

      {interactive && (
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
          Add at least one non-color cue to each pattern. ({repairedCount}/{PATTERNS.length} repaired)
        </p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {PATTERNS.map((pattern) => {
          const patternChecked = checked[pattern.id];
          const isRepaired = repaired[pattern.id];

          return (
            <div
              key={pattern.id}
              style={{
                border: `1px solid ${isRepaired ? 'var(--success)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '0.65rem',
                background: isRepaired ? 'color-mix(in srgb, var(--success) 6%, transparent)' : 'transparent',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <p style={{ fontWeight: 600, fontSize: '0.8rem', margin: 0, color: 'var(--foreground)' }}>{pattern.name}</p>
                {isRepaired && <span style={{ fontSize: '0.72rem', color: 'var(--success)' }}>✓ repaired</span>}
              </div>

              {/* Before / After */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <div>
                  <p style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Before</p>
                  <div style={{ background: '#ffffff', borderRadius: 'var(--radius-sm)', padding: '0.5rem', border: '1px solid #eee' }}>
                    {pattern.brokenPreview}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>After</p>
                  <div style={{ background: '#ffffff', borderRadius: 'var(--radius-sm)', padding: '0.5rem', border: `1px solid ${isRepaired ? '#bbf7d0' : '#eee'}` }}>
                    {patternChecked.length > 0 ? pattern.repairedPreview(patternChecked) : pattern.brokenPreview}
                  </div>
                </div>
              </div>

              {interactive && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {pattern.cueOptions.map((cue) => (
                    <label key={cue} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={patternChecked.includes(cue)}
                        onChange={() => toggleCue(pattern.id, cue)}
                        style={{ accentColor: 'var(--accent)' }}
                      />
                      {cue}
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {completed.current && (
        <p style={{ color: 'var(--success)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          ✓ All patterns rebuilt. Each now communicates through multiple channels.
        </p>
      )}
    </div>
  );
}
