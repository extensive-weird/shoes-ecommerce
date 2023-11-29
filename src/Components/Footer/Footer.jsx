import React from "react";
import "./Footer.css";
import footer_img from "../Assets/logo.jpg";
import {
  PiInstagramLogo,
  PiWhatsappLogo,
  PiFacebookLogo,
} from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_img} alt="footer" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socials-icons">
        <div className="footer-icons-container">
          <PiInstagramLogo size={25} />
        </div>
        <div className="footer-icons-container">
          <PiFacebookLogo size={25} />
        </div>
        <div className="footer-icons-container">
          <PiWhatsappLogo size={25} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
