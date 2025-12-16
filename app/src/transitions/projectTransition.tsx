import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashView from '../components/splash'; 

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* AnimatePresence permite animar componentes quando eles são desmontados da DOM */}
      <AnimatePresence mode="wait">
        {loading && (
          <SplashView 
            key="splash" 
            onComplete={() => setLoading(false)} 
          />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="p-10">
          <h1 className="text-3xl font-bold">Bem-vindo ao App!</h1>
          <p className="mt-4">O conteúdo principal carregou.</p>
        </div>
      )}
    </div>
  );
}

export default App;