import { useEffect, useState } from "react";
import "../MainBodySection.css";
import IMG from "../../../assets/images/man in front of st basil 20.jpg";

export const Section2 = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div className='section'>
      <div className='content'>
        <div className='main-container-one'>
          <div className='temp-box' style={{backgroundColor : "white",
              left : "25%", transform: "translate(0%, -50%)"}}>
            <p class="font-size-30">배경 변환을 손쉽게!</p>
            <br></br>
            <p>사진과 바꾸고 싶은 배경을 입력해주면, <br></br>
            간단하게 짧은 시간안에 변환이 가능합니다.</p>
          </div>
        </div>
        
        <div className='main-container-3'>
          <div class="temp-box-3"  style={{backgroundColor : "white",
              left : "25%", }}>
            <img src={IMG} className="section-img" />
            <p>원본</p>
          </div>
          <div class="temp-box-3" style={{backgroundColor : "white",
              left : "25%", }}>
            <img src={IMG} className="section-img" />
            <p>마스크</p>
          </div>
          <div class="temp-box-3" style={{backgroundColor : "white",
              left : "25%", }}>
            <img src={IMG} className="section-img" />
            <p>새 배경 추가</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
