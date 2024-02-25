import React from 'react'
import { NavLink } from 'react-router-dom';
import Img1 from "../assets/byteproc-about.png";
import Img2 from "../assets/byteproc slider2.png";
import "./about.css";

export default function About() {
  return (
    <div className='AboutContainer'>
        <div className="section1">
      <div className="sectionImg">
        <img src={Img1} alt="" />
      </div>

      <div className="section-left-side">
        <h6 className="who">
          <img
            src="https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png"
            alt="square-pic"
          />{" "}
          WHO WE ARE
        </h6>
        <h1>Vama Skylight</h1>
        <p>
          Vama Skylight is a leading manufacturer of drones, providing
          innovative solutions to the drone industry. Our company is dedicated
          to leveraging the latest technology to help improve operations ,
          reduce costs etc. With a team of experts in the field of unmanned
          aerial systems, we are committed to developing.
        </p>

        <div className="section-left-middle">
          <img className="img-2-sec-1" src={Img2} alt="" />

          <div className="section-left-left">
            <h6>
              {" "}
              <i class="fa-regular fa-circle-check"></i> Thea Agriculture Drone
              16 Litres
            </h6>
            <h6>
              {" "}
              <i class="fa-regular fa-circle-check"></i> Thea Agricultural Drone
              10 Litres
            </h6>
            <h6>
              {" "}
              <i class="fa-regular fa-circle-check"></i> Naina Disaster
              Management Drone
            </h6>
            <h6>
              {" "}
              <i class="fa-regular fa-circle-check"></i> Surveillance Drone
            </h6>
          </div>
        </div>
        <NavLink to="/">
          {" "}
          <button className="know-more" 
          >KNOW MORE</button>
        </NavLink>
      </div>
    </div>
    </div>
    
  )
}
