import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/byteproc-logo-pvt.png";
import DropdownT from "./DropdownT";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./header.css";
import { useEffect } from "react";
import about from "../assets/header/info.png";
import career1 from "../assets/header/briefcase.png";
import home from "../assets/header/home.png";
import services1 from "../assets/header/stack.png";
import { services as servicesList, careerList } from "./Data";

export default function Header({ setAddress }) {
  const navigate = useNavigate();

  // const servicesList = services;
  
  const [services, showServices] = useState(false);
  const [career, showCareer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" justify-between px-[.5%] md:px-[1.5%]  header">
      <img
        className={
          isScrolled
            ? "transition-all transition-[1.75s] ease-in-out w-[17%] lg:w-[13%] py-[.85rem] hover:cursor-pointer"
            : "transition-all transition-[1.75s] ease-in-out w-[17%] lg:w-[13%] py-[1.25rem] hover:cursor-pointer"
        }
        src={logo}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />

      <div className="navlists flex justify-between items-center min-w-[75%] text-[var(--col5)] ">
        <div className="">
          <NavLink
            to="/"
            className="uppercase hover:text-[var(--col3)] below px-[.5rem]"
          >
            <i className="fa-solid fa-house text-[var(--col4)]"></i>
            <img
              src={home}
              className="fa-regular fa-house text-[var(--col4)] w-[1.1rem]"
            ></img>
            Home
          </NavLink>
        </div>
        <div className="">
          <NavLink to="/about-us" className="uppercase w-max below px-[.5rem]">
            <i className="fa-solid fa-circle-info text-[var(--col4)]"></i>
            <img
              src={about}
              className="fa-regular fa-circle-info text-[var(--col4)] w-[1.13rem]"
            ></img>
            About Us
          </NavLink>
        </div>
        <div
          className=" flex items-end transition-all transition-[1.75s] ease-in-out relative rounded-t-lg px-[.55rem] "
          onMouseEnter={() => showServices(true)}
          onMouseLeave={() => showServices(false)}
        >
          <NavLink to="/services" className="uppercase below px-[.5rem]">
            <i className="fa-solid fa-layer-group text-[var(--col4)]"></i>
            <img src={services1} className="fa-regular   w-[1.1rem]" />
            <p className="flex items-center">Services </p>
          </NavLink>
          <i className="fa-solid fa-chevron-down ml-[5px] mb-[5px] mr-[3px]"></i>
          <CSSTransition
            in={services}
            timeout={400}
            classNames="fade"
            unmountOnExit={true}
          >
            <DropdownT arr={servicesList} />
          </CSSTransition>
        </div>
        <div
          className=" flex items-end transition-all transition-[1.75s] ease-in-out relative rounded-t-lg px-[.55rem] "
          onMouseEnter={() => showCareer(true)}
          onMouseLeave={() => showCareer(false)}
        >
          <NavLink
            to="/career"
            className="uppercase below w-max below px-[.5rem]"
          >
            <i className="fa-solid fa-briefcase text-[var(--col4)]"></i>
            <img
              src={career1}
              className="fa-regular  text-[var(--col4)] w-[1.13rem]"
            ></img>
            Career
          </NavLink>
          <i className="fa-solid fa-chevron-down ml-[5px] mb-[5px] mr-[3px]"></i>
          <CSSTransition
            in={career}
            timeout={400}
            classNames="fade"
            unmountOnExit={true}
          >
            <DropdownT arr={careerList} />
          </CSSTransition>
        </div>
        <div className="">
          <NavLink to="/product" className="uppercase below px-[.5rem]">
            <i className="fa-solid fa-newspaper text-[var(--col4)]"></i>
            <i className="fa-regular fa-newspaper text-[var(--col4)]"></i>
            Product
          </NavLink>
        </div>
        <div className=" hover:text-[#fff] flex items-center">
          <div
            className="cursor-pointer p-[.1rem] w-[20px] h-[20px] info mr-[.3rem]"
            onClick={() => setAddress((a) => !a)}
          >
            <i className="fa-solid fa-info text-[1rem] text-[var(--col3)]"></i>
          </div>
          <button
            className="uppercase w-max hover:text-[#fff] contact-btn"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
