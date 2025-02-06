import "./Footer.scss";
import footer_icon from "../../assets/images/Mastercard.svg";
import footer_icon2 from "../../assets/images/Visa-Electron.svg";
import footer_icon3 from "../../assets/images/Visa-Electron2.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>
          02522-669393 <span>Home</span>
        </p>
        <p>A CIMPRESS company © 2001-2025 Vistaprint. All rights reserved.</p>
        <p>
          Unless stated otherwise, prices are exclusive of delivery and product
          options.
        </p>
      </div>

      <div className="footer-center">
        <img src={footer_icon} alt="Mastercard" />
        <img src={footer_icon2} alt="Visa Electron" />
        <img src={footer_icon3} alt="Visa Electron 2" />
      </div>

      <div className="footer-right">
        <FaFacebookSquare />
        <IoLogoInstagram />
        <FaYoutube />
        <FaXTwitter />
      </div>
    </div>
  );
};

export default Footer;
