import { useParams, Link } from 'react-router-dom';
import { getLessonById } from '../lessons/lesson-registry.ts';
import { LessonPlayer } from '../components/lesson/LessonPlayer.tsx';

export function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  if (!lesson) {
    return (
      <div>
        <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
          lesson not found: {lessonId}
        </p>
        <Link to="/" style={{ marginTop: '1rem', display: 'inline-block' }}>
          ← back to home
        </Link>
      </div>
    );
  }

  return <LessonPlayer lesson={lesson} />;
}
