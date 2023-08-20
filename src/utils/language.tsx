import { createContext, useState } from 'react';

const allowedLanguages = ['en', 'ja'] as const;
type LanguageType = (typeof allowedLanguages)[number];

export interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ja',
  setLanguage: () => {
    // dummy implementation
  },
});

const LANGUAGE_CONTEXT_LOCAL_STORAGE_KEY = 'lng';

export const LanguageProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  let savedLanguage: LanguageType;
  const savedLanguageRaw =
    localStorage.getItem(LANGUAGE_CONTEXT_LOCAL_STORAGE_KEY) ?? '';
  if (!(savedLanguageRaw in allowedLanguages)) {
    savedLanguage = 'ja';
  } else {
    savedLanguage = savedLanguageRaw as LanguageType;
  }
  const [language, setLanguage] = useState(savedLanguage);

  const newContext: LanguageContextType = {
    language,
    setLanguage: (language: LanguageType) => {
      localStorage.setItem(LANGUAGE_CONTEXT_LOCAL_STORAGE_KEY, language);
      setLanguage(language);
    },
  };

  return (
    <LanguageContext.Provider value={newContext}>
      {children}
    </LanguageContext.Provider>
  );
};
