import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "./businessPartnerCarousel.css";
import t1 from "../assets/t1.webp";
import t2 from "../assets/t2.webp";
import t3 from "../assets/t3.webp";
import t4 from "../assets/t4.webp";
import t5 from "../assets/t5.webp";

export default function BusinessPartnerCarousel() {
  return (
    <div className="carousel-business">
      <div className="dual-line">
        <div className="line1 "></div>
        <h2 >Our Business Partners </h2>
        <div className="line1 "></div>
      </div>

      <div >
        <Swiper
          spaceBetween={20}
          
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 300px
            300:{
              slidesPerView:2
            },
            578: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="image">
              <img src={t1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image">
              <img src={t2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src={t3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src={t4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src={t5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src={t1} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image">
              <img src={t2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src={t3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src={t4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src={t5} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
