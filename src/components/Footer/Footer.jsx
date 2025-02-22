import "./Footer.scss";

import footer_icon from "../../assets/images/Mastercard.svg";
import footer_icon2 from "../../assets/images/Visa-Electron.svg";
import footer_icon3 from "../../assets/images/Visa-Electron2.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <p>
            +91 9829142413
            <span>
              <Link to={"/"}>Home</Link>
            </span>
          </p>
          <p>shahazadalisikar@gmail.com</p>
          <p>Near Badri Vihar, Mohalla Shekhpura, Sikar (Raj.)</p>
        </div>

        <div className="footer-right">
          <FaFacebookSquare />
          <IoLogoInstagram />
          <FaYoutube />
          <FaXTwitter />
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Bs Printer. All rights reserved</p>
        <a
          href="https://www.Wingstarnarketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="star-link"
        >
          <p>Developed by Star Marketing</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
