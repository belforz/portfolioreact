import { useState, useEffect } from 'react';
import SplashAnimation from '../components/splash';
import { About } from '../components/about';
import { NavBar } from '../components/cards/NavBar';
import portfolio from '../portfolio';

export default function MainView() {
  const [showSplash, setShowSplash] = useState(portfolio.splashScreen);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark', !darkMode);
    setDarkMode(!darkMode);
  }

  

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  if (showSplash) {
    return <SplashAnimation onComplete={function (): void {
        throw new Error('Function not implemented.');
    } } />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <NavBar showTransition={true} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <section id="landing-page" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">
              {portfolio.greeting.intro} {portfolio.greeting.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {portfolio.greeting.message}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500">
              📍 {portfolio.greeting.basedLocation}
            </p>
          </div>
        </section>

        <About
          content={{
            autobiography: portfolio.about.autobiography,
            photo: portfolio.about.photo1Link
          }}
          transitions={portfolio.transitions}
        />

        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">🚧 Em Construção 🚧</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Outras seções serão implementadas em breve
            </p>

          </div>
        </section>
      </main>
    </div>
  );
}