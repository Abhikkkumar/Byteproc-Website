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
              {/* <i class="fa-solid fa-code"></i> */}
              <img className="w-[90px]" src={software} alt="" />
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
              {/* <i class="fa-solid fa-crop"></i> */}
              <img className="w-[90px]" src={website} alt="" />
              <h1>Web Development</h1>
              <p>First Impressions mean everythings especially on Internet.</p>
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
              {/* <i class="fa-brands fa-app-store-ios"></i> */}
              <img className="w-[90px]" src={app} alt="" />
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
              {/* <i class="fa-solid fa-shop"></i> */}
              <img className="w-[90px]" src={digital} alt="" />
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
