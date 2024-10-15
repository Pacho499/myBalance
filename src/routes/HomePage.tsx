import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) navigate("/login", { state: { iSsignUp: false } });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>ciao sono la homepage</div>;
};

export default HomePage;
