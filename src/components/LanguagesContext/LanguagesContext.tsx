import { ReactNode, createContext, useState } from 'react';

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
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  const handleChangeLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
