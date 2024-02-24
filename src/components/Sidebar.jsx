import React from "react";
import "./sidebar.css";

export default function Sidebar({ side }) {
  return (
    <div className="sidebar">
      <div className={side ? "sidelist " : "sidelist sidelist-hide"}>
        <div className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]">
          <p className="">Home</p>
        </div>
        <div className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]">
          <p className="">About Us</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]">
          <p className="">Services</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className=" flex flex-col justify-between px-[1rem]  text-[1rem] font-[400]">
          <p className=" py-[.75rem]">Products 1</p>
          <p className=" py-[.75rem]">Products 1</p>
          <p className=" py-[.75rem]">Products 1</p>
        </div>
        <div className="flex flex-col px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]">
          <p className="">Products</p>
        </div>
        <div className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]">
          <p className="">Career</p>
        </div>
      </div>
      <div
        className={
          side
            ? "sidebottom w-[100%] text-center"
            : "sidebottom hide w-[100%] text-center"
        }
      >
        <button className="w-[95%] py-[.5rem] bg-[var(--col4)] text-[#fff] rounded mb-[3%]">
          Get Free Consultation
        </button>
        <button className="w-[95%] py-[.5rem] border-[1px] border-[var(--col4)] rounded mb-[3%]">
          Login
        </button>
        <p className="text-[var(--col4)] font-[500]">+91-9999966666</p>
        <p>Only for demo and sales enquiry</p>
      </div>
    </div>
  );
}
