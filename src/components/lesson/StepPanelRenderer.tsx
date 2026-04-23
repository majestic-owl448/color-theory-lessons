import type { StepPanelConfig } from '../../types/lesson.ts';
import { ColorWheelTool } from '../tools/ColorWheelTool.tsx';
import { HSLSliderTool } from '../tools/HSLSliderTool.tsx';
import { RGBMixerTool } from '../tools/RGBMixerTool.tsx';
import { HslPlaygroundTool } from '../tools/HslPlaygroundTool.tsx';
import { VisionCardsTool } from '../tools/VisionCardsTool.tsx';
import { InterfaceGalleryTool } from '../tools/InterfaceGalleryTool.tsx';

interface Props {
  panel: StepPanelConfig | null | undefined;
}

export default function StepPanelRenderer({ panel }: Props) {
  if (!panel) return null;
  switch (panel.type) {
    case 'color-wheel-preview':
      return <ColorWheelTool interactive={false} previewRelationship={panel.relationship} />;
    case 'hsl-slider-preview':
      return <HSLSliderTool interactive={false} previewDimension={panel.dimension} />;
    case 'rgb-mixer-preview':
      return <RGBMixerTool interactive={false} previewMode={panel.mode} />;
    case 'hsl-playground-preview':
      return <HslPlaygroundTool interactive={false} />;
    case 'vision-cards-preview':
      return <VisionCardsTool interactive={false} previewExpandedNames={panel.expandedNames} />;
    case 'interface-gallery-preview':
      return <InterfaceGalleryTool interactive={false} previewSimulation={panel.simulation} />;
    default:
      return null;
  }
}
