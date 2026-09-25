import React from "react";
import "../assets/css/Footer.css";
import footerImg from "../assets/img/footer.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ft-img">
        <img src={footerImg} alt="Thank You" />
        <div className="ft-overlay"></div>
      </div>
      <ul className="footer-content">
        <li>Messmer</li>
        <li>Malenia</li>
        <li>Miqela</li>
        <li>Radahn</li>
      </ul>
    </div>
  );
};

export default Footer;
