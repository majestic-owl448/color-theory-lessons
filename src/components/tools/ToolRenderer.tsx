import { lazy, Suspense } from 'react';
import type { ReactNode } from 'react';
import type { LessonConfig } from '../../types/lesson.ts';
import shellStyles from './ToolShell.module.css';

const BeforeAfterTool = lazy(() => import('./BeforeAfterTool.tsx').then((m) => ({ default: m.BeforeAfterTool })));
const HSLSliderTool = lazy(() => import('./HSLSliderTool.tsx').then((m) => ({ default: m.HSLSliderTool })));
const ContrastTool = lazy(() => import('./ContrastTool.tsx').then((m) => ({ default: m.ContrastTool })));
const TemperatureSorterTool = lazy(() => import('./TemperatureSorterTool.tsx').then((m) => ({ default: m.TemperatureSorterTool })));
const ColorWheelTool = lazy(() => import('./ColorWheelTool.tsx').then((m) => ({ default: m.ColorWheelTool })));
const AdditiveSortTool = lazy(() => import('./AdditiveSortTool.tsx').then((m) => ({ default: m.AdditiveSortTool })));
const RGBMixerTool = lazy(() => import('./RGBMixerTool.tsx').then((m) => ({ default: m.RGBMixerTool })));
const MismatchExplainerTool = lazy(() => import('./MismatchExplainerTool.tsx').then((m) => ({ default: m.MismatchExplainerTool })));
const BackgroundShiftTool = lazy(() => import('./BackgroundShiftTool.tsx').then((m) => ({ default: m.BackgroundShiftTool })));
const InterfaceTunerTool = lazy(() => import('./InterfaceTunerTool.tsx').then((m) => ({ default: m.InterfaceTunerTool })));
const FormatRevealTool = lazy(() => import('./FormatRevealTool.tsx').then((m) => ({ default: m.FormatRevealTool })));
const HexRgbEditorTool = lazy(() => import('./HexRgbEditorTool.tsx').then((m) => ({ default: m.HexRgbEditorTool })));
const HslPlaygroundTool = lazy(() => import('./HslPlaygroundTool.tsx').then((m) => ({ default: m.HslPlaygroundTool })));
const AlphaLayerTool = lazy(() => import('./AlphaLayerTool.tsx').then((m) => ({ default: m.AlphaLayerTool })));
const ThemeSandboxTool = lazy(() => import('./ThemeSandboxTool.tsx').then((m) => ({ default: m.ThemeSandboxTool })));
const TokenMapTool = lazy(() => import('./TokenMapTool.tsx').then((m) => ({ default: m.TokenMapTool })));
const ColorSpaceLabTool = lazy(() => import('./ColorSpaceLabTool.tsx').then((m) => ({ default: m.ColorSpaceLabTool })));
const EyeDiagramTool = lazy(() => import('./EyeDiagramTool.tsx').then((m) => ({ default: m.EyeDiagramTool })));
const VisionCardsTool = lazy(() => import('./VisionCardsTool.tsx').then((m) => ({ default: m.VisionCardsTool })));
const InterfaceGalleryTool = lazy(() => import('./InterfaceGalleryTool.tsx').then((m) => ({ default: m.InterfaceGalleryTool })));
const ColorOnlyDetectorTool = lazy(() => import('./ColorOnlyDetectorTool.tsx').then((m) => ({ default: m.ColorOnlyDetectorTool })));
const StateWorkshopTool = lazy(() => import('./StateWorkshopTool.tsx').then((m) => ({ default: m.StateWorkshopTool })));
const InclusiveReviewTool = lazy(() => import('./InclusiveReviewTool.tsx').then((m) => ({ default: m.InclusiveReviewTool })));
const TextContrastLabTool = lazy(() => import('./TextContrastLabTool.tsx').then((m) => ({ default: m.TextContrastLabTool })));
const ComponentCheckerTool = lazy(() => import('./ComponentCheckerTool.tsx').then((m) => ({ default: m.ComponentCheckerTool })));
const AuditFlowTool = lazy(() => import('./AuditFlowTool.tsx').then((m) => ({ default: m.AuditFlowTool })));
const PatternRepairTool = lazy(() => import('./PatternRepairTool.tsx').then((m) => ({ default: m.PatternRepairTool })));
const SystemComparisonTool = lazy(() => import('./SystemComparisonTool.tsx').then((m) => ({ default: m.SystemComparisonTool })));
const RoleBuilderTool = lazy(() => import('./RoleBuilderTool.tsx').then((m) => ({ default: m.RoleBuilderTool })));
const BrandPressureTool = lazy(() => import('./BrandPressureTool.tsx').then((m) => ({ default: m.BrandPressureTool })));
const DarkTranslatorTool = lazy(() => import('./DarkTranslatorTool.tsx').then((m) => ({ default: m.DarkTranslatorTool })));
const ChartTunerTool = lazy(() => import('./ChartTunerTool.tsx').then((m) => ({ default: m.ChartTunerTool })));
const SystemStressTestTool = lazy(() => import('./SystemStressTestTool.tsx').then((m) => ({ default: m.SystemStressTestTool })));

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

  let tool: ReactNode;

  switch (lesson.interactionType) {
    case 'before-after':
      tool = (
        <BeforeAfterTool
          variant={lesson.id === 'u1-l5' ? 'hierarchy' : 'color-function'}
          interactive={toolUnlocked}
          onComplete={isChallenge ? onChallengeComplete : undefined}
        />
      );
      break;

    case 'slider-explore':
      tool = <HSLSliderTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'contrast-checker':
      tool = <ContrastTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'palette-builder':
      tool = <TemperatureSorterTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'color-wheel':
      tool = <ColorWheelTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'additive-sort':
      tool = <AdditiveSortTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'rgb-mixer':
      tool = <RGBMixerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'mismatch-explainer':
      tool = <MismatchExplainerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'background-shift':
      tool = <BackgroundShiftTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'interface-tuner':
      tool = <InterfaceTunerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'format-reveal':
      tool = <FormatRevealTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'hex-rgb-editor':
      tool = <HexRgbEditorTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'hsl-playground':
      tool = <HslPlaygroundTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'alpha-layer':
      tool = <AlphaLayerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'theme-sandbox':
      tool = <ThemeSandboxTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'token-map':
      tool = <TokenMapTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'color-space-lab':
      tool = <ColorSpaceLabTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'eye-diagram':
      tool = <EyeDiagramTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'vision-cards':
      tool = <VisionCardsTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'interface-gallery':
      tool = <InterfaceGalleryTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'color-only-detector':
      tool = <ColorOnlyDetectorTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'state-workshop':
      tool = <StateWorkshopTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'inclusive-review':
      tool = <InclusiveReviewTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'text-contrast-lab':
      tool = <TextContrastLabTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'component-checker':
      tool = <ComponentCheckerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'audit-flow':
      tool = <AuditFlowTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'pattern-repair':
      tool = <PatternRepairTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'system-comparison':
      tool = <SystemComparisonTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'role-builder':
      tool = <RoleBuilderTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'brand-pressure':
      tool = <BrandPressureTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'dark-translator':
      tool = <DarkTranslatorTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'chart-tuner':
      tool = <ChartTunerTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    case 'system-stress':
      tool = <SystemStressTestTool interactive={toolUnlocked} onComplete={isChallenge ? onChallengeComplete : undefined} />;
      break;

    default:
      tool = (
        <div className={shellStyles.shell}>
          <span className={shellStyles.toolLabel}>interactive tool</span>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
            Tool for <code>{lesson.interactionType}</code> not yet implemented.
          </p>
        </div>
      );
      break;
  }

  return (
    <Suspense
      fallback={
        <div className={shellStyles.shell}>
          <span className={shellStyles.toolLabel}>interactive tool</span>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>loading tool...</p>
        </div>
      }
    >
      {tool}
    </Suspense>
  );
}
