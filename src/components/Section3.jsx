import React from 'react'
import "./section3.css";
import { useNavigate } from 'react-router-dom';

export default function Section3() {
  const navigate = useNavigate();
  return (
    <div className='sec3-outer'>
      <div className='sec3-inner'>
        <h5>Have any query ?</h5>
        <h1>Byteproc Solutions Pvt. Ltd. Support and Services</h1>
        <p>Have any question related to Byteproc Solutions Pvt. Ltd. Support and services; Reach out to us from contact page and we will get back to you shortly</p>
        <button onClick={()=>{
          navigate("/contact")
        }}>GET STARTED</button>
      </div>
    </div>
  )
} 
