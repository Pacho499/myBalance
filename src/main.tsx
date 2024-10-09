import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Importa il nuovo file App

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App /> {/* Usa App al posto di RouterProvider direttamente */}
  </StrictMode>
);
