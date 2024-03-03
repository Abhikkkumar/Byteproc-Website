import React from "react";
import "./help.css";
import Img1 from "../assets/chat-icon.png";
// import img2 from "../assets/mob-slider3.png";
// import img2 from "../assets/Byteproc-about3.jpg";
import img3 from "../assets/section-title-shape.png";
import img4 from "../assets/Data-protection.png";
import img5 from "../assets/Optimize-system.png";

export default function Help() {
  return (
    <div className="help">
      <div className="help-top">
        <h1>Trusted source in IT services</h1>
        <div className="help-img">
          <img src={Img1} alt="" />
        </div>

        <div className="help-top-2">
          <p>Have any question?</p>
          <a href="tel:+91-7368804237">Call: +91-7368804237</a>
        </div>
      </div>

      <div className="help-below">
        <div className="help-below-left">{/* <img src={img2} alt="" /> */}</div>

        <div className="help-below-right">
          <div className="help-below-right-1">
            <img src={img3} alt="" />
            <p>Technology Solution</p>
          </div>
          <h1>Helping businesses around the world</h1>
          <p>
            We specializes in creating cutting-edge software solutions that
            transform businesses.
          </p>

          <div className="help-sub">
            <div className="help-sub1">
              <img src={img4} alt="" className="w-[178px]" />
              <h5>Data protection</h5>
              <hr></hr>
              <p>Protect your data as if it is your most valuable asset.</p>
            </div>

            <div className="help-sub2">
              <img src={img5} alt="" className="w-[178px]" />
              <h5>Optimize system</h5>
              <hr></hr>
              <p>We fully focuse on making your software easy to use.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
