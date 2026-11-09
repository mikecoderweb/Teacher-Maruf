import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('tm-lang') || 'uz';
    } catch {
      return 'uz';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('tm-lang', lang);
    } catch {
      /* storage unavailable: language still works for this session */
    }
  }, [lang]);

  // t('key') returns a string, array or object; function values take arguments.
  const t = (key, ...args) => {
    const value = translations[lang]?.[key] ?? translations.en[key] ?? key;
    return typeof value === 'function' ? value(...args) : value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
