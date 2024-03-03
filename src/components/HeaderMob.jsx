import React from "react";
import logo from "../assets/blue-logo.png";

export default function HeaderMob({ side, setSide, setAddress }) {
  return (
    <div className="headerMob  justify-between items-center w-[100%] px-[1.5%] ">
      {!side ? (
        <i
          className="fa-solid fa-bars text-[1rem] text-[var(--col4)] hover:cursor-pointer grid place-self-center "
          onClick={() => {
            setSide((val) => !val);
          }}
        ></i>
      ) : (
        <p
          className="text-[1.45rem] font-[600] text-[var(--col4)] ml-[1rem] hover:cursor-pointer"
          onClick={() => {
            setSide((val) => !val);
          }}
        >
          X
        </p>
      )}

      <img
        className="max-w-[10rem] lg:w-[13%] py-[.75rem]"
        src={logo}
        alt="logo"
      />
      <div className="flex items-center">
        <div
          className="cursor-pointer p-[.3rem] w-[30px] h-[30px] info mr-[.3rem]"
          onClick={() => setAddress((a) => !a)}
        >
          <i className="fa-solid fa-info text-[1rem] text-[var(--col3)]"></i>
        </div>
        <a
          href="tel:+91-7368804237"
          className="w-[40px] h-[40px] rounded-[50%] border-[1px] border-solid border-[var(--col4)] grid place-item-center"
        >
          <i className="fa-solid fa-phone text-[1rem] text-[var(--col4)] hover:cursor-pointer grid place-self-center"></i>
        </a>
      </div>
    </div>
  );
}
