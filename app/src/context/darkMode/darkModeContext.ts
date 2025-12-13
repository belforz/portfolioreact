import { createContext } from 'react';

export interface DarkModeContextType {
  darkModeActive: boolean;
  toggleDarkMode: () => void;
  initialMode?: 'light' | 'dark';
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export default DarkModeContext;
