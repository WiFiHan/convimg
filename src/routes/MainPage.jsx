//This is main.html
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Section1 } from "../components/MainBodySection/Section1";
import { Section2 } from "../components/MainBodySection/Section2";
import { Section3 } from "../components/MainBodySection/Section3";
import { Section4 } from "../components/MainBodySection/Section4";


const MainPage = () => {

  //Each React jsx file returns HTML COMPONENTS like below
  return (
    <div>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  );
};

export default MainPage;