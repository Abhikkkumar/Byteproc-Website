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
          <h1>Byteproc Solutions Pvt. Ltd. is more than tech company</h1>
          <p>
          We are your trusted partner in navigating the dynamic landscape of technology. Our mission is to simplify the complexities of the digital world and deliver efficient, tailored solutions to meet the unique needs of our clients.
          </p>
          <ul>
            <li>
              <i class="fa-solid fa-check"></i>Innovation: We thrive on innovation, constantly exploring new technologies and methodologies to bring fresh, creative solutions to our clients.
            </li>
            <li>
              <i class="fa-solid fa-check"></i>Client-Centric Approach: We are committed to understanding our clients' unique challenges and goals, ensuring that our solutions are tailored to their specific needs.
            </li>
            <li>
              <i class="fa-solid fa-check"></i>Quality: Our commitment to quality is unwavering. We adhere to the highest standards of software development, ensuring reliability, security, and scalability.
            </li>
            <li>
              <i class="fa-solid fa-check"></i>Transparency: We believe in open and honest communication with our clients. We provide regular updates, maintain clear documentation, and offer transparent pricing structures.
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
