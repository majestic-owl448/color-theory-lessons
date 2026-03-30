import type { LessonConfig } from '../../types/lesson.ts';
import { BeforeAfterTool } from './BeforeAfterTool.tsx';
import { HSLSliderTool } from './HSLSliderTool.tsx';
import { ContrastTool } from './ContrastTool.tsx';
import { TemperatureSorterTool } from './TemperatureSorterTool.tsx';
import { ColorWheelTool } from './ColorWheelTool.tsx';
import shellStyles from './ToolShell.module.css';

interface ToolRendererProps {
  lesson: LessonConfig;
  phase: 'steps' | 'challenge' | 'quiz' | 'complete';
  onChallengeComplete: () => void;
}

export function ToolRenderer({ lesson, phase, onChallengeComplete }: ToolRendererProps) {
  const isChallenge = phase === 'challenge';

  switch (lesson.interactionType) {
    case 'before-after':
      return (
        <BeforeAfterTool
          variant={lesson.id === 'u1-l5' ? 'hierarchy' : 'color-function'}
          onComplete={isChallenge ? onChallengeComplete : undefined}
        />
      );

    case 'slider-explore':
      return <HSLSliderTool onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'contrast-checker':
      return <ContrastTool onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'palette-builder':
      return <TemperatureSorterTool onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'color-wheel':
      return <ColorWheelTool onComplete={isChallenge ? onChallengeComplete : undefined} />;

    default:
      return (
        <div className={shellStyles.shell}>
          <span className={shellStyles.toolLabel}>interactive tool</span>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
            Tool for <code>{lesson.interactionType}</code> not yet implemented.
          </p>
        </div>
      );
  }
}
