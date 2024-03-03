import React from 'react'
import ServiceTemp from './ServiceTemp'
import { webDevProp } from './Data'

export default function WebsiteDevelopment() {
  return (
    <div className='pt-[5rem]'>
      <ServiceTemp props={webDevProp}/>
    </div>
  )
}