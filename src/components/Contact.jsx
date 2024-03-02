import React from 'react'
import BreadrCump from './BreadCrump'
import add from "../assets/contact/add.png";
import call from "../assets/contact/call.png";
import mail from "../assets/contact/mail.png";

import "./contact.css"

export default function Contact() {
  const prop = {
    title:"Contact Us",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat.",
    arr:["Home","Contact Us"]
  }
  const formState={

  };
  return (
    <div className='pt-[5rem]'>
        <BreadrCump bprops={prop}/>

        <div className="contact-outer">
      
      <div className="contact">
        <div className="contact1">
          <h6 className="contact-who">
            <img
              src="https://devsdesign.net/products/html/konstruk/assets/images/shape-1.png"
              alt=""
            />{" "}
            LETS TALK
          </h6>
          <h2>Have an Upcoming Project ?</h2>

          <form className="form" >
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
            <br />
            <input
              type="Text"
              id="name"
              name="phone-number"
              
              placeholder="Phone Number"
            />
            <input
              type="text"
              id="name"
              name="website"
              
              placeholder="Your Website"
             
            />
            <br />
            <textarea
              type="text"
              id="name"
              name="message"
              
              placeholder="Your Massege Here"
             
            />
            <br />
            <button type="submit">Submit Now</button>
          </form>
        </div>

        <div className="Contact-Right-Side">
          <div className="card">
            <img src={add} alt="" className='w-[60px] h-[60px]'/>
            <div className="card1">
              <h5>Address</h5>
              <p>Gopalpur, Raja Bajar, Motihari, Bihar</p>
              <p>845401</p>
            </div>
          </div>

          <div className="card">
            <img src={mail} alt="" />
            <div className="card1">
              <h5>Email Us</h5>
              <p>
                <a href="mailto:info@byteproc.com">info@byteproc.com</a>
              </p>
              {/* <p>test2@gmail.com</p> */}
            </div>
          </div>

          <div className="card">
            <img src={call} alt="" />
            <div className="card1">
              <h5>Call Us</h5>
              <p>
                <a href="tel:+91-7368804237">+91-7368804237</a>
              </p>
              {/* <p>(+0888) 222-9999</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>


      
    </div>
  )
}
