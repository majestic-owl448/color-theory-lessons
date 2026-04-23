import { useState } from 'react';
import shellStyles from './ToolShell.module.css';

interface CardData {
  name: string;
  tint: string;
  description: string;
  risk: string;
  colors: string;
}

const CARDS: CardData[] = [
  {
    name: 'Protanopia',
    tint: '#ff6b6b',
    description:
      'Reduced or absent red-sensitive cone response. Reds appear very dark or muted; red-green distinctions are weakest.',
    risk: 'Status systems using red/green chips with no labels.',
    colors: 'Red, orange, some browns.',
  },
  {
    name: 'Protanomaly',
    tint: '#ff9999',
    description:
      'Reduced red cone sensitivity. Red-green distinctions are weakened but not absent.',
    risk: 'Subtle tonal differences in red-green areas, such as chart series.',
    colors: 'Red and adjacent hues.',
  },
  {
    name: 'Deuteranopia',
    tint: '#6bcb77',
    description:
      'Absent green-sensitive cone response. Green and red become hard to tell apart; this is the most common severe type.',
    risk: 'Red-green success/error states, traffic-light color systems.',
    colors: 'Green, red, and orange.',
  },
  {
    name: 'Deuteranomaly',
    tint: '#99d9a0',
    description:
      'Reduced green cone sensitivity. The most common form of CVD. Red-green distinctions are weakened.',
    risk: 'Maps and charts using red/green with no direct labels.',
    colors: 'Green and red hues.',
  },
  {
    name: 'Tritanopia',
    tint: '#4d9de0',
    description:
      'Absent or reduced blue-sensitive cone response. Blue and yellow become hard to tell apart.',
    risk: 'Blue-heavy UI with yellow warnings or highlights.',
    colors: 'Blue and yellow.',
  },
  {
    name: 'Achromatopsia',
    tint: '#aaaaaa',
    description:
      'Rare condition: very limited or absent cone function. Only luminance (lightness) is perceived.',
    risk: 'Any interface relying on hue for meaning without sufficient lightness contrast.',
    colors: 'All hues appear as shades of gray.',
  },
];

interface VisionCardsToolProps {
  interactive?: boolean;
  onComplete?: () => void;
  previewExpandedNames?: string[];
}

export function VisionCardsTool({ interactive = false, onComplete, previewExpandedNames }: VisionCardsToolProps) {
  const [expanded, setExpanded] = useState<boolean[]>(
    CARDS.map((c) => previewExpandedNames?.includes(c.name) ?? false)
  );
  const [everExpanded, setEverExpanded] = useState<boolean[]>(CARDS.map(() => false));
  const [completed, setCompleted] = useState(false);

  function toggleCard(idx: number) {
    if (!interactive) return;
    const nextExpanded = [...expanded];
    nextExpanded[idx] = !nextExpanded[idx];
    setExpanded(nextExpanded);

    const nextEver = [...everExpanded];
    nextEver[idx] = true;
    setEverExpanded(nextEver);

    if (nextEver.every(Boolean) && !completed) {
      setCompleted(true);
      onComplete?.();
    }
  }

  const allExplored = everExpanded.every(Boolean);

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>vision types</span>

      {!interactive && (
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
          Expand cards to learn about each type of color vision deficiency.
        </p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {CARDS.map((card, idx) => {
          const isOpen = expanded[idx];
          const wasSeen = everExpanded[idx];
          return (
            <div
              key={card.name}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => toggleCard(idx)}
                disabled={!interactive}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.55rem 0.75rem',
                  background: isOpen
                    ? `color-mix(in srgb, ${card.tint} 12%, var(--surface))`
                    : 'transparent',
                  border: 'none',
                  cursor: interactive ? 'pointer' : 'default',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  width: 12, height: 12, borderRadius: '50%',
                  background: card.tint, flexShrink: 0, border: '1px solid var(--border)',
                }} />
                <strong style={{ fontSize: '0.85rem', flex: 1 }}>{card.name}</strong>
                {wasSeen && !isOpen && (
                  <span style={{ fontSize: '0.72rem', color: 'var(--accent-success)' }}>✓</span>
                )}
                {interactive && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                    {isOpen ? '▲' : '▼'}
                  </span>
                )}
              </button>

              {isOpen && (
                <div style={{
                  padding: '0 0.75rem 0.65rem',
                  background: `color-mix(in srgb, ${card.tint} 5%, var(--surface))`,
                }}>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '0.35rem' }}>
                    {card.description}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>
                    <strong>Common risk:</strong> {card.risk}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', margin: 0 }}>
                    <strong>Affected colors:</strong> {card.colors}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {allExplored && (
        <p style={{ color: 'var(--accent-success)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          All vision types explored. Design for the range, not just your own experience.
        </p>
      )}
    </div>
  );
}
