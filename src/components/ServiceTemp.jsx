import React, { useState, useEffect } from "react";
// import "../../style/page2/allSectionP2.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { services, products } from "./Data";
import ServiceList from "./ServiceList";
import BreadrCump from "./BreadCrump";

export default function ServiceTemp({ props }) {
  //getImage function
  function getImageUrl(imgName) {
    if(imgName.includes(".svg")){
        return imgName;
    }
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  }

  return (
    <div>
      <BreadrCump bprops={props.breadProp} />
      <div className="all-section-p">
        <div className="asp-left">
          <div className="prod-img">
            <img src={getImageUrl(props.img)} alt="drone-footage" />
          </div>
          <div className="sec2-prod-left">
            <h1>{props.title}</h1>
            <p>{props.text1}</p>
            <ul>
              {props.pointArr.map((curr) => {
                return (
                  <li className="sec-list">
                    <i class="fa-solid fa-check"></i>
                    <p
                      style={{
                        textAlign: "left",
                        maxWidth: "90%",
                      }}
                    >
                      {curr}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="s4p-inner ">
            {props.text2 ? <p className="text-[var(--col3)] text-[1.3rem]">{props.text2}</p> : ""}

            <div
              className={
                props.img3 === "" ? "s4p-img-cnt single" : "s4p-img-cnt"
              }
            >
              {props.img3 === "" ? (
                <>
                  <img src={getImageUrl(props.img2)} alt="" />
                </>
              ) : (
                <>
                  <img src={props.img2} alt="" />
                  <img src={props.img2} alt="" />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="asp-right">
          {props.isService ? (
            <ServiceList services={services} active={props.breadProp.title} />
          ) : (
            <ServiceList services={products} active={props.breadProp.title} />
          )}
          <div className="asp-right-2">
            <div className="sec2-prod-right">
              <div className="sec2-prod-right-inner">
                <span className="tele-icon">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <div>
                  <p>Have you any Questions?</p>
                  <p>
                    Call us <span className="ylo">Today!</span>
                  </p>
                </div>
                <div className="dotted-line"></div>
                <p className="call-num">
                  <a href="tel:+91-7368804237">+91-7368804237</a>
                </p>
              </div>
            </div>
            {/* <div className="sec3-p-right">
              <img src={brochure1} alt="" />
              <img src={brochure2} alt="" />
            </div> */}
            <div className="prod-img">
              {/* <img src={RoleImg} alt="" className="carrier-image" /> */}
              <form className="carrier-form">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
                <input
                  type="Email"
                  id="Email"
                  name="email"
                  placeholder="Your Email"
                />

                <input
                  type="Phone Number"
                  id="Phone Number"
                  name="number"
                  placeholder="Your Phone Number"
                />

                <input
                  type="Position"
                  id="Position"
                  name="position"
                  placeholder="Your Position"
                />

                <div className="carrier-file">
                  <label for="myfile" className="custom-file-upload">
                    <i className="fa fa-cloud-upload"></i> Upload Resume
                  </label>
                  <input type="file" id="myfile" name="myfile" />
                </div>

                <button type="submit">Submit Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
