import React, { useState } from "react";
import "./sidebar.css";
import { CSSTransition } from "react-transition-group";

export default function Sidebar({ side }) {
  const [service, setService] = useState(false);
  const [prod, setProd] = useState(false);

  const manageState = (elem) => {
    if (elem == "prod") {
      setService(false);
      setProd((a) => !a);
    } else {
      setProd(false);
      setService((a) => !a);
    }
  };
  let navbottomClass = {};
  if(service || prod){
    navbottomClass = "sidebottom w-[100%] text-center top-[85vh] "
  }else{
    navbottomClass = "sidebottom w-[100%] text-center top-[70vh]"
  }
  return (
    <div className="sidebar">
      <div className={side ? "sidelist " : "sidelist sidelist-hide"}>
        <div className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]">
          <p className="">Home</p>
        </div>
        <div
          className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]"
          onClick={() => manageState("prod")}
        >
          <p className="">About Us</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        {!service ? (
          <CSSTransition
            in={prod}
            timeout={300}
            classNames="fade"
            unmountOnExit={true}
          >
            <div className=" flex flex-col justify-between px-[1rem]  text-[1rem] font-[400]">
              <p className=" py-[.75rem]">Products 1</p>
              <p className=" py-[.75rem]">Products 1</p>
              <p className=" py-[.75rem]">Products 1</p>
            </div>
          </CSSTransition>
        ) : (
          ""
        )}
        <div
          className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]"
          onClick={() => manageState("services")}
        >
          <p className="">Services</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        {!prod ? (
          <CSSTransition
            in={service}
            timeout={300}
            classNames="fade"
            unmountOnExit={true}
          >
            <div className=" flex flex-col justify-between px-[1rem]  text-[1rem] font-[400]">
              <p className=" py-[.75rem]">Products 1</p>
              <p className=" py-[.75rem]">Products 1</p>
              <p className=" py-[.75rem]">Products 1</p>
            </div>
          </CSSTransition>
        ) : (
          ""
        )}

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
            ? navbottomClass
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
