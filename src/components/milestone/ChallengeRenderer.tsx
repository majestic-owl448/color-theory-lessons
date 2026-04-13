import type { MilestoneChallengeType } from '../../types/milestone.ts';
import { ChannelPredictionChallenge } from './challenges/ChannelPredictionChallenge.tsx';
import { ReadInterfaceChallenge } from './challenges/ReadInterfaceChallenge.tsx';

interface ChallengeRendererProps {
  challengeType: MilestoneChallengeType;
  onComplete: () => void;
}

function UnimplementedChallenge({ challengeType }: { challengeType: MilestoneChallengeType }) {
  return (
    <div>
      <h2>Challenge not implemented yet</h2>
      <p>
        <code>{challengeType}</code> is planned but not wired yet.
      </p>
    </div>
  );
}

export function ChallengeRenderer({ challengeType, onComplete }: ChallengeRendererProps) {
  switch (challengeType) {
    case 'read-interface':
      return <ReadInterfaceChallenge onComplete={onComplete} />;
    case 'channel-prediction':
      return <ChannelPredictionChallenge onComplete={onComplete} />;
    case 'theme-from-scratch':
    case 'simulation-spotter':
    case 'accessibility-rescue':
    case 'semantic-audit':
    case 'dark-mode-stress':
      return <UnimplementedChallenge challengeType={challengeType} />;
  }
}
