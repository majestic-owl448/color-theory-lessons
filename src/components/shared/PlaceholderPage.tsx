import styles from './PlaceholderPage.module.css';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className={styles.container}>
      <span className={styles.badge}>coming soon</span>
      <h1 className={styles.heading}>{title}</h1>
      {description && <p className={styles.body}>{description}</p>}
    </div>
  );
}
