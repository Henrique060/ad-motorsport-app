import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt'); // Default to PT
  const [strings, setStrings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    fetch(`/locales/${lang}.json`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (isMounted) {
          setStrings(data);
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.warn('Could not fetch locale file, falling back:', err);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  // Helper function to get nested keys: t('nav.home')
  const t = (path, fallback = '') => {
    if (!strings) return fallback;
    const parts = path.split('.');
    let curr = strings;
    for (const part of parts) {
      if (curr && typeof curr === 'object' && part in curr) {
        curr = curr[part];
      } else {
        return fallback;
      }
    }
    return curr ?? fallback;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, strings, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
