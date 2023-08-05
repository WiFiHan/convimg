import "./Footer.css";
import IMG from "../../assets/images/img.jpg";
import { useEffect, useState } from "react";

const Footer = () => {

  //Each React jsx file returns HTML COMPONENTS like below
  return (
    <footer className="layout footer p-10 bg-base-200 text-base-content">
      <div className="footer-logos">
        <p className="footer-real-title" style={{textAlign : "center"}}>
          About us <br></br>
          Team leader : 이기정 <br></br>
          memeber : 위성진, 최다희, 한진모 <br></br>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
