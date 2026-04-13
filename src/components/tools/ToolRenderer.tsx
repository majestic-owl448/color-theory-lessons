import type { LessonConfig } from '../../types/lesson.ts';
import { BeforeAfterTool } from './BeforeAfterTool.tsx';
import { HSLSliderTool } from './HSLSliderTool.tsx';
import { ContrastTool } from './ContrastTool.tsx';
import { TemperatureSorterTool } from './TemperatureSorterTool.tsx';
import { ColorWheelTool } from './ColorWheelTool.tsx';
import { AdditiveSortTool } from './AdditiveSortTool.tsx';
import { RGBMixerTool } from './RGBMixerTool.tsx';

import { MismatchExplainerTool } from './MismatchExplainerTool.tsx';
import { BackgroundShiftTool } from './BackgroundShiftTool.tsx';
import { InterfaceTunerTool } from './InterfaceTunerTool.tsx';
import { FormatRevealTool } from './FormatRevealTool.tsx';
import { HexRgbEditorTool } from './HexRgbEditorTool.tsx';
import { HslPlaygroundTool } from './HslPlaygroundTool.tsx';
import { AlphaLayerTool } from './AlphaLayerTool.tsx';
import { ThemeSandboxTool } from './ThemeSandboxTool.tsx';
import { TokenMapTool } from './TokenMapTool.tsx';
import { ColorSpaceLabTool } from './ColorSpaceLabTool.tsx';
import { EyeDiagramTool } from './EyeDiagramTool.tsx';
import { VisionCardsTool } from './VisionCardsTool.tsx';
import { InterfaceGalleryTool } from './InterfaceGalleryTool.tsx';
import { ColorOnlyDetectorTool } from './ColorOnlyDetectorTool.tsx';
import { StateWorkshopTool } from './StateWorkshopTool.tsx';
import { InclusiveReviewTool } from './InclusiveReviewTool.tsx';

import { TextContrastLabTool } from './TextContrastLabTool.tsx';
import { ComponentCheckerTool } from './ComponentCheckerTool.tsx';

import { AuditFlowTool } from './AuditFlowTool.tsx';
import { PatternRepairTool } from './PatternRepairTool.tsx';
import { SystemComparisonTool } from './SystemComparisonTool.tsx';
import { RoleBuilderTool } from './RoleBuilderTool.tsx';
import { BrandPressureTool } from './BrandPressureTool.tsx';
import { DarkTranslatorTool } from './DarkTranslatorTool.tsx';
import { ChartTunerTool } from './ChartTunerTool.tsx';
import { SystemStressTestTool } from './SystemStressTestTool.tsx';
import shellStyles from './ToolShell.module.css';

/** Props for the ToolRenderer component. */
interface ToolRendererProps {
  /** The full configuration of the lesson using this tool. */
  lesson: LessonConfig;
  /** The current active phase of the LessonPlayer. */
  phase: 'steps' | 'challenge' | 'quiz' | 'complete';
  /** Whether the tool is open for interaction (unlocked after steps are read). */
  toolUnlocked: boolean;
  /** Callback triggered when the tool's challenge condition is met. */
  onChallengeComplete: () => void;
}

/**
 * A dynamic factory component that renders the correct interactive tool 
 * based on the lesson's interactionType.
 * 
 * It acts as the bridge between the generic LessonPlayer and the 
 * specific logic of 30+ different tools.
 */
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

    case 'rgb-mixer':
      return <RGBMixerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'mismatch-explainer':
      return <MismatchExplainerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'background-shift':
      return <BackgroundShiftTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'interface-tuner':
      return <InterfaceTunerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'format-reveal':
      return <FormatRevealTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'hex-rgb-editor':
      return <HexRgbEditorTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'hsl-playground':
      return <HslPlaygroundTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'alpha-layer':
      return <AlphaLayerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'theme-sandbox':
      return <ThemeSandboxTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'token-map':
      return <TokenMapTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'color-space-lab':
      return <ColorSpaceLabTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'eye-diagram':
      return <EyeDiagramTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'vision-cards':
      return <VisionCardsTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'interface-gallery':
      return <InterfaceGalleryTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'color-only-detector':
      return <ColorOnlyDetectorTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'state-workshop':
      return <StateWorkshopTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'inclusive-review':
      return <InclusiveReviewTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'text-contrast-lab':
      return <TextContrastLabTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'component-checker':
      return <ComponentCheckerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'audit-flow':
      return <AuditFlowTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'pattern-repair':
      return <PatternRepairTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'system-comparison':
      return <SystemComparisonTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'role-builder':
      return <RoleBuilderTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'brand-pressure':
      return <BrandPressureTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'dark-translator':
      return <DarkTranslatorTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'chart-tuner':
      return <ChartTunerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

    case 'system-stress':
      return <SystemStressTestTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;

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
