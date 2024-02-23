import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "./carousel.css";

export default function CarouselM() {
  return (
    <div className='carouselM'>

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
              <h1>Slide1</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, accusantium?</p>
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms2">
            <div className="slides-inner">
              <h1>Slide2</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, facere.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms3">
            <div className="slides-inner">
                <h1>Slide3</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, veniam!</p>
              
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="slides ms5">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms6">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms7">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms8">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide>
          <SwiperSlide className="slides ms9">
            <div className="slides-inner">
              
            </div>
          </SwiperSlide> */}
          
          
        </Swiper>
      
    </div>
  )
}
