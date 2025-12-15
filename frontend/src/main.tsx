import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import { loadTranslations } from "./loadTranslations";

const bootstrap = async () => {
  await loadTranslations(); 

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

bootstrap();
