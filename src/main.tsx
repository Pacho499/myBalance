import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeroPage from "./routes/HeroPage";
import HeroDiscover from "./routes/HeroDiscover";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/scopri",
    element: <HeroDiscover />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
