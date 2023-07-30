import { useEffect, useState } from "react";
import "../MainBodySection.css";


export const Section2 = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div className="section">
      This is Section2: src/components/MainBodySection/Section2/index.jsx
      <section>
        <div  class = "side_left">
          <h2>left</h2>
          <h2>완벽한 사진 편집</h2>
          <p>피드 사진과 비즈니스 사진을 간단하게 편집하세요</p>
        </div>
        <div class = "side_right">
          <h2>right</h2>
          <h2>완벽한 사진 편집</h2>
          <p>피드 사진과 비즈니스 사진을 간단하게 편집하세요</p>
        </div>
      </section>

    </div>
    
  );
};

export default Section2;
