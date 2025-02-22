import "./Navbar.scss";
import { useState, useRef, useEffect } from "react";
import { nav_items } from "../../assets/data";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import logo from "../../assets/images/logo2.png"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside the dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>

      <div className="mobile-menu">
        <MobileMenu />
      </div>

      <div className="nav-right">
        <div className="dropdown" ref={dropdownRef}>
          <p
            className="nav-link"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Services
            {isDropdownOpen ? (
              <IoIosArrowUp className="arrow-icon" />
            ) : (
              <IoIosArrowDown className="arrow-icon" />
            )}
          </p>

          {isDropdownOpen && (
            <div className="dropdown-content">
              {nav_items.map((item, index) => (
                <Link
                  key={index}
                  to={`/${item.nav_items_link}`}
                  className="dropdown-link"
                  onClick={() => setIsDropdownOpen(false)}
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
  );
};

export default Navbar;
