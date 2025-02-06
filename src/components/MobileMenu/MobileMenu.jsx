import { useState } from "react";
import "./MobileMenu.scss";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { nav_items } from "../../assets/data";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Menu
        right
        isOpen={isOpen}
        onStateChange={({ isOpen }) => setIsOpen(isOpen)}
      >
        <Link className="menu-item" to="/" onClick={handleCloseMenu}>
          Home
        </Link>

        <Link className="menu-item" to="/about-us" onClick={handleCloseMenu}>
          About Us
        </Link>

        <p className="menu-item">Services :</p>

        {nav_items.map((item) => (
          <Link
            key={item.nav_items_name}
            to={`/${item.nav_items_link}`}
            onClick={handleCloseMenu}
            className="mobile-links"
          >
            {item.nav_items_name}
          </Link>
        ))}
      </Menu>
    </div>
  );
};
export default MobileMenu;
