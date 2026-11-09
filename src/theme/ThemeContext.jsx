import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

// Dark (Obsidian/Gold) is the default. The choice is remembered for the next visit.
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('tm-theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('tm-theme', theme);
    } catch {
      /* storage unavailable: theme still works for this visit */
    }
  }, [theme]);

  const toggle = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
