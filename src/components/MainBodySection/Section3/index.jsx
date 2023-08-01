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

export const Section3 = () => {
  //Each React jsx file returns HTML COMPONENTS like below

  return (
    <main>
      <div class="main-container">
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
            <p> 원본 </p>
            </SwiperSlide>
            <SwiperSlide><img src={IMG} className="section-img" />
            <p> 마스크 </p>
            </SwiperSlide>
          </Swiper>

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
