import React from 'react'
import Image from 'next/image'

type ValueProps = {
    icon: string;
    title: string;
    text: string;
    bg: boolean;
}

export default function ValueContainer({icon, title, text, bg}: ValueProps) {
  return (
    <div className={`md:w-125 w-82 h-61.5 py-10 px-10 md:space-y-5 space-y-3 rounded-2xl ${bg ? "bg-gray-100" : "bg-white"}`}>
      <div className='w-full'>
        <Image src={icon} width={45} height={45} alt='icon' />
      </div>

      <div className='w-full md:text-[20px]'>
        <h1 className='primary-font'>{title}</h1>
        <p className='columns-auto secondary-font'>{text}</p>
      </div>
    </div>
  )
}
