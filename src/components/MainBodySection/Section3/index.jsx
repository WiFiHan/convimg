import { useEffect, useState } from "react";
import "../MainBodySection.css";

import IMG4 from "../../../assets/images/Section3-1.jpg";
import IMG5 from "../../../assets/images/Section3-2.jpg";
import IMG6 from "../../../assets/images/Section3-3.jpg";

import IMG7 from "../../../assets/images/Section3-4.jpg";
import IMG8 from "../../../assets/images/Section3-5.jpg";
import IMG9 from "../../../assets/images/Section3-6.jpg";

export const Section3 = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div className="section" style={{ height: "900px", marginTop: "200px" }}>
      <div className="content">
        <div className="main-container-2" style={{ marginBottom: "100px" }}>
          <div className="temp-box">
            <p className="font-size-30">
              <br></br>
              <br></br>
              <br></br>다양한 배경으로 변환
            </p>
            <p>
              <br></br>에펠탑, 경복궁, 콜로세움 등등 <br></br> 유명한
              관광명소에 직접 가지 않아도 <br></br> text를 통해 구체적으로 
              배경의 형태를 <br></br> 변경할 수 있습니다.{" "}
            </p>
          </div>
          <div className="temp-box">
            <img src={IMG4} className="section-img" style={{ width: "350px", }}/>
          </div>
          {/* <div >
            <img src={IMG2} style={{ width: "50px", height:"50px", marginTop:"170px",borderRadius:"0px"}} />
          </div> */}
          <div className="temp-box">
            <img src={IMG6} className="section-img" style={{ width: "350px"}}/>
          </div>
        </div>
        <div
          className="container"
          style={{ marginTop: "-80px", marginBottom: "100px" }}
        >
          <p style={{ margin: "0 190px 0" }}></p>
          <p style={{ margin: "0 0px 0" }}>
            photo of woman,photo of woman, <br></br> photo of woman
          </p>
          <p style={{ margin: "0 60px 0" }}></p>
        </div>
        <div className="main-container-2">
          <div className="temp-box">
            <img src={IMG7} className="section-img" />
          </div>
          {/* <div >
            <img src={IMG2} style={{ width: "50px", height:"50px", marginTop:"170px",borderRadius:"0px"}}/>
          </div> */}
          <div className="temp-box">
            <img src={IMG8} className="section-img" />
          </div>
          <div className="temp-box">
            <p className="font-size-30">
              <br></br>
              <br></br>
              <br></br>완벽한 인물 마스크
            </p>
            <p>
              <br></br>추가로 입력을 하지 않고도 배경과 <br></br>
              전경을 구분하여 마스크를 만듭니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
