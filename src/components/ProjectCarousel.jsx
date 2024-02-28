import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "./businessPartnerCarousel.css";
import t1 from "../assets/edu-1.webp";
import t2 from "../assets/edu-2.webp";
import t3 from "../assets/edu-3.webp";
import t4 from "../assets/edu-4.webp";

export default function ProjectCarousel() {
  return (
    <div className="carousel-business">
      <div className="dual-line mb-[.75rem]">
        <div className="line1 "></div>
        <h2 >Our Projects </h2>
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
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 300px
            440:{
                slidesPerView:2
            },
            578: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          
          <SwiperSlide>
            <div className="image text-center rounded">
              <img src={t1} alt="" className="rounded"/>
              <p>Business Website</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image text-center rounded">
              <img src={t2} alt="" className="rounded" />
              <p>Medical Website</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image text-center rounded">
              <img src={t3} alt="" className="rounded"/>
              <p>Transport Website</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image text-center rounded">
              <img src={t4} alt="" className="rounded"/>
              <p>1-1 Video Call Live</p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="image text-center rounded">
              <img src={t1} alt="" className="rounded"/>
              <p>Business Website</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="image text-center rounded">
              <img src={t2} alt="" className="rounded" />
              <p>Medical Website</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image text-center rounded">
              <img src={t3} alt="" className="rounded"/>
              <p>Transport Website</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image text-center rounded">
              <img src={t4} alt="" className="rounded"/>
              <p>1-1 Video Call Live</p>
            </div>
          </SwiperSlide>
          

          
        </Swiper>
      </div>
    </div>
  );
}
