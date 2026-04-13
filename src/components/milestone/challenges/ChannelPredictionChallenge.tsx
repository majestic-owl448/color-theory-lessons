import { useMemo, useState } from 'react';
import { hexToRgb, rgbToHex } from '../../../utils/color.ts';
import styles from './ChannelPredictionChallenge.module.css';

interface ChannelPredictionChallengeProps {
  onComplete: () => void;
}

type Channel = 'R' | 'G' | 'B';

type Round = {
  id: string;
  dominantHex: string;
  dominantAnswer: Channel;
  mixA: string;
  mixB: string;
  swatches: string[];
  mixAnswer: string;
};

const ROUNDS: Round[] = [
  {
    id: 'r1',
    dominantHex: '#2563eb',
    dominantAnswer: 'B',
    mixA: '#ff0000',
    mixB: '#00ff00',
    swatches: ['#ff00ff', '#ffff00', '#00ffff', '#ffffff'],
    mixAnswer: '#ffff00',
  },
  {
    id: 'r2',
    dominantHex: '#16a34a',
    dominantAnswer: 'G',
    mixA: '#0000ff',
    mixB: '#00ff00',
    swatches: ['#ff0000', '#00ffff', '#ffff00', '#ff00ff'],
    mixAnswer: '#00ffff',
  },
  {
    id: 'r3',
    dominantHex: '#ea580c',
    dominantAnswer: 'R',
    mixA: '#ff0000',
    mixB: '#0000ff',
    swatches: ['#ff00ff', '#00ff00', '#ffffff', '#ffff00'],
    mixAnswer: '#ff00ff',
  },
  {
    id: 'r4',
    dominantHex: '#7c3aed',
    dominantAnswer: 'B',
    mixA: '#00ff00',
    mixB: '#ff00ff',
    swatches: ['#ffffff', '#0000ff', '#ffff00', '#ff0000'],
    mixAnswer: '#ffffff',
  },
];

export function ChannelPredictionChallenge({ onComplete }: ChannelPredictionChallengeProps) {
  const [dominantAnswers, setDominantAnswers] = useState<Record<string, Channel | ''>>({});
  const [mixAnswers, setMixAnswers] = useState<Record<string, string>>({});

  const score = useMemo(() => {
    return ROUNDS.reduce((acc, round) => {
      const dominantCorrect = dominantAnswers[round.id] === round.dominantAnswer;
      const mixCorrect = mixAnswers[round.id]?.toUpperCase() === round.mixAnswer.toUpperCase();
      return acc + (dominantCorrect ? 1 : 0) + (mixCorrect ? 1 : 0);
    }, 0);
  }, [dominantAnswers, mixAnswers]);

  const maxScore = ROUNDS.length * 2;
  const passed = score >= 6;
  const allAnswered = ROUNDS.every((round) => dominantAnswers[round.id] && mixAnswers[round.id]);

  return (
    <div className={styles.panel}>
      <div className={styles.meta}>
        <span>4 prediction rounds</span>
        <span className={styles.strong}>{score} / {maxScore} correct</span>
      </div>

      {ROUNDS.map((round, index) => {
        const rgb = hexToRgb(round.dominantHex);
        const computedMix = rgbToHex({
          r: Math.min(255, hexToRgb(round.mixA).r + hexToRgb(round.mixB).r),
          g: Math.min(255, hexToRgb(round.mixA).g + hexToRgb(round.mixB).g),
          b: Math.min(255, hexToRgb(round.mixA).b + hexToRgb(round.mixB).b),
        }).toLowerCase();

        return (
          <div key={round.id} className={styles.card}>
            <p className={styles.prompt}>Round {index + 1}: Which channel dominates <code>{round.dominantHex}</code> (R:{rgb.r} G:{rgb.g} B:{rgb.b})?</p>
            <div className={styles.choices}>
              {(['R', 'G', 'B'] as Channel[]).map((channel) => (
                <button
                  key={channel}
                  type="button"
                  className={`${styles.choice} ${dominantAnswers[round.id] === channel ? styles.active : ''}`}
                  onClick={() => setDominantAnswers((prev) => ({ ...prev, [round.id]: channel }))}
                >
                  {channel}
                </button>
              ))}
            </div>

            <p className={styles.prompt}>Mix prediction: <code>{round.mixA}</code> + <code>{round.mixB}</code></p>
            <div className={styles.swatches}>
              {round.swatches.map((swatch) => (
                <button
                  key={swatch}
                  type="button"
                  className={`${styles.swatch} ${mixAnswers[round.id] === swatch ? styles.active : ''}`}
                  onClick={() => setMixAnswers((prev) => ({ ...prev, [round.id]: swatch }))}
                >
                  <span className={styles.chip} style={{ backgroundColor: swatch }} />
                  <span className={styles.swatchLabel}>{swatch.toUpperCase()}</span>
                </button>
              ))}
            </div>
            {computedMix !== round.mixAnswer && <p className={styles.prompt}>Round data error detected.</p>}
          </div>
        );
      })}

      <div className={styles.actions}>
        <button type="button" className={styles.button} onClick={onComplete} disabled={!allAnswered || !passed}>
          finish challenge
        </button>
      </div>
    </div>
  );
}
