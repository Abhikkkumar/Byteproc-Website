import React from 'react'
import "./services.css";

export default function Services() {
  return (
   <div className='Ser'>
    <div id="services">
      <div className='container'>
        <h1 className='sub-title'>My Services</h1>
        <div className='services-list'>
          <div className='service1'>
            <i class="fa-solid fa-code"></i>
            <h1>Software Development</h1>
            <p>We provide software as per your demand.</p>
            <a href='#'>Learn More</a>
          </div>

          <div className='service2'>
            <i class="fa-solid fa-crop"></i>
            <h1>Web Development</h1>
            <p>First Impressions mean everythings especially on Internet.</p>
            <a href='#'>Learn More</a>
          </div>

          <div className='service3'>
            <i class="fa-brands fa-app-store-ios"></i>
            <h1>App Development</h1>
            <p>We provide Android app as per your demand.</p>
            <a href='#'>Learn More</a>
          </div>

          <div className='service4'>
            <i class="fa-solid fa-shop"></i>
            <h1>Digital Marketing</h1>
            <p>Advertising delivered through digital channels.</p>
            <a href='#'>Learn More</a>
          </div>
        </div>
      </div>

    </div>
   </div>
  )
}
