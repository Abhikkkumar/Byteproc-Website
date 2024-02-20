import React from "react";
import logo from "../assets/blue-logo.png";

export default function HeaderMob({ side, setSide }) {
  return (
    <div className="headerMob flex sm:hidden justify-between items-center px-[1.5%]">
      {!side ? (
        <i
          className="fa-solid fa-bars text-[1rem] text-[var(--col5)] hover:cursor-pointer grid place-self-center "
          onClick={() => {
            setSide((val) => !val);
          }}
        ></i>
      ) : (
        <p
          className="text-[1.45rem] font-[600] text-[var(--col4)] hover:cursor-pointer"
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
    </div>
  );
}
