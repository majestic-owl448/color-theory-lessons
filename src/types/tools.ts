export type ToolType =
  | 'color-wheel'
  | 'rgb-mixer'
  | 'palette-builder'
  | 'contrast-checker'
  | 'color-blindness-sim'
  | 'theme-editor'
  | 'code-playground';

export interface ToolConfig {
  id: ToolType;
  title: string;
  description: string;
  availableInSandbox: boolean;
}
