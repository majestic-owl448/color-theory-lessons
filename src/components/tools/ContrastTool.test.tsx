import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ContrastTool } from './ContrastTool.tsx';

beforeEach(() => localStorage.clear());
afterEach(() => cleanup());

describe('ContrastTool', () => {
  describe('completion', () => {
    it('calls onComplete when all three areas reach their threshold', () => {
      const onComplete = vi.fn();
      render(<ContrastTool interactive={true} onComplete={onComplete} />);

      // heading: needs l >= 75 (text lightness)
      fireEvent.change(
        screen.getByRole('slider', { name: /Lightness for Section label/i }),
        { target: { value: '80' } },
      );
      // helper: needs l >= 65 (text lightness)
      fireEvent.change(
        screen.getByRole('slider', { name: /Lightness for Helper text below input/i }),
        { target: { value: '70' } },
      );
      // button: needs l <= 35 (background lightness)
      fireEvent.change(
        screen.getByRole('slider', { name: /Lightness for Submit button/i }),
        { target: { value: '30' } },
      );

      fireEvent.click(screen.getByRole('button', { name: 'check' }));

      expect(onComplete).toHaveBeenCalledOnce();
    });

    it('does not call onComplete when only some areas pass', () => {
      const onComplete = vi.fn();
      render(<ContrastTool interactive={true} onComplete={onComplete} />);

      // Fix heading and helper only — button stays at default (~50), fails (needs <= 35)
      fireEvent.change(
        screen.getByRole('slider', { name: /Lightness for Section label/i }),
        { target: { value: '80' } },
      );
      fireEvent.change(
        screen.getByRole('slider', { name: /Lightness for Helper text below input/i }),
        { target: { value: '70' } },
      );

      fireEvent.click(screen.getByRole('button', { name: 'check' }));

      expect(onComplete).not.toHaveBeenCalled();
    });
  });

  describe('non-interactive mode', () => {
    it('disables all sliders', () => {
      render(<ContrastTool interactive={false} />);

      screen.getAllByRole('slider').forEach((slider) => {
        expect(slider).toBeDisabled();
      });
    });

    it('does not render the check button', () => {
      render(<ContrastTool interactive={false} />);

      expect(screen.queryByRole('button', { name: 'check' })).toBeNull();
    });
  });
});
