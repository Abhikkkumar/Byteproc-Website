import React from "react";
import Carousel from "./Carousel";
import CarouselM from "./CarouselM";
import Section3 from "./Section3";
import About from "./About";
import Section4 from "./Section4";
import Services from "./Services";
import Explore from "./Explore";
import Help from "./Help";
import BusinessPartnerCarousel from "./BusinessPartnerCarousel";


export default function Home() {
  return (
    <div className="home">
        <Carousel/>
        <CarouselM/>
        <Explore/>
        <About/>
        <Section3/>
        <Services/>
        <Help/>
        <Section4/>
        <BusinessPartnerCarousel />
        
      
    </div>
  )
}
