import React from 'react'
import ServiceTemp from './ServiceTemp'
import { DigitalProp } from './Data'

export default function DigitalMarketing() {
  return (
    <div className='pt-[3.5rem]'>
      <ServiceTemp props={DigitalProp}/>
    </div>
  )
}
