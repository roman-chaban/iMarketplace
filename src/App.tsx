import { FC } from 'react';
import { Router } from './common/Router/Router';
import { RouterProvider } from 'react-router-dom';
import './assets/styles/main.scss';
import { LanguageProvider } from './components/LanguagesContext/LanguagesContext';

export const App: FC = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={Router} />
    </LanguageProvider>
  );
};
