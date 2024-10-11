import { Link } from "react-router-dom";
const AnonHeader = () => {
  return (
    <header>
      <div>
        <p>logo</p>
      </div>
      <div className="header-btn-container">
        <Link to="/login" state={{ iSsignUp: false }}>
          <button className="secondary-btn">Login</button>
        </Link>
        <Link to="/login" state={{ iSsignUp: true }}>
          <button className="cta-btn">Iscriviti</button>
        </Link>
      </div>
    </header>
  );
};

export default AnonHeader;
