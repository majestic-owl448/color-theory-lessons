import type { StepPanelConfig } from '../../types/lesson.ts';
import { ColorWheelTool } from '../tools/ColorWheelTool.tsx';

interface Props {
  panel: StepPanelConfig | null | undefined;
}

export default function StepPanelRenderer({ panel }: Props) {
  if (!panel) return null;
  switch (panel.type) {
    case 'color-wheel-preview':
      return <ColorWheelTool interactive={false} previewRelationship={panel.relationship} />;
    default:
      return null;
  }
}
