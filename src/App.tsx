import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './state/app-context.tsx';
import { AppShell } from './components/layout/AppShell.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { LessonPage } from './pages/LessonPage.tsx';
import { PlaceholderPage } from './components/shared/PlaceholderPage.tsx';

export function App() {
  return (
    <AppProvider>
      <HashRouter>
        <AppShell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lesson/:lessonId" element={<LessonPage />} />
            <Route
              path="/sandbox"
              element={
                <PlaceholderPage
                  title="Sandbox"
                  description="Free-play with all color tools in one place."
                />
              }
            />
            <Route
              path="/quiz/:quizId"
              element={
                <PlaceholderPage
                  title="Quiz"
                  description="Test your knowledge after completing a unit."
                />
              }
            />
            <Route
              path="/glossary"
              element={
                <PlaceholderPage
                  title="Glossary"
                  description="Definitions for every color theory term used in the course."
                />
              }
            />
            <Route
              path="/review"
              element={
                <PlaceholderPage
                  title="Review"
                  description="Spaced-repetition review of completed lessons."
                />
              }
            />
            <Route
              path="/capstone"
              element={
                <PlaceholderPage
                  title="Capstone"
                  description="Apply everything you've learned in a final project."
                />
              }
            />
            <Route
              path="/settings"
              element={
                <PlaceholderPage
                  title="Settings"
                  description="Accessibility preferences and progress management."
                />
              }
            />
          </Routes>
        </AppShell>
      </HashRouter>
    </AppProvider>
  );
}
