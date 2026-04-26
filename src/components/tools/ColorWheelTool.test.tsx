import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ColorWheelTool } from './ColorWheelTool.tsx';

beforeEach(() => localStorage.clear());
afterEach(() => cleanup());

describe('ColorWheelTool keyboard accessibility', () => {
  it('SVG wheel is focusable (tabIndex 0) in interactive mode', () => {
    render(<ColorWheelTool interactive={true} />);
    const svg = screen.getByRole('slider', { name: /Color wheel hue selector/i });
    expect(svg).toHaveAttribute('tabindex', '0');
  });

  it('SVG wheel is not focusable (tabIndex -1) in non-interactive mode', () => {
    render(<ColorWheelTool interactive={false} />);
    const svg = screen.getByRole('slider', { name: /Color wheel hue selector/i });
    expect(svg).toHaveAttribute('tabindex', '-1');
  });

  it('ArrowRight increases the hue by 5 degrees', () => {
    render(<ColorWheelTool interactive={true} />);
    const svg = screen.getByRole('slider', { name: /Color wheel hue selector/i });
    const initialHue = Number(svg.getAttribute('aria-valuenow'));

    fireEvent.keyDown(svg, { key: 'ArrowRight' });

    expect(Number(svg.getAttribute('aria-valuenow'))).toBe(initialHue + 5);
  });

  it('ArrowLeft decreases the hue by 5 degrees', () => {
    render(<ColorWheelTool interactive={true} />);
    const svg = screen.getByRole('slider', { name: /Color wheel hue selector/i });
    const initialHue = Number(svg.getAttribute('aria-valuenow'));

    fireEvent.keyDown(svg, { key: 'ArrowLeft' });

    expect(Number(svg.getAttribute('aria-valuenow'))).toBe(initialHue - 5);
  });

  it('hue wraps at 360 degrees', () => {
    render(<ColorWheelTool interactive={true} />);
    const svg = screen.getByRole('slider', { name: /Color wheel hue selector/i });

    // Set hue to 358 via range input, then arrow right twice to cross 360
    const rangeInput = screen.getByRole('slider', { name: /Base hue/i });
    fireEvent.change(rangeInput, { target: { value: '358' } });
    fireEvent.keyDown(svg, { key: 'ArrowRight' });
    fireEvent.keyDown(svg, { key: 'ArrowRight' });

    expect(Number(svg.getAttribute('aria-valuenow'))).toBe(8);
  });

  it('arrow keys have no effect in non-interactive mode', () => {
    render(<ColorWheelTool interactive={false} />);
    const svg = screen.getByRole('slider', { name: /Color wheel hue selector/i });
    const initialHue = Number(svg.getAttribute('aria-valuenow'));

    fireEvent.keyDown(svg, { key: 'ArrowRight' });

    expect(Number(svg.getAttribute('aria-valuenow'))).toBe(initialHue);
  });
});

describe('ColorWheelTool preview mode', () => {
  it('renders without the palette build section when previewRelationship is set', () => {
    render(<ColorWheelTool interactive={false} previewRelationship="complementary" />);
    expect(screen.queryByRole('button', { name: /lock palette/i })).toBeNull();
    expect(screen.queryByRole('button', { name: /build palette/i })).toBeNull();
  });
});
