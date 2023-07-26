import { useEffect, useState } from "react";
import IMG from "../../assets/images/img.jpg";
import "./Header.css";


const Header = () => {

  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div id="header-wrapper" className="flex justify-between bg-base-100">

        This is Header: src/components/Header/index.jsx

        <div class="nav_logo">
          <i class="what"></i>
          <a href=""> logo </a>
        </div>

        <ul class="navbar__menu">
          <li><a href="#">nav1</a></li>
          <li><a href="#">nav1</a></li>
          <li><a href="https://www.naver.com/">naver</a></li>
          <li><a href="#">nav1</a></li>
        </ul>

        <ul class="navbar__icons">
          <li><i class="fab fa-google"></i>nav2</li>
          <li><i class="fab fa-slack"></i>nav2</li>
        </ul>
        
        <a href="#" class="navbar__toggleBtn">
          <i class="fas fa-hamburger"></i>
        </a>

        <div>
        ----------------------------------------------------------------
        </div>

    </div>
    
  );
};

export default Header;
