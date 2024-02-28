import React from "react";
import "./address.css";
import { CSSTransition } from "react-transition-group";
import logo from "../assets/byteproc-logo-pvt.png";

export default function Address({ address, setAddress }) {
  return (
    <CSSTransition
      in={address}
      timeout={300}
      classNames="fade"
      unmountOnExit={true}
    >
      <div className={address ? "address" : "address hide-right "}>
        <i
          className="fa-solid fa-xmark hover:cursor-pointer"
          onClick={() => setAddress(!address)}
        ></i>
        <img src={logo} alt="" className="max-w-[200px]" />
        <p className="my-[.5rem] leading-tight">
          We Design Super Engaging Web Experiences To Help You Go From More
          Leads To Customers Faster through Easywebes.
        </p>
        <div>
          <div className="dual-line p-[0] my-[1.45rem]">
            <div className="line1 "></div>
            <h2>Contact Info </h2>
            <div className="line1 "></div>
          </div>
          <p className="flex items-start">
            <i class="fa-solid fa-location-dot"></i>{" "}
            <p className="mt-[-7px] ml-[5px]">
              Contact Info Balua Chowk Motihari, Bihar
            </p>
          </p>
          <p>
            <i class="fa-regular fa-envelope"></i>{" "}
            <a href="mailto:info@easywebes.com">info@easywebes.com</a>
          </p>
          <p>
            <i class="fa-solid fa-tty"></i>{" "}
            <a href="tel:+91-7368804237">+91-7368804237</a>
          </p>
        </div>

        <div className="dual-line p-[0] my-[1.45rem]">
          <div className="line1 "></div>
          <h2>Our Branches </h2>
          <div className="line1 "></div>
        </div>

        <div>
          <p>Banglore</p>
          {/* <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p> */}
        </div>
        <div>
          <p>Odisha</p>
          {/* <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p> */}
        </div>
        <div>
          <p>Patna</p>
          {/* <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p> */}
        </div>
        <div>
          <p>Muzaffarpur</p>
          {/* <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p> */}
        </div>
        <div>
          <p>Arrah</p>
          {/* <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p> */}
        </div>
        {/* <div>
          <p>ONe</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <p>ONe</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div> */}
      </div>
    </CSSTransition>
  );
}
