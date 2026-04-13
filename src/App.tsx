import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './state/app-provider.tsx';
import { AppShell } from './components/layout/AppShell.tsx';

const HomePage = lazy(() => import('./pages/HomePage.tsx').then((m) => ({ default: m.HomePage })));
const LessonPage = lazy(() => import('./pages/LessonPage.tsx').then((m) => ({ default: m.LessonPage })));
const MilestonePage = lazy(() => import('./pages/MilestonePage.tsx').then((m) => ({ default: m.MilestonePage })));
const PlaceholderPage = lazy(() => import('./components/shared/PlaceholderPage.tsx').then((m) => ({ default: m.PlaceholderPage })));
const SettingsPage = lazy(() => import('./pages/SettingsPage.tsx').then((m) => ({ default: m.SettingsPage })));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage.tsx').then((m) => ({ default: m.GlossaryPage })));
const ReviewPage = lazy(() => import('./pages/ReviewPage.tsx').then((m) => ({ default: m.ReviewPage })));
const PaletteBuilderPage = lazy(() => import('./pages/PaletteBuilderPage.tsx').then((m) => ({ default: m.PaletteBuilderPage })));

export function App() {
  return (
    <AppProvider>
      <HashRouter>
        <AppShell>
          <Suspense fallback={<p style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>loading...</p>}>
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
              <Route path="/palette-builder" element={<PaletteBuilderPage />} />
              <Route path="/glossary" element={<GlossaryPage />} />
              <Route path="/review" element={<ReviewPage />} />
              <Route
                path="/capstone"
                element={<Navigate to="/milestone/milestone-6" replace />}
              />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Suspense>
        </AppShell>
      </HashRouter>
    </AppProvider>
  );
}
