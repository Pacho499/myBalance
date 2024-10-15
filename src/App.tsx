import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { supabase } from "./utils/supabase";
import HeroPage from "./routes/HeroPage";
import HeroDiscover from "./routes/HeroDiscover";
import Login from "./routes/Login";
import { Session } from "@supabase/supabase-js";
import Layout from "./components/Layout";
import HomePage from "./routes/HomePage";

const App = () => {
  const [session, setSession] = useState<null | Session>(null);
  const sessionProp = session ? true : false;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session !== null) {
      localStorage.setItem("userId", session.user.user_metadata.sub);
      localStorage.setItem("username", session.user.user_metadata.username);
      localStorage.setItem("token", session.access_token);
    }
  }, [session]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout session={sessionProp} />,
      children: [
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
          element: <HomePage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
