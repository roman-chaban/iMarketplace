import { useContext } from 'react';
import { LanguageContext } from '../components/LanguagesContext/LanguagesContext';

export const useLanguage = () => useContext(LanguageContext);
