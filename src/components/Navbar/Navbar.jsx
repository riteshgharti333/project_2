import "./Navbar.scss";

import { useState } from "react";
import { nav_items } from "../../assets/data";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-left">
          <div className="logo">
            <Link to={"/"}>
              <h1>LOGO</h1>
            </Link>
          </div>
        </div>

        <div className="mobile-menu">
          <MobileMenu />
        </div>

        <div className="nav-right">
          <div
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <p className="nav-link">Services</p>

            {isDropdownOpen && (
              <div className="dropdown-content">
                {nav_items.map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.nav_items_link}`}
                    className="dropdown-link"
                  >
                    {item.nav_items_name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to={"/about-us"} className="nav-link">
            About Us
          </Link>
          <Link to={"/contact-us"} className="nav-link">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
