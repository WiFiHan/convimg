import { useEffect, useState } from "react";
import "../MainBodySection.css";
import IMG from "../../../assets/images/man in front of st basil 20.jpg";


export const Section3 = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <main>
      <div class="main-container">
        <div class="temp-box">
          <img src={IMG} className="section-img" />
        </div>
        <div class="temp-box">
          <br></br>
          <p class="font-size-30 text_left"><br></br><br></br><br></br>간편한 마스크 수정!</p>
          <p class="text_left"><br></br>원하는 인물 마스크가 나오지 않았다면, <br></br>
          직접 클릭을 통해 설정해 보세요. </p>
        </div>
      </div>
    </main>
  );
};

export default Section3;
