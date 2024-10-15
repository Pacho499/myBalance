import { Link } from "react-router-dom";
import { logout } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

const AuthHeader = () => {
  // TODO: make header for autheticated users
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header>
      <div>
        <p>logo</p>
      </div>
      <div className="header-btn-container">
        <Link to="/homepage" state={{ signUp: false }}>
          <button className="secondary-btn">HomePage</button>
        </Link>
        <Link to="/profile" state={{ signUp: true }}>
          <button className="cta-btn">Profilo</button>
        </Link>
        <button className="secondary-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default AuthHeader;
