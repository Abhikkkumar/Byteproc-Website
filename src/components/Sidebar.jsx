import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { CSSTransition } from "react-transition-group";
import { useNavigate, NavLink } from "react-router-dom";
import generateLink from "./GenerateLink";
import { services, careerList } from "./Data";

export default function Sidebar({ side, setSide }) {
  const navigate = useNavigate();
  const [service, setService] = useState(false);
  const [career, setCareer] = useState(false);
  const [sideBottom2, setSideBottom2] = useState(false);
  const [sideBottom, setSideBottom] = useState(false);
  useEffect(() => {
    // Show the element after .3s when 'side' becomes true
    if (side) {
      setSideBottom(true);
      const timeout = setTimeout(() => {
        setSideBottom(false);
        setSideBottom2(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
    if (!side) {
      setService(false);
      setCareer(false);
    }
  }, [side]);

  const manageState = (elem) => {
    if (elem == "career") {
      setService(false);
      setCareer((a) => !a);
    } else {
      setCareer(false);
      setService((a) => !a);
    }
  };

  return (
    <div className="sidebar">
      <div className={side ? "sidelist " : "sidelist sidelist-hide"}>
        <div
          className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]"
          onClick={() => {
            navigate("/");
            setSide(false);
          }}
        >
          <p className="">
            <i className="fa-solid fa-house text-[var(--col4)]"></i> Home
          </p>
        </div>
        <div
          className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]"
          onClick={() => {
            navigate("/about-us");
            setSide(false);
          }}
        >
          <p className="">
            <i className="fa-solid fa-circle-info text-[var(--col4)]"></i> About
            Us
          </p>
        </div>
        <div
          className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]"
          onClick={() => manageState("services")}
        >
          <p className="">
            <i className="fa-solid fa-layer-group text-[var(--col4)]"></i>{" "}
            Services
          </p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <CSSTransition
          in={service}
          timeout={300}
          classNames="fade"
          unmountOnExit={true}
        >
          <div className=" flex flex-col justify-between px-[1rem]  text-[1rem] font-[400]">
            {services.map((service, i) => {
              return (
                <p
                  key={i}
                  className=" py-[.75rem]"
                  onClick={() => {
                    // console.log(generateLink(service));
                    navigate(generateLink(service));
                    setSide(false);
                  }}
                >
                  {service}
                </p>
              );
            })}
          </div>
        </CSSTransition>

        <div
          className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]"
          onClick={() => {
            navigate("/products");
            setSide(false);
          }}
        >
          <p className="">
            <i className="fa-solid fa-newspaper text-[var(--col4)]"></i>{" "}
            Products
          </p>
        </div>
        <div
          className="flex justify-between items-center px-[.5rem] py-[.75rem] border-b-2 text-[1.2rem] font-[600]"
          onClick={() => manageState("career")}
        >
          <p className="">
            <i className="fa-solid fa-briefcase text-[var(--col4)]"></i> Careers
          </p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <CSSTransition
          in={career}
          timeout={300}
          classNames="fade"
          unmountOnExit={true}
        >
          <div className=" flex flex-col justify-between px-[1rem]  text-[1rem] font-[400]">
            <NavLink
              to={generateLink("Full-Time Role")}
              onClick={() => {
                setSide(false);
              }}
            >
              <p className=" py-[.75rem]">Full-Time Role</p>
            </NavLink>
            <NavLink
              to={generateLink("Internships")}
              onClick={() => {
                setSide(false);
              }}
            >
              <p className=" py-[.75rem]">Internships</p>
            </NavLink>
            <NavLink
              to={generateLink("Workshops")}
              onClick={() => {
                setSide(false);
              }}
            >
              <p className=" py-[.75rem]">Workshops</p>
            </NavLink>
          </div>
        </CSSTransition>
        {sideBottom2 && (
          <div className=" w-[100%] text-center mt-[10.27rem] sidebottom2">
            <button className="w-[95%] py-[.5rem] bg-[var(--col4)] text-[#fff] rounded mb-[3%]">
              Get Free Consultation
            </button>
            <button className="w-[95%] py-[.5rem] border-[1px] border-[var(--col4)] rounded mb-[3%]">
              Login
            </button>
            <p className="text-[var(--col4)] font-[500]">+91-9999966666</p>
            <p>Only for demo and sales enquiry</p>
          </div>
        )}
      </div>
      {sideBottom && (
        <div className="sidebottom w-[100%] text-center">
          <button className="w-[95%] py-[.5rem] bg-[var(--col4)] text-[#fff] rounded mb-[3%]">
            Get Free Consultation
          </button>
          <button className="w-[95%] py-[.5rem] border-[1px] border-[var(--col4)] rounded mb-[3%]">
            Login
          </button>
          <p className="text-[var(--col4)] font-[500]">+91-9999966666</p>
          <p>Only for demo and sales enquiry</p>
        </div>
      )}
    </div>
  );
}
