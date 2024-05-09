import { ReactNode, createContext, useContext, useState } from 'react';

interface LanguageProviderProps {
  children: ReactNode;
}

interface LanguageContextProps {
  currentLanguage: string;
  handleChangeLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: 'en',
  handleChangeLanguage: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);

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
