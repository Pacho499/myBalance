import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { getUserData, supabase } from "./utils/supabase";
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

    getUserData().then((userMetadata) => {
      localStorage.setItem("userId", userMetadata.sub);
      localStorage.setItem("username", userMetadata.username);
    });
  }, []);

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
          element: session ? <HomePage /> : <Navigate to={"/login"} />,
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
