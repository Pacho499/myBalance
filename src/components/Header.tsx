import "../styles/components/Header.css";
const Header = () => {
  return (
    <header>
      <div>
        <p>logo</p>
      </div>
      <div className="header-btn-container">
        <button className="secondary-btn">Login</button>
        <button className="cta-btn">Iscriviti</button>
      </div>
    </header>
  );
};

export default Header;
