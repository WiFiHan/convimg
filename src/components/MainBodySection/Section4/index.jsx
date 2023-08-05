import { useEffect, useState } from "react";
import "../MainBodySection.css";
import IMG1 from "../../../assets/images/Section2-1.jpg";
import IMG2 from "../../../assets/images/Section2-2.jpg";
import IMG3 from "../../../assets/images/Section2-3.jpg";

import IMG4 from "../../../assets/images/Section3-1.jpg";
import IMG5 from "../../../assets/images/Section3-2.jpg";
import IMG6 from "../../../assets/images/Section3-3.jpg";

import IMG7 from "../../../assets/images/Section3-4.jpg";
import IMG8 from "../../../assets/images/Section3-5.jpg";
import IMG9 from "../../../assets/images/Section3-6.jpg";

import IMG10 from "../../../assets/images/Section4-1.jpg";
import IMG11 from "../../../assets/images/Section4-2.jpg";
import IMG12 from "../../../assets/images/Section4-3.jpg";

import IMG13 from "../../../assets/images/Section4-4.jpg";
import IMG14 from "../../../assets/images/Section4-5.jpg";
import IMG15 from "../../../assets/images/Section4-6.jpg";

// npm install swiper@6.0.2
// npm install --save sass
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination , Autoplay, EffectCoverflow} from "swiper";

import 'swiper/scss'
import 'swiper/scss/navigation'

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation, Pagination])

export const Section4 = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <div className='section' style={{height:'583px'}}>
      <div className='content' style={{width:'100%'}}>
        <div className='main-container-one'>
          <div className='temp-box'>
            <p class="font-size-30"><br></br>잘 나온 예시들을 참고하여,<br></br>
            멋진 이미지를 만들어보세요!</p><br></br>
            <Swiper
              //className="banner"
              spaceBetween={50}
              slidesPerView={1}
              loop = {true}
              pagination={{ clickable: false }}
              autoplay={{ delay: 3000,
                disableOnInteraction: false }}	// 추가
            >
              <SwiperSlide>
                <div className="container" style={{width:'630px', margin: '0 auto'}}>
                  <img src={IMG10} className="section-img" />
                  <img src={IMG12} className="section-img" />
                </div>
                <p className="box-font">photo of person1, standing ~~</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container" style={{width:'630px', margin: '0 auto'}}>
                    <img src={IMG4} className="section-img" />
                    <img src={IMG6} className="section-img" />
                </div>
                <p className="box-font">photo of person2, standing ~~</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container" style={{width:'630px', margin: '0 auto'}}>
                  <img src={IMG7} className="section-img" />
                  <img src={IMG9} className="section-img" />
                </div>
                <p className="box-font">photo of person3, standing ~~</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container" style={{width:'630px', margin: '0 auto'}}>
                  <img src={IMG1} className="section-img" />
                  <img src={IMG3} className="section-img" />
                </div>
                <p className="box-font">photo of person4, standing ~~</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;