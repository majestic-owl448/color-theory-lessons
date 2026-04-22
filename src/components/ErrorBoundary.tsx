import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-foreground)' }}>
          <p style={{ color: 'var(--accent-danger)' }}>something went wrong.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{ marginTop: '1rem', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
          >
            try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
