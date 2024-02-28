import React from "react";
import "./footer2.css";
import msme from "../assets/msme.png";
import iso from "../assets/iso.png";
import mca1 from "../assets/mca1.png"

export default function Footer2() {
  return (
    <div className="footer2 flex flex-wrap justify-between items-center px-[3%]">
      <p className="text-[1.1rem]">© All Copyright 2024 by Byteproc Solutions Pvt. Ltd.</p>
      <div className="flex items-stretch justify-start w-fit">
        <img className="w-[80px]" src={msme} alt="" />
        <img className="w-[80px] mx-[.75rem] bg-[#fff]" src={mca1} alt="" />
        <img className="w-[80px] bg-[#fff]" src={iso} alt="" />
        
      </div>
    </div>
  );
}
