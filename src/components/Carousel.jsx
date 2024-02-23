import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "./carousel.css";

export default function Carousel() {
  return (
    <div className="carousel">
      <>
        <Swiper
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          
          modules={[Autoplay]}
        >
          {/* <SwiperSlide className="slides s5">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s6">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s7">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s8">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s9">
            <div className="slides-inner">
             
            </div>
          </SwiperSlide> */}
          
          <SwiperSlide className="slides s1">
            <div className="slides-inner">
              {" "}
              <h1>Slide1</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, architecto?</p>
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s2">
            <div className="slides-inner">
                <h1>Slide2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio natus </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s3">
            <div className="slides-inner">
                <h1>Slide3</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, enim.</p>
              
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      </>
    </div>
  );
}
