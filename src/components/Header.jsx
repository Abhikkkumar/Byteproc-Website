import { NavLink } from "react-router-dom";
import logo from "../assets/byteproc-logo-pvt.png";
import DropdownT from "./DropdownT";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./header.css";
import { useEffect } from "react";

export default function Header({ setAddress }) {
  const services = [
    "Website Development",
    "Software Development",
    "App development",
    "API Development",
    "Digital Marketing",
  ];
  const [showServices, setShowServices] = useState(false);
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
    <div className="hidden sm:flex justify-between px-[.5%] md:px-[1.5%]  header">
      <img
        className={
          isScrolled
            ? "transition-all transition-[1.75s] ease-in-out w-[17%] lg:w-[13%] py-[.85rem]"
            : "transition-all transition-[1.75s] ease-in-out w-[17%] lg:w-[13%] py-[1.25rem]"
        }
        src={logo}
        alt="logo"
      />

      <div className="navlists flex justify-between items-center min-w-[75%] text-[var(--col5)] ">
        <div className="below">
          <NavLink to="/" className="uppercase hover:text-[var(--col3)]">
            <i className="fa-solid fa-user"></i>
            <i className="fa-regular fa-user"></i>
            Home
          </NavLink>
        </div>
        <div className="below">
          <NavLink to="/" className="uppercase w-max">
            <i className="fa-solid fa-user"></i>
            <i className="fa-regular fa-user"></i>
            About Us
          </NavLink>
        </div>
        <div
          className="transition-all transition-[1.75s] ease-in-out relative rounded-t-lg px-[.55rem] below"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <NavLink to="/" className="uppercase">
            <i className="fa-solid fa-user"></i>
            <i className="fa-regular fa-user"></i>
            Services
          </NavLink>
          <CSSTransition
            in={showServices}
            timeout={400}
            classNames="fade"
            unmountOnExit={true}
          >
            <DropdownT arr={services} />
          </CSSTransition>
        </div>
        <div className="below">
          <NavLink to="/" className="uppercase w-max">
            <i className="fa-solid fa-user"></i>
            <i className="fa-regular fa-user"></i>
            Career
          </NavLink>
        </div>
        <div className="below">
          <NavLink to="/" className="uppercase">
            <i className="fa-solid fa-user"></i>
            <i className="fa-regular fa-user"></i>
            Product
          </NavLink>
        </div>
        <div className=" hover:text-[#fff]">
          <i
            className="fa-solid fa-info text-[1.2rem] text-[var(--col4)] mr-[.5rem] cursor-pointer p-[.5rem]"
            onClick={() => setAddress((a) => !a)}
          ></i>
          <button className="uppercase w-max hover:text-[#fff] contact-btn">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
