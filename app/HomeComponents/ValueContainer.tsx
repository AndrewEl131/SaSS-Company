import React from 'react'
import Image from 'next/image'

type ValueProps = {
    icon: string;
    title: string;
    text: string;
}

export default function ValueContainer({icon, title, text}: ValueProps) {
  return (
    <div className='w-125 h-61.5 bg-white py-10 px-10 space-y-5 rounded-2xl'>
      <div className='w-full'>
        <Image src={icon} width={45} height={45} alt='icon' />
      </div>

      <div className='w-full text-[20px]'>
        <h1 className='primary-font'>{title}</h1>
        <p className='columns-auto secondary-font'>{text}</p>
      </div>
    </div>
  )
}
