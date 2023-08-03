import { useEffect, useState } from "react";
import "../MainBodySection.css";
import IMG from "../../../assets/images/man in front of st basil 20.jpg";

// npm install swiper@6.0.2
// npm install --save sass
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination , Autoplay, EffectCoverflow} from "swiper";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/navigation/navigation.scss";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation, Pagination])

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
            <Swiper
              //className="banner"
              spaceBetween={50}
              slidesPerView={1}
              loop = {true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000,
                disableOnInteraction: false }}	// 추가
            >
              <SwiperSlide><img src={IMG} className="section-img" />
              <p>slide1, </p>
              </SwiperSlide>
              <SwiperSlide><img src={IMG} className="section-img" />
              <p>slide2, </p>
              </SwiperSlide>
              <SwiperSlide><img src={IMG} className="section-img" />
              <p>slide3, </p>
              </SwiperSlide>
              <SwiperSlide><img src={IMG} className="section-img" />
              <p>slide4</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;