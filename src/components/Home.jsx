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
import Parallex from "../Parallex";
import ProjectCarousel from "./ProjectCarousel";


export default function Home() {
  return (
    <div className="home">
        <Carousel/>
        <CarouselM/>
        <Explore/>
        <About/>
        <Section3/>
        <Services/>
        <ProjectCarousel />
        <Parallex/>
        <Help/>
        <Section4/>
        <BusinessPartnerCarousel />
        
      
    </div>
  )
}
