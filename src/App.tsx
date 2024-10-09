import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { supabase } from "./utils/supabase";
import HeroPage from "./routes/HeroPage";
import HeroDiscover from "./routes/HeroDiscover";
import Header from "./components/Header";
import Login from "./routes/Login";
import { Session } from "@supabase/supabase-js";

const App = () => {
  const [session, setSession] = useState<null | Session>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeroPage />,
    },
    {
      path: "/scopri",
      element: <HeroDiscover />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/homepage",
      element: session ? <h1>homepage</h1> : <Navigate to={"/login"} />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
