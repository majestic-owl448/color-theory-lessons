import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MilestonePlayer } from './MilestonePlayer.tsx';
import { AppProvider } from '../../state/app-provider.tsx';
import { useAppState } from '../../state/app-context.tsx';
import type { MilestoneConfig } from '../../types/milestone.ts';

vi.mock('./ChallengeRenderer.tsx', () => ({ ChallengeRenderer: () => null }));
vi.mock('./InterfaceMockup.tsx', () => ({ InterfaceMockup: () => null }));

function StateReader() {
  const state = useAppState();
  return (
    <div data-testid="completed-milestones">{state.completedMilestones.join(',')}</div>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => cleanup());

function renderMilestone(milestone: MilestoneConfig) {
  return render(
    <MemoryRouter>
      <AppProvider>
        <MilestonePlayer milestone={milestone} />
        <StateReader />
      </AppProvider>
    </MemoryRouter>,
  );
}

const singleQuestionMilestone: MilestoneConfig = {
  id: 'test-milestone',
  unitId: 'unit-99',
  title: 'Test Milestone',
  description: '',
  estimatedMinutes: 5,
  passThreshold: 1,
  parts: [
    {
      kind: 'quiz',
      id: 'part-1',
      title: 'Core Concepts',
      description: 'Check your knowledge',
      questions: [
        {
          id: 'mq1',
          prompt: 'What color is the sky?',
          choices: [
            { id: 'a', label: 'Blue', isCorrect: true },
            { id: 'b', label: 'Red', isCorrect: false },
          ],
        },
      ],
    },
  ],
};

const twoPartMilestone: MilestoneConfig = {
  id: 'two-part-milestone',
  unitId: 'unit-99',
  title: 'Two-Part Milestone',
  description: '',
  estimatedMinutes: 10,
  passThreshold: 2,
  parts: [
    {
      kind: 'quiz',
      id: 'part-1',
      title: 'Part One',
      description: '',
      questions: [
        {
          id: 'p1q1',
          prompt: 'Question one?',
          choices: [
            { id: 'a', label: 'Yes', isCorrect: true },
            { id: 'b', label: 'No', isCorrect: false },
          ],
        },
      ],
    },
    {
      kind: 'quiz',
      id: 'part-2',
      title: 'Part Two',
      description: '',
      questions: [
        {
          id: 'p2q1',
          prompt: 'Question two?',
          choices: [
            { id: 'a', label: 'Maybe', isCorrect: true },
            { id: 'b', label: 'Never', isCorrect: false },
          ],
        },
      ],
    },
  ],
};

describe('MilestonePlayer', () => {
  describe('COMPLETE_MILESTONE dispatch', () => {
    it('dispatches COMPLETE_MILESTONE after completing the only quiz part', async () => {
      renderMilestone(singleQuestionMilestone);

      fireEvent.click(screen.getByRole('button', { name: /Blue/i }));
      fireEvent.click(screen.getByRole('button', { name: 'check' }));
      await waitFor(() => screen.getByRole('button', { name: 'finish milestone →' }));
      fireEvent.click(screen.getByRole('button', { name: 'finish milestone →' }));

      await waitFor(() => {
        expect(screen.getByTestId('completed-milestones').textContent).toContain('test-milestone');
      });
    });

    it('dispatches with the correct milestone id', async () => {
      renderMilestone({ ...singleQuestionMilestone, id: 'milestone-specific-id' });

      fireEvent.click(screen.getByRole('button', { name: /Blue/i }));
      fireEvent.click(screen.getByRole('button', { name: 'check' }));
      fireEvent.click(await screen.findByRole('button', { name: 'finish milestone →' }));

      await waitFor(() => {
        expect(screen.getByTestId('completed-milestones').textContent).toContain('milestone-specific-id');
      });
    });

    it('dispatches only once even if milestone is retried', async () => {
      renderMilestone(singleQuestionMilestone);

      // Complete the milestone
      fireEvent.click(screen.getByRole('button', { name: /Blue/i }));
      fireEvent.click(screen.getByRole('button', { name: 'check' }));
      fireEvent.click(await screen.findByRole('button', { name: 'finish milestone →' }));
      await waitFor(() => screen.getByRole('button', { name: 'retry milestone' }));

      // Retry and complete again
      fireEvent.click(screen.getByRole('button', { name: 'retry milestone' }));
      fireEvent.click(await screen.findByRole('button', { name: /Blue/i }));
      fireEvent.click(screen.getByRole('button', { name: 'check' }));
      fireEvent.click(await screen.findByRole('button', { name: 'finish milestone →' }));

      await waitFor(() => {
        // Reducer is idempotent — still only one entry
        const text = screen.getByTestId('completed-milestones').textContent ?? '';
        const count = text.split(',').filter((s) => s === 'test-milestone').length;
        expect(count).toBe(1);
      });
    });
  });

  describe('multi-part milestone', () => {
    it('dispatches COMPLETE_MILESTONE only after the final part', async () => {
      renderMilestone(twoPartMilestone);

      // Part 1
      fireEvent.click(screen.getByRole('button', { name: /Yes/i }));
      fireEvent.click(screen.getByRole('button', { name: 'check' }));
      fireEvent.click(await screen.findByRole('button', { name: 'finish part →' }));

      // Confirm milestone not yet dispatched at part-summary
      await waitFor(() => screen.getByRole('button', { name: 'next part →' }));
      expect(screen.getByTestId('completed-milestones').textContent).toBe('');

      // Advance to part 2
      fireEvent.click(screen.getByRole('button', { name: 'next part →' }));

      // Part 2
      fireEvent.click(await screen.findByRole('button', { name: /Maybe/i }));
      fireEvent.click(screen.getByRole('button', { name: 'check' }));
      fireEvent.click(await screen.findByRole('button', { name: 'finish milestone →' }));

      await waitFor(() => {
        expect(screen.getByTestId('completed-milestones').textContent).toContain('two-part-milestone');
      });
    });
  });
});
