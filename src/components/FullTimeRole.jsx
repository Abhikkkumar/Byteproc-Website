import React from "react";
import "./FullTimeRole.css";
import BreadrCump from "./BreadCrump";
import RoleImg from "../assets/byteproc parallex.png";
import Section4 from "./Section4";

export default function FullTimeRole() {
  const propbread = {
    title: "Full Time Role",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat.",
    arr: ["Home", "Career", "Full Time Role"],
  };

  const props = {
    img: "s4.jpg",
    title: "Career",
    text1:
      "Join our nationally recognized, award winning team! Incredible opportunities available now. Competitive salary and benefits available. Most rewarding job in the country! Apply now!",
  };
  return (
    <div className="pt-[3.5rem]">
      <div>
        <BreadrCump bprops={propbread} />
        <div className="all-section-p">
          <div className="asp-left">
            <div className="prod-img">
              <img src={RoleImg} alt="" className="carrier-image" />
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

                {/* <input
                  type="Position"
                  id="Position"
                  name="position"
                  placeholder="Your Position"
                /> */}
                <div className="flex w-[95%] my-[.4rem] mx-auto">
                  <label for="position" className="w-fit p-[.7rem] text-[1rem]">
                    Select your field:
                  </label>
                  <select name="field" id="position" className="">
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Software Development">
                      Software Development
                    </option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>

                <div className="carrier-file">
                  <label for="myfile" className="custom-file-upload">
                    <i className="fa fa-cloud-upload"></i> Upload Resume
                  </label>
                  <input type="file" id="myfile" name="myfile" />
                </div>

                <button type="submit">Submit Now</button>
              </form>
            </div>
            <div className="sec2-prod-left">
              <h1>{props.title}</h1>
              <p>{props.text1}</p>
            </div>
          </div>
          <div className="asp-right">
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
                    <a href="tel:+91-8320844583">+91-8320844583</a>
                  </p>
                </div>
              </div>
              <div className="sec3-p-right">
                <h1>Brochure</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem sit ipsa qui commodi numquam.
                </p>
                <div className="s3p-btn-cnt ">
                  <button className="bg-[#e97f23]">Download</button>
                  <span className="bg-[#fff]">Or</span>
                  <button className="bg-[var(--col3)]">Discover</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Section4 />
        {/* <div className="faqs  shadow">
        <h2>Frequently Asked Questions </h2>
        <p>
          We have compiled answers of commonly asked questions regarding Remote
          Pilot Training Organisation (RTPO).
        </p>
        <div className="faq-inner">
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                setAns0(!ans0);
              }}
            >
              Q: What is UIN?
            </h3>
            {ans0 && (
              <p>
                UIN can be abbreviated as “Unique Identification Number “and is
                issued for registering an unmanned aircraft system in India.
              </p>
            )}
          </div>
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                setAns1(!ans1);
              }}
            >
              Q: What is DAN?
            </h3>
            {ans1 && (
              <p>
                “Drone acknowledgement number” means the unique number issued by
                the digital sky platform under the voluntary disclosure scheme
                for unmanned aircraft systems in India
              </p>
            )}
          </div>
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                setAns2(!ans2);
              }}
            >
              Q: I have a self assembled Drone. How can I obtain the UIN for
              that?
            </h3>
            {ans2 && (
              <p>
                For self assembled drones with all up weight not exceeding 25
                Kg, organisations can now apply for UIN under ‘Model’
                subcategory, subject to compliance with Drone Rules, 2021. This
                does not need a Type Certificate or a DAN.
              </p>
            )}
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}
