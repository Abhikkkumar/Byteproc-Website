import React, { useState } from "react";
import "./mvv.css";
import img1 from "../assets/Slider1.png";

export default function MVV() {
  const [mission, setMission] = useState(true);
  const [vision, setVision] = useState(false);
  const [value, setValue] = useState(false);

  return (
    <div className="mvv flex items-center  justify-around flex-wrap">
      <div className="w-[49%] py-[1.5rem] px-[1rem]">
        <p className="text-[var(--col3)]">About Our Company</p>
        <h1>Byteproc Solution Pvt. Ltd.</h1>
        <div>
          <button
            className={
              mission
                ? "mvv-active border border-solid border-[var(--col3)] px-[.75rem] py-[.4rem] rounded hover:bg-[var(--col3)] hover:text-[var(--col1)]"
                : "border border-solid border-[var(--col3)] px-[.75rem] py-[.4rem] rounded hover:bg-[var(--col3)] hover:text-[var(--col1)]"
            }
            onClick={() => {
              setMission(true);
              setVision(false);
              setValue(false);
            }}
          >
            Mission
          </button>
          <button
            className={
              vision
                ? "mvv-active border border-solid border-[var(--col3)] px-[.75rem] py-[.4rem] rounded hover:bg-[var(--col3)] hover:text-[var(--col1)] mx-[.7rem]"
                : "border border-solid border-[var(--col3)] px-[.75rem] py-[.4rem] rounded hover:bg-[var(--col3)] hover:text-[var(--col1)] mx-[.7rem]"
            }
            onClick={() => {
              setMission(false);
              setVision(true);
              setValue(false);
            }}
          >
            Vision
          </button>
          <button
            className={
              value
                ? "mvv-active border border-solid border-[var(--col3)] px-[.75rem] py-[.4rem] rounded hover:bg-[var(--col3)] hover:text-[var(--col1)]"
                : "border border-solid border-[var(--col3)] px-[.75rem] py-[.4rem] rounded hover:bg-[var(--col3)] hover:text-[var(--col1)]"
            }
            onClick={() => {
              setMission(false);
              setVision(false);
              setValue(true);
            }}
          >
            Value
          </button>
        </div>
        {mission && (
          <div className="mission">
            {/* <p className="flex items-center">
              <span className="text-[2rem] font-[600] text-[var(--col3)]">
                25{" "}
              </span>
              <span className="text-[1.2rem]"> Years Of Experience</span>
            </p> */}
            <p className="max-w-[440px] my-[.7rem] text-justify">
              Byteproc mission is to deliver cutting-edge software solutions
              that drive excellence and ensure enterprise compliance.
            </p>
            <p>
              <i className="fa-regular fa-square-check text-[var(--col3)]"></i>{" "}
              <span>UI/UX Design Journey</span>
            </p>
            <p>
              <i className="fa-regular fa-square-check text-[var(--col3)]"></i>{" "}
              <span>Solution Consultant</span>
            </p>
          </div>
        )}
        {vision && (
          <div className="mission">
            {/* <p className="flex items-center">
              <span className="text-[2rem] font-[600] text-[var(--col3)]">
                25{" "}
              </span>
              <span className="text-[1.2rem]"> Our Vision</span>
            </p> */}
            <p className="max-w-[440px] my-[.7rem] text-justify">
              Our vision is to become businesses’ first choice when it comes to
              software development and maintenance. To accomplish this, we
              always try to exceed our client’s expectations. Byteproc strives
              to build lasting partnerships and ensures client satisfaction.
            </p>
            <p>
              <i className="fa-regular fa-square-check text-[var(--col3)]"></i>{" "}
              <span>UI/UX Design Journey</span>
            </p>
            <p>
              <i className="fa-regular fa-square-check text-[var(--col3)]"></i>{" "}
              <span>Solution Consultant</span>
            </p>
          </div>
        )}
        {value && (
          <div className="mission">
            {/* <p className="flex items-center">
              <span className="text-[2rem] font-[600] text-[var(--col3)]">
                25{" "}
              </span>
              <span className="text-[1.2rem]"> Our Value</span>
            </p> */}
            <p className="max-w-[440px] my-[.7rem] text-justify">
              We clearly understand that all customer landscapes are not of same
              kind.
            </p>
            <p>
              <i className="fa-regular fa-square-check text-[var(--col3)]"></i>{" "}
              <span>UI/UX Design Journey</span>
            </p>
            <p>
              <i className="fa-regular fa-square-check text-[var(--col3)]"></i>{" "}
              <span>Solution Consultant</span>
            </p>
          </div>
        )}
        <button className="border border-solid bg-[var(--col3)] text-[var(--col1)] px-[.75rem] py-[.5rem] hover:bg-[var(--col4)] mt-[.5rem]">
          View Details
        </button>
      </div>
      <div className="w-[49%] pr-[1rem] grid place-items-center">
        <img src={img1} alt="" className="w-full" />
      </div>
    </div>
  );
}
