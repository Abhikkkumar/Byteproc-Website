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
          <SwiperSlide className="slides s1">
            <div className="slides-inner">
              {" "}
              <div className="slides-text">
                <h1>Slide1</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima, architecto?
                </p>
                <button >click me</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s2">
            <div className="slides-inner">
              <div className="slides-text">
                <h1>Slide1</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima, architecto?
                </p>
                <button >click me</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s3">
            <div className="slides-inner">
              <div className="slides-text">
                <h1>Slide1</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima, architecto?
                </p>
                <button >click me</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
