import { useEffect, useState } from "react";
import "../MainBodySection.css";
import IMG from "../../../assets/images/man in front of st basil 20.jpg";

// npm install swiper@6.0.2
// npm install --save sass
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination , Autoplay, EffectCoverflow} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation, Pagination])

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
        <Swiper
            className="temp-box"
            spaceBetween={50}
            slidesPerView={1}
            loop = {true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000,
              disableOnInteraction: false }}	// 추가
          >
            <SwiperSlide><img src={IMG} className="section-img" />
            <p> 1 </p>
            </SwiperSlide>
            <SwiperSlide><img src={IMG} className="section-img" />
            <p> 2 </p>
            </SwiperSlide>
            <SwiperSlide><img src={IMG} className="section-img" />
            <p> 3 </p>
            </SwiperSlide>
          </Swiper>
      </div>
    </main>
    
  );
};

export default Section2;
