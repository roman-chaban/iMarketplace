import { ReactNode, createContext, useState, useEffect } from 'react';

interface LanguageProviderProps {
  children: ReactNode;
}

interface LanguageContextProps {
  currentLanguage: string;
  handleChangeLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: 'en',
  handleChangeLanguage: () => {},
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    localStorage.getItem('selectedLanguage') || 'en'
  );

  const handleChangeLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  useEffect(() => {
    localStorage.setItem('selectedLanguage', currentLanguage);
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
