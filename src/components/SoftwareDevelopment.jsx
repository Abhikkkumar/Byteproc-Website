import React from 'react'
import ServiceTemp from './ServiceTemp'
import { SoftwareProp } from './Data'

export default function SoftwareDevelopment() {
  return (
    <div className='pt-[3.5rem]'>
      <ServiceTemp props={SoftwareProp}/>
    </div>
  )
}