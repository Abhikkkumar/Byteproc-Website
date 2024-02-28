import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "./carousel.css";

export default function CarouselM() {
  return (
    <div className="carouselM">
      <Swiper
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="slides ms1">
          <div className="slides-inner">
            {" "}
            <div className="m-slides-text">
              <h1>Slide1</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Minima, architecto?
              </p>
              <button className="mx-auto">click me</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slides ms2">
          <div className="slides-inner">
            <div className="m-slides-text">
              <h1>Slide1</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Minima, architecto?
              </p>
              <button className="mx-auto">click me</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slides ms3">
          <div className="slides-inner">
            <div className="m-slides-text">
              <h1>Slide1</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Minima, architecto?
              </p>
              <button className="mx-auto">click me</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
