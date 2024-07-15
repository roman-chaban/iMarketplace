import { ReactNode, createContext, useState, useEffect } from "react";

interface LanguageProviderProps {
  children: ReactNode;
}

interface LanguageContextProps {
  translations: { [key: string]: string };
  currentLanguage: string;
  handleChangeLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: "en",
  handleChangeLanguage: () => {},
  translations: {},
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    localStorage.getItem("selectedLanguage") || "en"
  );

  const translations = {
    en: "English",
  };

  const handleChangeLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  useEffect(() => {
    localStorage.setItem("selectedLanguage", currentLanguage);
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider
      value={{ translations, currentLanguage, handleChangeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
