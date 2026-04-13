# Tool Development Guide

Interactive tools are the heart of the Color Theory Lessons app. This guide explains how to build, register, and style new tools.

## Creating a New Tool

All tool components are located in `src/components/tools/`.

### 1. The Standard Tool Component
New tools should follow a specific React functional component pattern.

```tsx
import React, { useState } from 'react';
import styles from './YourTool.module.css';

interface YourToolProps {
  interactive?: boolean;     // Can the user change its state?
  onComplete?: () => void;   // Callback for finishing a challenge
}

export function YourTool({ interactive = true, onComplete }: YourToolProps) {
  const [isFinished, setIsFinished] = useState(false);

  // Logic to handle user interaction
  const handleInteraction = () => {
    if (!interactive) return;
    // ...
    if (/* condition for success */) {
      setIsFinished(true);
      onComplete?.();
    }
  };

  return (
    <div className={styles.container}>
      {/* Your Tool UI */}
    </div>
  );
}
```

### 2. Registering the Tool
There are three steps to making your tool available to lessons:

1.  **Add to InteractionType Enum**: Add a unique string key for your tool in `src/types/lesson.ts`.
2.  **Import in ToolRenderer**: Add your component import to `src/components/tools/ToolRenderer.tsx`.
3.  **Add Switch Case**: Add a new `case` to the `ToolRenderer` component that returns your tool when its `interactionType` matches.

```tsx
// src/components/tools/ToolRenderer.tsx
case 'your-tool-type':
  return (
    <YourTool 
      interactive={toolUnlocked} 
      onComplete={isChallenge ? onChallengeComplete : undefined} 
    />
  );
```

## Styling & Theme Tokens

To maintain the "Command-line Chic" aesthetic, use the CSS custom properties defined in `src/index.css`.

### Common Design Tokens
| Category | Variable | Use Case |
|---|---|---|
| Backgrounds | `--primary-background` | Main app background (Dark) |
| Surfaces | `--surface` | Tool panels, input containers |
| Foregrounds | `--primary-foreground` | Main text (Off-white) |
| Accents | `--accent-cta` | Primary actions (Yellow) |
| Accents | `--accent-success` | Correct states (Green) |
| Accents | `--accent-danger` | Error states (Red) |
| Typography | `--font-mono` | All UI text (Monospace) |

### Best Practices
- **CSS Modules**: Always use `.module.css` files to ensure styles are scoped and do not bleed into other tools.
- **Accessibility**: Ensure that interactive elements respond to both mouse and keyboard inputs where possible. 
- **Tool-Only Logic**: Keep the tool's internal state independent. The tool should not know about the lesson's current step or quiz status.
- **Responsive Layout**: Tools should ideally be designed to fit within the `ToolShell` container, which provides consistent padding and border-styling.
