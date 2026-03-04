import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Landing } from './components/Landing';
import { Quiz } from './components/Quiz';
import { SalesPage } from './components/SalesPage';

type AppState = 'landing' | 'quiz' | 'sales';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');

  return (
    <AnimatePresence mode="wait">
      {appState === 'landing' && (
        <div key="landing">
          <Landing onStart={() => setAppState('quiz')} />
        </div>
      )}
      {appState === 'quiz' && (
        <div key="quiz">
          <Quiz onComplete={() => setAppState('sales')} />
        </div>
      )}
      {appState === 'sales' && (
        <div key="sales">
          <SalesPage />
        </div>
      )}
    </AnimatePresence>
  );
}

