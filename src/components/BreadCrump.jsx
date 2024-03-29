import React from "react";
import "./breadCrump.css";
import { Link } from "react-router-dom";
import generateLink from "./GenerateLink";

export default function BreadrCump({ bprops }) {
  function giveBreadNav(name, i, arr) {
    if (i < arr.length - 1) {
      return (
        <>
          <Link to={`${generateLink(name)}`}>{name} </Link>

          {/* <i class="fa-solid fa-angle-right"></i> */}
          <span className="font-[700] text-[1.2rem]"> / </span>
        </>
      );
    } else {
      return (
        <>
          <Link to={`${generateLink(name)}`} className="active-bread">
            {name}
          </Link>
        </>
      );
    }
  }
  return (
    <div className="breadcrump">
      <div className="bread-inner">
        <div className="horizontal-line"></div>
        <h1>{bprops.title}</h1>
        <p className="text-[var(--col1)]">{bprops.text}</p>
        <div className="bread-nav">
          {bprops.arr.map((strName, index, array) =>
            giveBreadNav(strName, index, array)
          )}
        </div>
      </div>
    </div>
  );
}
