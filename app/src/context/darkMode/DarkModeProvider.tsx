import React, { useEffect, useState, type ReactNode } from 'react';
import DarkModeContext from './darkModeContext';

export const DarkModeProvider: React.FC<{ children: ReactNode, initialMode?: 'light' | 'dark' }> = ({ children, initialMode }) => {
  const [darkModeActive, setDarkModeActive] = useState(false);

  const applyTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentHour = new Date().getHours();
    const isDark = savedTheme === 'dark' || (!savedTheme && (prefersDark || (currentHour >= 18 || currentHour < 6)));
    document.documentElement.classList.toggle('dark', isDark);
    setDarkModeActive(isDark);
  };

  const toggleDarkMode = () => {
    const newTheme = darkModeActive ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme();
  };

  useEffect(() => {
    applyTheme();
    const interval = setInterval(applyTheme, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkModeActive, toggleDarkMode, initialMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
