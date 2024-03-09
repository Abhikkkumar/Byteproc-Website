import React from 'react'
import ServiceTemp from './ServiceTemp'
import { AppProp } from './Data'

export default function AppDev() {
  return (
    <div className='pt-[3.5rem]'>
      <ServiceTemp props={AppProp}/>
    </div>
  )
}