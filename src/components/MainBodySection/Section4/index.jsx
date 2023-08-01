import { useEffect, useState } from "react";
import "../MainBodySection.css";
import IMG from "../../../assets/images/man in front of st basil 20.jpg";

export const Section4 = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div className='section' style={{
    left : "0%", transform: "translate(0%, 180%)"}}>
      <div className='content'>
        <div className='main-container-one'>
          <div className='temp-box'>
            <p class="font-size-30"><br></br>잘 나온 예시들을 참고하여,<br></br>
            멋진 이미지를 만들어보세요!</p><br></br>
            <img src={IMG} className="section-img" /><br></br>
            <p>photo of woman, sitting in the terrace cafe at night, <br>
            </br>a crossant on the table, with a view of the Eiffel Tower in Paris</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
