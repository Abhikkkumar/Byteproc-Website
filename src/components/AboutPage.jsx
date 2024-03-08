import React from "react";
import BreadrCump from "./BreadCrump";
import About from "./About";
import Section4 from "./Section4";
import BusinessPartnerCarousel from "./BusinessPartnerCarousel";
import MVV from "./MVV";
import "./aboutpage.css";
export default function AboutPage() {
  const prop = {
    title: "About Us",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat.",
    arr: ["Home", "About Us"],
  };
  return (
    <div className="pt-[5rem]">
      <BreadrCump bprops={prop} />
      <About />
      <MVV />

      <div className="section2-prod">
        <div className="sec2-prod-left-about">
          <h1>We Ensure Best Service</h1>
          <p>
            Vama Skylight LLP is a technology-driven organization focused on
            utilizing the opportunity that the limitless sky offers by creating
            reliable solutions to the challenges of the present and future.
          </p>
          <ul>
            <li>
              <i class="fa-solid fa-check"></i>Our primary products include UAVs
              for agriculture, photography, mapping, and Remote Pilot Training
              Organization (RPTO).
            </li>
            <li>
              <i class="fa-solid fa-check"></i>Our agricultural drones are
              equipped with sensors and cameras that can be used to monitor crop
              health, optimize fertilizer and water use, and improve yields.
            </li>
            <li>
              <i class="fa-solid fa-check"></i>Our photography drones are
              designed for professional aerial photography and videography.
            </li>
            <li>
              <i class="fa-solid fa-check"></i>We also provide training,
              maintenance, and consulting services to help our clients get the
              most out of their investment.
            </li>
          </ul>
        </div>
        <div className="sec2-prod-right-about">
          <div className="sec2-prod-right-inner-about">
            <span className="tele-icon">
              <i class="fa-solid fa-phone"></i>
            </span>
            <div>
              <p>Have you any Questions?</p>
              <p>
                Call us <span className="ylo">Today!</span>
              </p>
            </div>
            <div className="dotted-line"></div>
            <p className="call-num">
              <a href="tel: +91-7368804237"> +91-7368804237</a>
            </p>
          </div>
        </div>
      </div>

      <Section4 />
      <BusinessPartnerCarousel />
    </div>
  );
}
