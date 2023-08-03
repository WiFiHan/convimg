import { useEffect, useState } from "react";
import "../MainBodySection.css";
import IMG from "../../../assets/images/man in front of st basil 20.jpg";


export const Section3 = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div className='section' style={{height:'900px'}}>
      <div className='content'>
        <div className='main-container-2' style={{marginBottom:'100px'}}>
          <div className='temp-box'>
            <p className="font-size-30"><br></br><br></br><br></br>다양한 배경으로 변환!</p>
            <p ><br></br>에펠탑, 경복궁, 콜로세움, 런던아이 등등 <br></br> 유명한 관광명소에 직접 가지 않아도
            text를 통해 <br></br> 구체적으로 배경의 형태를 변경할 수 있습니다. </p>
          </div>
          <div className='temp-box'>
            <img src={IMG} className="section-img" />
          </div>
          <div className='temp-box'>
            <img src={IMG} className="section-img" />
          </div>
          
        </div>
        <div className='main-container-2'>
          <div className='temp-box'>
            <img src={IMG} className="section-img" />
          </div>
          <div className='temp-box'>
            <img src={IMG} className="section-img" />
          </div>
          <div className='temp-box'>
            <p className="font-size-30"><br></br><br></br><br></br>간편한 마스크 수정!</p>
            <p ><br></br>원하는 인물 마스크가 나오지 않았다면, <br></br>
            직접 클릭을 통해 설정해 보세요. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
