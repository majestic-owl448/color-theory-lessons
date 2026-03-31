import type { LessonConfig } from '../../types/lesson.ts';
import { BeforeAfterTool } from './BeforeAfterTool.tsx';
import { HSLSliderTool } from './HSLSliderTool.tsx';
import { ContrastTool } from './ContrastTool.tsx';
import { TemperatureSorterTool } from './TemperatureSorterTool.tsx';
import { ColorWheelTool } from './ColorWheelTool.tsx';
import { AdditiveSortTool } from './AdditiveSortTool.tsx';
import shellStyles from './ToolShell.module.css';

interface ToolRendererProps {
  lesson: LessonConfig;
  phase: 'steps' | 'challenge' | 'quiz' | 'complete';
  toolUnlocked: boolean;
  onChallengeComplete: () => void;
}

export function ToolRenderer({ lesson, phase, toolUnlocked, onChallengeComplete }: ToolRendererProps) {
  const isChallenge = phase === 'challenge';

  switch (lesson.interactionType) {
    case 'before-after':
      return (
        <BeforeAfterTool
          variant={lesson.id === 'u1-l5' ? 'hierarchy' : 'color-function'}
          interactive={toolUnlocked}
          onComplete={isChallenge ? onChallengeComplete : undefined}
        />
      );

    case 'slider-explore':
      return <HSLSliderTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'contrast-checker':
      return <ContrastTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'palette-builder':
      return <TemperatureSorterTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'color-wheel':
      return <ColorWheelTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'additive-sort':
      return <AdditiveSortTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

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
