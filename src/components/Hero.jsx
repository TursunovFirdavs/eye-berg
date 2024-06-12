import React, { useEffect, useState } from 'react'
import image from '../assets/hero.png'
import header from '../assets/header.png'
import arrow from '../assets/arrow.png'

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(windowWidth);
  return (
    <div className='relative'>
      <img className={`h-[300px] md:h-[550px] w-[700px] md:w-full ${!windowWidth > 700 && 'object-cover'}`} src={windowWidth > 770 ? image : header} alt="" />
      <div className='container'>
      <div className='md:absolute top-[100px] mt-5 md:mt-0'>
        <p className='md:text-[28px] text-[18px] font-semibold'>Улучшим любые условия</p>
        <p className='md:text-[60px] text-[40px] font-bold'>TANK 500</p>
        <p className='md:text-[28px] text-[18px] font-semibold'>Осталось всего 5 автомобилей!</p>
        <div className='bg-main-yellow md:w-[246px] w-full py-[18px] rounded-[8px] flex justify-center gap-2 mt-10 cursor-pointer items-center'>
            <p className='text-[14px] font-semibold text-black'>Получить предложение</p>
            <img src={arrow} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
