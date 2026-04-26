import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderHook, act, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { ReactNode } from 'react';
import { AppProvider } from '../state/app-provider.tsx';
import { useAppState } from '../state/app-context.tsx';
import { useMilestoneCompletion } from './useMilestoneCompletion.ts';

function wrapper({ children }: { children: ReactNode }) {
  return (
    <MemoryRouter>
      <AppProvider>{children}</AppProvider>
    </MemoryRouter>
  );
}

function useTestHook(milestoneId: string) {
  return { hook: useMilestoneCompletion(milestoneId), state: useAppState() };
}

beforeEach(() => localStorage.clear());
afterEach(() => cleanup());

describe('useMilestoneCompletion', () => {
  it('adds the milestone id to completedMilestones', () => {
    const { result } = renderHook(() => useTestHook('milestone-1'), { wrapper });

    act(() => result.current.hook.completeMilestone());

    expect(result.current.state.completedMilestones).toContain('milestone-1');
  });

  it('uses the milestone id provided at hook creation', () => {
    const { result } = renderHook(() => useTestHook('milestone-special'), { wrapper });

    act(() => result.current.hook.completeMilestone());

    expect(result.current.state.completedMilestones).toContain('milestone-special');
    expect(result.current.state.completedMilestones).not.toContain('milestone-1');
  });

  it('is idempotent — completing twice adds the id only once', () => {
    const { result } = renderHook(() => useTestHook('milestone-1'), { wrapper });

    act(() => {
      result.current.hook.completeMilestone();
      result.current.hook.completeMilestone();
    });

    const count = result.current.state.completedMilestones.filter((id) => id === 'milestone-1').length;
    expect(count).toBe(1);
  });
});
