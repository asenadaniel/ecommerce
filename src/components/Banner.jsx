import React, { useState } from 'react'
import { ArrowBack, ArrowForward } from '@mui/icons-material';

function Banner() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    "https://i.imgur.com/SH50uRy.jpg",
    "https://i.imgur.com/lgpN4Py.jpg",
    "https://i.imgur.com/g1WrPnQ.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : prev => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : prev => prev + 1)
  }

  return (
    <div className=' hidden md:w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div style={{ transform: `translateX(-${currentSlide * 100}vw)` }} className='w-[400vw] h-full flex transition-transform duration-1000 '
        >
          <img
            className='w-screen h-full object-cover' src={data[0]}
            alt=""
            loading='priority'
          />
          <img
            className='w-screen h-full object-cover'
            src={data[1]}
            alt=""
            loading='priority'
          />
          <img
            className='w-screen h-full object-cover'
            src={data[2]}
            alt=""
            loading='priority'
          />
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-20 bottom-44'>
          <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-900 flex items-center justify-center hover:cursor-pointer hover:bg-gray-950 hover:text-white active:bg-gray-500 duration-300'>
            <ArrowBack />
          </div>
          <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-900 flex items-center justify-center hover:cursor-pointer hover:bg-gray-950 hover:text-white active:bg-gray-500 duration-300'>
            <ArrowForward />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
