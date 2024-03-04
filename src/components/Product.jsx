import React from "react";
import ProdCard from "./ProdCard";
import BreadCrump from "./BreadCrump";
import "./products.css";

export default function Product() {
  const breadProp = {
    title: "Products",
    text: "Our Projects",
    arr: ["Home", "Products"],
  };
  return (
    <div className="py-[5rem] bg-[rgba(126,123,129,0.1)]">
      <BreadCrump bprops={breadProp} />
      <h1 className="w-fit mx-auto my-[1.5rem]">Our latest projects</h1>
      <div className="flex justify-between items-center px-[1.5%] prodlist">
        <ProdCard />
        <ProdCard />
        <ProdCard />
      </div>
    </div>
  );
}
