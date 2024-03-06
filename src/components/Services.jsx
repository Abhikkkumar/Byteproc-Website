import React from "react";
import "./services.css";
import { useNavigate } from "react-router-dom";
import software from "../assets/services/software-development.png";
import website from "../assets/services/website.png";
import digital from "../assets/services/Digital-marketing.png";
import app from "../assets/services/app-development.png";

export default function Services() {
  const navigate = useNavigate();
  return (
    <div className="Ser mx-auto">
      <div id="services mx-auto">
        <div className="container mx-auto mt-[.75rem] mb-[1.25rem]">
          <h1 className="sub-title">My Services</h1>
          <div className="services-list px-[.75rem]">
            <div className="service1">
              <div className="w-[70px] h-[70px] grid place-items-center  img-icon-pd">
                <img className="w-[70%]" src={software} alt="" />
              </div>

              <h1>Software Development</h1>
              <p>We provide software as per your demand.</p>
              <div
                className="flex items-center mt-[.75rem]"
                onClick={() => navigate("/software-development")}
              >
                <div className="w-[1.5rem] border border-[var(--col1)] border-solid"></div>
                <p className="mx-[.5rem]">Learn More</p>
                <div className="w-[1.5rem] border border-[var(--col1)] border-solid"></div>
              </div>
            </div>
            <div className="service2">
              <div className="w-[70px] h-[70px] grid place-items-center  img-icon-pd">
                <img className="w-[70%]" src={website} alt="" />
              </div>
              <h1>Web Development</h1>
              <p>First Impressions mean everything on Internet.</p>
              <div
                className="flex items-center mt-[.75rem]"
                onClick={() => navigate("/website-development")}
              >
                <div className="w-[1.5rem] border border-[var(--col1)] border-solid"></div>
                <p className="mx-[.5rem]">Learn More</p>
                <div className="w-[1.5rem] border border-[var(--col1)] border-solid"></div>
              </div>
            </div>
            <div className="service3">
              <div className="w-[70px] h-[70px] grid place-items-center  img-icon-pd">
                <img className="w-[70%]" src={app} alt="" />
              </div>

              <h1>App Development</h1>
              <p>We provide Android app as per your demand.</p>
              <div
                className="flex items-center mt-[.75rem]"
                onClick={() => navigate("/app-development")}
              >
                <div className="w-[1.5rem] border border-[var(--col1)] border-solid"></div>
                <p className="mx-[.5rem]">Learn More</p>
                <div className="w-[1.5rem] border border-[var(--col1)] border-solid"></div>
              </div>
            </div>
            <div className="service4">
              <div className="w-[70px] h-[70px] grid place-items-center  img-icon-pd">
                <img className="w-[70%]" src={digital} alt="" />
              </div>

              <h1>Digital Marketing</h1>
              <p>Advertising delivered through digital channels.</p>
              <div
                className="flex items-center mt-[.75rem]"
                onClick={() => navigate("/digital-marketing")}
              >
                <div className="w-[1.5rem] border border-[var(--col1)] border-solid"></div>
                <p className="mx-[.5rem]">Learn More</p>
                <div className="w-[1.5rem] border border-[var(--col1)] border-solid"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
