import React from "react";
import { NavLink } from "react-router-dom";
import Img1 from "../assets/byteproc-about.png";
import Img2 from "../assets/byteproc slider2.png";
import "./about.css";

export default function About() {
  return (
    <div className="AboutContainer ">
      <div className="section1 my-[.75rem]">
        <div className="sectionImg">
          <img src={Img1} alt="" />
        </div>

        <div className="section-left-side">
          <h6 className="who">
            <img
              src="https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png"
              alt="square-pic"
            />{" "}
            Get to know us
          </h6>
          <h1>Easy solutions for your IT problems</h1>
          <p>
          Byteproc Solutions Pvt. Ltd. is a rapidly expanding IT Company that offers comprehensive IT solutions to businesses globally. We specialize in software, website, and iOS/Android application development, along with UI/UX design and digital marketing services.
          </p>

          <div className="section-left-middle">
            <img className="img-2-sec-1" src={Img2} alt="" />

            <div className="section-left-left">
              <h6>
                {" "}
                <i class="fa-regular fa-circle-check"></i>Quality Assurance
              </h6>
              <h6>
                {" "}
                <i class="fa-regular fa-circle-check"></i> Long-Term Partnerships
              </h6>
              <h6>
                {" "}
                <i class="fa-regular fa-circle-check"></i>Expertise with Timely Delivery
              </h6>
              <h6>
                {" "}
                <i class="fa-regular fa-circle-check"></i> Global Reach
              </h6>
            </div>
          </div>
          <NavLink to="/">
            {" "}
            <button className="know-more w-[100px]">KNOW MORE</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
