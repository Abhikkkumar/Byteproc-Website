import React from "react";
import "./footer2.css";
import msme from "../assets/msme.png";
import iso from "../assets/iso.png";
import mca1 from "../assets/mca1.png";

export default function Footer2() {
  return (
    <div className="footer2 flex flex-wrap justify-between items-center px-[3%]">
      <div className="flex items-center justify-between text-[1rem] footer2-top w-fit">
        <p >
          © All Copyright 2024 by Byteproc Solutions Pvt. Ltd.
        </p>
        <p className="px-[1rem]">CIN Number: L17110MH1973PLC019786</p>
      </div>

      <div className="flex items-stretch justify-start w-fit footer2-bottom">
        <img className="w-[60px]" src={msme} alt="" />
        <img className="w-[60px] mx-[.75rem] bg-[#fff]" src={mca1} alt="" />
        <img className="w-[60px] bg-[#fff]" src={iso} alt="" />
      </div>
    </div>
  );
}
