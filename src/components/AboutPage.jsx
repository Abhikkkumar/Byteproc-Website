import React from 'react'
import BreadrCump from './BreadCrump'
import About from './About'
import Section4 from './Section4'
import BusinessPartnerCarousel from './BusinessPartnerCarousel'
import MVV from './MVV'

export default function AboutPage() {
  const prop = {
    title:"About Us",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat.",
    arr:["Home","About Us"]
  }
  return (
    <div className='pt-[5rem]'>
      <BreadrCump bprops={prop}/>
      <About />
      <MVV />

      <Section4 />
      <BusinessPartnerCarousel />
      
    </div>
  )
}
