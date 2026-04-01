import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './state/app-context.tsx';
import { AppShell } from './components/layout/AppShell.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { LessonPage } from './pages/LessonPage.tsx';
import { MilestonePage } from './pages/MilestonePage.tsx';
import { PlaceholderPage } from './components/shared/PlaceholderPage.tsx';
import { SettingsPage } from './pages/SettingsPage.tsx';
import { GlossaryPage } from './pages/GlossaryPage.tsx';
import { ReviewPage } from './pages/ReviewPage.tsx';

export function App() {
  return (
    <AppProvider>
      <HashRouter>
        <AppShell>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/milestone/:milestoneId" element={<MilestonePage />} />

            <Route
              path="/quiz/:quizId"
              element={
                <PlaceholderPage
                  title="Quiz"
                  description="Test your knowledge after completing a unit."
                />
              }
            />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route
              path="/capstone"
              element={
                <PlaceholderPage
                  title="Capstone"
                  description="Apply everything you've learned in a final project."
                />
              }
            />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </AppShell>
      </HashRouter>
    </AppProvider>
  );
}
