import { NavLink } from "react-router-dom";
import logo from "../assets/blue-logo.png";
import DropdownT from "./DropdownT";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./header.css";

export default function Header() {
  const services = [
    "Website Development",
    "app development",
    "saas",
    "consultation",
  ];
  const [showServices, setShowServices] = useState(false);
  return (
    <div className="hidden sm:flex justify-between px-[1.5%]  header">
      <img
        className="max-w-[10rem] lg:w-[13%] py-[.75rem]"
        src={logo}
        alt="logo"
      />

      <div className="navlists flex justify-between items-center min-w-[60%] text-[var(--col5)] ">
        <div>
          <NavLink to="/" className="uppercase hover:text-[var(--col3)]">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="uppercase">
            About Us
          </NavLink>
        </div>
        <div
          className="relative  rounded-t-lg py-[.35rem] px-[.55rem]"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <NavLink to="/" className="uppercase">
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
        <div>
          <NavLink to="/" className="uppercase">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}
