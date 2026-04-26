import { useAppDispatch } from '../state/app-context.tsx';

export function useMilestoneCompletion(milestoneId: string) {
  const dispatch = useAppDispatch();

  function completeMilestone() {
    dispatch({ type: 'COMPLETE_MILESTONE', milestoneId });
  }

  return { completeMilestone };
}
