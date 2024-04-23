import { FC } from 'react';
import { Router } from './common/Router/Router';
import { RouterProvider } from 'react-router-dom';
import './assets/styles/main.module.scss';

export const App: FC = () => {
  return <RouterProvider router={Router} />;
};
