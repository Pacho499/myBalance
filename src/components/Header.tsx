import "../styles/components/Header.css";
import { useMemo } from "react";
import AnonHeader from "./headers/AnonHeader";
import AuthHeader from "./headers/AuthHeader";

const Header = ({ session }: { session: boolean }) => {
  const headerToRender = useMemo(
    () => (session ? <AuthHeader /> : <AnonHeader />),
    [session]
  );

  return headerToRender;
};

export default Header;
