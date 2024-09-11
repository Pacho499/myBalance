import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeroPage from "./routes/HeroPage";
import Header from "./components/Header";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <HeroPage />
  </StrictMode>
);
