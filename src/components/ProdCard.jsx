import React from "react";
import logo from "../assets/products/byteproc-icon.webp";
import img from "../assets/products/Byteproc-project1.webp";
import "./prodCard.css";

export default function ProdCard() {
  return (
    <div className="prodCard max-w-[350px] mx-[1rem]  bg-[#fff] relative">
      <div className="prodcard-img w-full relative overflow-clip ">
        <div className="prodCover1"></div>
        <div className="prodCover2"></div>
        <img src={img} alt="" className="w-full " id="prod-img1" />
        <img src={logo} alt="" className=" prod-logo " />
      </div>
      <div className="prod-details max-w-[85%] mx-auto my-[2rem] text-center">
        <p className="text-[var(--col2)]">1-1 Video Communication</p>
        <p className="text-[1.4rem] max-w-[270px] mx-auto proj-headline font-[600]">
          This project helps 1-1 Video call Communication
        </p>
        <button className="prod-btn">Know More</button>
      </div>
    </div>
  );
}
