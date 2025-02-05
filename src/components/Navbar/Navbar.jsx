import "./Navbar.scss";

import { nav_items } from "../../assets/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-left">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
        </div>

        <div className="nav-right"></div>
      </div>

      <div className="nav-bottom">
        {nav_items.map((item) => (
          <span key={item} className="nav-bottom-links">
            <Link to={`/${item.nav_items_link}`}>{item.nav_items_name}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
