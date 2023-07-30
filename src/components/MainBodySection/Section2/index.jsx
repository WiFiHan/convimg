import { useEffect, useState } from "react";
import "../MainBodySection.css";
import IMG from "../../../assets/images/man in front of st basil 20.jpg";

export const Section2 = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <main>
      <div class="main-container-one">
        <div class="temp-box">
          <p class="font-size-30">배경 변환을 손쉽게!</p>
          <br></br>
          <p>사진과 바꾸고 싶은 배경을 입력해주면, <br></br>
          간단하게 짧은 시간안에 변환이 가능합니다.</p>
        </div>
      </div>

      <div class="main-container-3">
        <div class="temp-box-3">
          <img src={IMG} className="section-img" />
          <p>원본</p>
        </div>
        <div class="temp-box-3">
          <img src={IMG} className="section-img" />
          <p>마스크</p>
        </div>
        <div class="temp-box-3">
          <img src={IMG} className="section-img" />
          <p>새 배경 추가</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div class="main-container">
        <div class="temp-box">
          <br></br>
          <p class="font-size-30 text_right"><br></br><br></br>다양한 배경으로 변환!</p>
          <p class="text_right"><br></br>에펠탑, 경복궁, 콜로세움, 런던아이 등등 <br></br>
          유명한 관광명소에 직접 가지 않아도 text prompt를 통해 <br></br>
          구체적으로 배경의 형태를 변경할 수 있습니다.</p>
        </div>
        <div class="temp-box">
          <img src={IMG} className="section-img" />
        </div>
      </div>
    </main>
    
  );
};

export default Section2;
