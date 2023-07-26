import "./Footer.css";
import IMG from "../../assets/images/img.jpg";
import { useEffect, useState } from "react";

const Footer = () => {

  //Each React jsx file returns HTML COMPONENTS like below
  return (
    <footer className="layout footer p-10 bg-base-200 text-base-content">
      <div className="footer-logos">
        <div>
          <img src={IMG} className="footer-logo" />
        </div>
        <p className="footer-real-title">
          This is Footer:: src/components/Footer/index.jsx
        </p>
      </div>
    </footer>
  );
};

export default Footer;
