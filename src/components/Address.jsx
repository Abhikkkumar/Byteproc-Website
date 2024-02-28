import React from "react";
import "./address.css";

export default function Address({address}) {
  return (
    <div className={address?"address":"hide-right"}>
      <div>
        <p>ONe</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <p>ONe</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <p>ONe</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}
