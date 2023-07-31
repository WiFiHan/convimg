//This is view.html
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ViewBodySection } from "../components/ViewBodySection";


const ViewPage = () => {

  //Each React jsx file returns HTML COMPONENTS like below
  return (
      <div>
        <ViewBodySection></ViewBodySection>
      </div>
  );
};



export default ViewPage;