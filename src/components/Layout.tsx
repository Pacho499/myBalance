import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ session }: { session: boolean }) => {
  return (
    <>
      <Header session={session} />
      <Outlet />
    </>
  );
};

export default Layout;
