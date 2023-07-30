import { useEffect, useState } from "react";
import IMG from "../../assets/images/img.jpg";
import "./Header.css";


const Header = () => {

  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div id="header-wrapper" className="flex justify-between bg-base-100">
      <div class="navbar">
        <div class="nav_logo">
          <a href="#">To anywhere </a>
        </div>
        <ul class="navbar__menu">
          <li><i href="#"></i>로그인</li>
          <li><i href="#"></i>회원가입</li>
          <a href="#" class="navbar__toggleBtn">
            <i class="fas fa-hamburger"> = </i>
          </a>
        </ul>
      </div>
    </div>
    
  );
};

export default Header;
