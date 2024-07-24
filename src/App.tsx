import { FC } from "react";
import { Router } from "./common/Router/Router";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/main.scss";
import { LanguageProvider } from "./components/LanguagesContext/LanguagesContext";
import { TotalProvider } from "./components/TotalContext/TotalContext";

export const App: FC = () => {
  return (
    <TotalProvider>
      <LanguageProvider>
        <RouterProvider router={Router} />
      </LanguageProvider>
    </TotalProvider>
  );
};
