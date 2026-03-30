import { useState, useMemo } from 'react';
import shellStyles from './ToolShell.module.css';

type Relationship = 'analogous' | 'complementary' | 'triadic';

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const col = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * col).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function getRelatedHues(baseH: number, rel: Relationship): number[] {
  switch (rel) {
    case 'analogous':
      return [(baseH + 30) % 360, (baseH - 30 + 360) % 360];
    case 'complementary':
      return [(baseH + 180) % 360];
    case 'triadic':
      return [(baseH + 120) % 360, (baseH + 240) % 360];
  }
}

interface ColorWheelProps {
  baseH: number;
  relatedH: number[];
  onChange: (h: number) => void;
}

function ColorWheel({ baseH, relatedH, onChange }: ColorWheelProps) {
  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const r = 85;
  const dotR = 10;

  const segments = useMemo(() => {
    const count = 60;
    return Array.from({ length: count }, (_, i) => {
      const startAngle = (i / count) * 360;
      const endAngle = ((i + 1) / count) * 360;
      const s1 = (startAngle - 90) * (Math.PI / 180);
      const e1 = (endAngle - 90) * (Math.PI / 180);
      const x1 = cx + r * Math.cos(s1);
      const y1 = cy + r * Math.sin(s1);
      const x2 = cx + r * Math.cos(e1);
      const y2 = cy + r * Math.sin(e1);
      const xi = cx + (r - 28) * Math.cos(s1);
      const yi = cy + (r - 28) * Math.sin(s1);
      const xi2 = cx + (r - 28) * Math.cos(e1);
      const yi2 = cy + (r - 28) * Math.sin(e1);
      return {
        d: `M ${xi} ${yi} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} L ${xi2} ${yi2} A ${r - 28} ${r - 28} 0 0 0 ${xi} ${yi} Z`,
        hue: startAngle,
      };
    });
  }, []);

  function hueToXY(h: number, radius: number) {
    const angle = (h - 90) * (Math.PI / 180);
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  }

  function handleClick(e: React.MouseEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - cx;
    const y = e.clientY - rect.top - cy;
    const dist = Math.sqrt(x * x + y * y);
    if (dist < r - 28 || dist > r + 5) return;
    const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
    onChange(((Math.round(angle) + 360) % 360));
  }

  const baseDot = hueToXY(baseH, r - 14);
  const relatedDots = relatedH.map((h) => hueToXY(h, r - 14));

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      onClick={handleClick}
      style={{ cursor: 'crosshair', flexShrink: 0 }}
      aria-label="Color wheel — click to select base hue"
    >
      {segments.map((seg, i) => (
        <path key={i} d={seg.d} fill={`hsl(${seg.hue}, 80%, 55%)`} />
      ))}
      {/* Center */}
      <circle cx={cx} cy={cy} r={r - 28} fill="var(--surface)" />
      {/* Related hue dots */}
      {relatedDots.map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r={dotR - 2} fill={`hsl(${relatedH[i]}, 80%, 60%)`} stroke="var(--gray-00)" strokeWidth={2} />
      ))}
      {/* Base hue dot */}
      <circle cx={baseDot.x} cy={baseDot.y} r={dotR} fill={`hsl(${baseH}, 80%, 55%)`} stroke="var(--gray-00)" strokeWidth={2} />
    </svg>
  );
}

interface ColorWheelToolProps {
  onComplete?: () => void;
}

export function ColorWheelTool({ onComplete }: ColorWheelToolProps) {
  const [baseH, setBaseH] = useState(210);
  const [relationship, setRelationship] = useState<Relationship>('complementary');
  const [palette, setPalette] = useState<{ dominant: number; support: number; accent: number } | null>(null);
  const [paletteDone, setPaletteDone] = useState(false);

  const relatedH = getRelatedHues(baseH, relationship);

  const baseColor = hslToHex(baseH, 70, 50);
  const relatedColors = relatedH.map((h) => hslToHex(h, 70, 50));

  const relationshipDesc: Record<Relationship, string> = {
    analogous: 'Adjacent hues — cohesive and calm.',
    complementary: 'Opposite hue — strong contrast and energy.',
    triadic: 'Three equally spaced hues — dynamic but needs restraint.',
  };

  function buildPalette() {
    const accent = relatedH[0];
    const support = relationship === 'analogous' ? relatedH[1] ?? (baseH + 30) % 360 : (baseH + 30) % 360;
    setPalette({ dominant: baseH, support, accent });
  }

  function handleFinish() {
    setPaletteDone(true);
    onComplete?.();
  }

  return (
    <div className={shellStyles.shell}>
      <span className={shellStyles.toolLabel}>color wheel explorer</span>

      <div style={{ display: 'flex', gap: 'var(--spacing-lg)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <ColorWheel baseH={baseH} relatedH={relatedH} onChange={setBaseH} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', flex: 1, minWidth: '180px' }}>
          {/* Base hue control */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--muted)' }}>base hue</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--yellow)' }}>{baseH}°</span>
            </div>
            <input
              type="range"
              min={0}
              max={359}
              value={baseH}
              onChange={(e) => setBaseH(Number(e.target.value))}
              style={{
                width: '100%',
                background: `linear-gradient(to right, hsl(0,80%,55%), hsl(60,80%,55%), hsl(120,80%,55%), hsl(180,80%,55%), hsl(240,80%,55%), hsl(300,80%,55%), hsl(360,80%,55%))`,
                appearance: 'none',
                WebkitAppearance: 'none',
                height: '6px',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
              aria-label={`Base hue: ${baseH}°`}
            />
          </div>

          {/* Relationship selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>relationship</span>
            {(['analogous', 'complementary', 'triadic'] as Relationship[]).map((r) => (
              <button
                key={r}
                onClick={() => setRelationship(r)}
                style={{
                  padding: '0.4rem 0.75rem',
                  background: relationship === r ? 'var(--surface)' : 'transparent',
                  border: `1px solid ${relationship === r ? 'var(--yellow)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-sm)',
                  color: relationship === r ? 'var(--yellow)' : 'var(--secondary-foreground)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                {r}
              </button>
            ))}
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{relationshipDesc[relationship]}</p>
          </div>

          {/* Palette preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>palette preview</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div title={`Base: hsl(${baseH}, 70%, 50%)`} style={{ flex: 3, height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: baseColor }} />
              {relatedColors.map((c, i) => (
                <div key={i} title={`Related: hsl(${relatedH[i]}, 70%, 50%)`} style={{ flex: 1, height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: c }} />
              ))}
              <div style={{ flex: 1, height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--gray-80)' }} title="Neutral" />
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>dominant · support · neutral</span>
          </div>
        </div>
      </div>

      {/* Build palette task */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', textTransform: 'uppercase' }}>build your starter palette</span>
        <p style={{ fontSize: '0.9rem', color: 'var(--secondary-foreground)' }}>
          Choose a relationship, adjust the base hue, then lock in your palette.
        </p>
        {!palette ? (
          <button
            onClick={buildPalette}
            style={{ alignSelf: 'flex-start', padding: '0.5rem 1.25rem', background: 'var(--yellow)', color: 'var(--gray-90)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.85rem', borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer' }}
          >
            lock in this palette
          </button>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <div style={{ display: 'flex', gap: '4px', height: '56px' }}>
              <div style={{ flex: 3, borderRadius: 'var(--radius-sm)', backgroundColor: hslToHex(palette.dominant, 70, 50), display: 'flex', alignItems: 'flex-end', padding: '4px 8px' }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'rgba(0,0,0,0.7)' }}>dominant</span>
              </div>
              <div style={{ flex: 1.5, borderRadius: 'var(--radius-sm)', backgroundColor: hslToHex(palette.support, 60, 55), display: 'flex', alignItems: 'flex-end', padding: '4px 8px' }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'rgba(0,0,0,0.7)' }}>support</span>
              </div>
              <div style={{ flex: 1, borderRadius: 'var(--radius-sm)', backgroundColor: hslToHex(palette.accent, 85, 60), display: 'flex', alignItems: 'flex-end', padding: '4px 8px' }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'rgba(0,0,0,0.7)' }}>accent</span>
              </div>
              <div style={{ flex: 2, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--gray-80)', display: 'flex', alignItems: 'flex-end', padding: '4px 8px' }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>neutral</span>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--secondary-foreground)' }}>
              Relationship: <strong style={{ color: 'var(--primary-foreground)' }}>{relationship}</strong>. The accent creates the strongest visual signal.
            </p>
            {!paletteDone && (
              <button
                onClick={handleFinish}
                style={{ alignSelf: 'flex-start', padding: '0.5rem 1.25rem', background: 'var(--yellow)', color: 'var(--gray-90)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.85rem', borderRadius: 'var(--radius-sm)', border: 'none', cursor: 'pointer' }}
              >
                done →
              </button>
            )}
            {paletteDone && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--green)' }}>
                ✓ palette built. Moving on.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
