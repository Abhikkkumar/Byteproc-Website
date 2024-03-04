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
                <p className="text-[2rem]">Delivering Excellence in </p>
                <p className="font-[700] text-[5rem] mt-[-1rem] mb-[.25rem]">
                  Every Byte
                </p>
                <button>Discover More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s2">
            <div className="slides-inner">
              <div className="slides-text">
                <p className="text-[2rem]">It Software Solution & </p>
                <p className="font-[700] text-[5rem] mt-[-1rem] mb-[.25rem]">
                Technology
                </p>
                <button>Discover More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides s3">
            <div className="slides-inner">
              <div className="slides-text">
                <p className="text-[2rem]">Delivering Excellence in </p>
                <p className="font-[700] text-[5rem] mt-[-1rem] mb-[.25rem]">
                  Every Byte
                </p>
                <button>Discover More</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
