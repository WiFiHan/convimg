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
      <div>
        This Page corresponds to main.html: src/routes/MainPage.jsx;
      </div>
      <div>
        While DEBUGGING, you can move to view.html by:
        <Link to="/view">
            CLICK HERE
        </Link>
      </div>
      <div>
        <div>
        ----------------------------------------------------------------
        </div>
        <Section1></Section1>
        <div>
        ----------------------------------------------------------------
        </div>
        <Section2></Section2>
        <div>
        ----------------------------------------------------------------
        </div>
        <Section3></Section3>
        <div>
        ----------------------------------------------------------------
        </div>
        <Section4></Section4>
        <div>
        ----------------------------------------------------------------
        </div>
      </div>
    </div>
  );
};

export default MainPage;