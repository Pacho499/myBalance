import { Link } from "react-router-dom";
const AuthHeader = () => {
  // TODO: make header for autheticated users
  return (
    <header>
      <div>
        <p>logo</p>
      </div>
      <div className="header-btn-container">
        <Link to="/login" state={{ signUp: false }}>
          <button className="secondary-btn">HomePage</button>
        </Link>
        <Link to="/login" state={{ signUp: true }}>
          <button className="cta-btn">Profilo</button>
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;
