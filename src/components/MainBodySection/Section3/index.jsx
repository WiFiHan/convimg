import { useEffect, useState } from "react";
import "../MainBodySection.css";

let style = {
  background:"gray",
}

export const Section3 = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div className="section" style={style}>
      This is Section3: src/components/MainBodySection/Section3/index.jsx
    </div>
  );
};

export default Section3;
