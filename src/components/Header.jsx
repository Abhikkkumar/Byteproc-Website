import { NavLink } from "react-router-dom";
import logo from "../assets/byteproc-logo-pvt.png";
import DropdownT from "./DropdownT";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "./header.css";
import { useEffect } from "react";

export default function Header() {
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
            ? "transition-all transition-[1.75s] ease-in w-[17%] lg:w-[13%] py-[.85rem]"
            : "transition-all transition-[1.75s] ease-in w-[17%] lg:w-[13%] py-[1.85rem]"
        }
        src={logo}
        alt="logo"
      />

      <div className="navlists flex justify-between items-center min-w-[80%] text-[var(--col5)] ">
        <div>
          <NavLink to="/" className="uppercase hover:text-[var(--col3)]">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="uppercase w-max">
            About Us
          </NavLink>
        </div>
        <div
          className={
            isScrolled
              ? "transition-all transition-[1.75s] ease-in relative rounded-t-lg py-[.85rem] px-[.55rem]"
              : "transition-all transition-[1.75s] ease-in relative rounded-t-lg py-[1.85rem] px-[.55rem]"
          }
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
          <NavLink to="/" className="uppercase w-max">
            Career
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="uppercase">
            Product
          </NavLink>
        </div>
        <div>
          <NavLink to="/" className="uppercase w-max">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}
