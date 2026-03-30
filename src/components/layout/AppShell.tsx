import type { ReactNode } from 'react';
import { TopNav } from '../nav/TopNav.tsx';
import styles from './AppShell.module.css';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.shell}>
      <TopNav />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
