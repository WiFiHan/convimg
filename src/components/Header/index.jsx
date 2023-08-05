import { useEffect, useState } from "react";
import Toggle from "../../imgs/icon_nav.png";
import Logo from "../../imgs/tobigs.png";
import "./Header.css";
import "../../App.css";

const Header = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div id="header-wrapper" className="flex justify-between bg-base-100">
      <div class="navbar">
        <div class="nav_logo">
          <img
            src={Logo}
            style={{ width: "45px", height: "45px", borderRadius: "0px" }}
          />
          <a className="logo-font" href="/">
            &nbsp; To anywhere{" "}
          </a>
        </div>
        <ul class="navbar__menu">
          <li>
            <i href="#"></i>로그인
          </li>
          <li>
            <i href="#"></i>회원가입
          </li>
          <img
            src={Toggle}
            style={{ width: "25px", height: "25px", borderRadius: "0px" }}
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;
