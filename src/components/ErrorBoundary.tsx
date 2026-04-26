import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  resetKey: number;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, resetKey: 0 };

  static getDerivedStateFromError(): Partial<State> {
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
            onClick={() => this.setState((s) => ({ hasError: false, resetKey: s.resetKey + 1 }))}
            style={{ marginTop: '1rem', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
          >
            try again
          </button>
        </div>
      );
    }
    return <div key={this.state.resetKey}>{this.props.children}</div>;
  }
}
