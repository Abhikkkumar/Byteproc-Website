import React from 'react'
import ServiceTemp from './ServiceTemp'
import { APIProp } from './Data'

export default function ApiDev() {
  return (
    <div className='pt-[5rem]'>
      <ServiceTemp props={APIProp}/>
    </div>
  )
}