import React from 'react'
import image from '../assets/hero.png'
import arrow from '../assets/arrow.png'

const Hero = () => {
  return (
    <div className='relative'>
      <img src={image} alt="" />
      <div className='container'>
      <div className='absolute top-[100px]'>
        <p className='text-[28px] font-semibold'>Улучшим любые условия</p>
        <p className='text-[60px] font-bold'>TANK 500</p>
        <p className='text-[28px] font-semibold'>Осталось всего 5 автомобилей!</p>
        <div className='bg-main-yellow w-[246px] py-[18px] rounded-[8px] flex justify-center gap-2 mt-10 cursor-pointer items-center'>
            <p className='text-[14px] font-semibold text-black'>Получить предложение</p>
            <img src={arrow} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
