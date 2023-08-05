import { useEffect, useState } from "react";
import "../MainBodySection.css";
import IMG from "../../../assets/images/man in front of st basil 20.jpg";

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
                  <img src={IMG} className="section-img" />
                  <img src={IMG} className="section-img" />
                </div>
                <p className="box-font">photo of person1, standing ~~</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container" style={{width:'630px', margin: '0 auto'}}>
                    <img src={IMG} className="section-img" />
                    <img src={IMG} className="section-img" />
                </div>
                <p className="box-font">photo of person2, standing ~~</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container" style={{width:'630px', margin: '0 auto'}}>
                  <img src={IMG} className="section-img" />
                  <img src={IMG} className="section-img" />
                </div>
                <p className="box-font">photo of person3, standing ~~</p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container" style={{width:'630px', margin: '0 auto'}}>
                  <img src={IMG} className="section-img" />
                  <img src={IMG} className="section-img" />
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