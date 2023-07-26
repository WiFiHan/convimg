//This is view.html
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ViewBodySection } from "../components/ViewBodySection";


const ViewPage = () => {

  //Each React jsx file returns HTML COMPONENTS like below
  return (
    <div>
      <div>
        This is view.html.
        While DEBUGGING, you can move to main.html by:
        <Link to="/">
            CLICK HERE
        </Link>
      </div>

      <div>
        <ViewBodySection></ViewBodySection>
      </div>
      
    </div>
    
  );
};



export default ViewPage;