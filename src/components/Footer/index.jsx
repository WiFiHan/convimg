import "./Footer.css";
import IMG from "../../assets/images/img.jpg";
import { useEffect, useState } from "react";

const Footer = () => {

  //Each React jsx file returns HTML COMPONENTS like below
  return (
    <footer className="layout footer p-10 bg-base-200 text-base-content">
      <div className="footer-logos">
        <p className="footer-real-title">
          About us <br></br>
          Footer:: src/components/Footer/index.jsx
        </p>
      </div>
    </footer>
  );
};

export default Footer;
