import React from "react";
import "./footer2.css";
import msme from "../assets/msme.png";

export default function Footer2() {
  return (
    <div className="footer2 flex justify-between items-center px-[3%]">
      <p className="text-[1.1rem]">© All Copyright 2024 by Byteproc Solutions Pvt. Ltd.</p>
      <div className="flex items-center justify-start w-fit">
        <img className="w-[100px]" src={msme} alt="" />
        <img className="w-[100px]" src={msme} alt="" />
        <img className="w-[100px]" src={msme} alt="" />
      </div>
    </div>
  );
}
