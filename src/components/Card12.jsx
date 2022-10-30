import React from 'react'

export default function Card12({ image, title, subtitle }) {
  return (
    <div className='w-full h-[160px] bg-white'>
      <div className='flex h-full w-full'>
        <div className='bg-white w-2/6 h-full'>
          <img src={image} alt="" className="w-full h-full object-cover" />

        </div>
        <div className='flex flex-col w-full h-full'>
          <h1 className='mt-4 ml-4 mr-auto'>{title}</h1>

          <div className='mt-4 ml-4' >
            {subtitle}
          </div>
          <div className='mt-auto ml-4' >
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}