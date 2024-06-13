import React from 'react'
import hero from '../assets/secondary.png'
import arrow from '../assets/arrow.png'

const SecondaryHero = () => {
  return (
    <div className='relative'>
      <img className='h-[520px] md:h-[400px] object-cover object-left' src={hero} alt="" />
      <div className="container">
        <div className='absolute top-10'>
            <p className='text-[40px] font-bold w-[354px] leading-[40px]'>Оставьте заявку на кредит</p>
            <p>и получите одобрение за 1 день!</p>
            <p className='mt-10 mb-2'>Телефон</p>
            <div className='md:flex items-center gap-6'>
                <input className='border border-gray-500 md:w-[300px] w-full pl-5 py-[18px] bg-secondary-dark text-text-gray rounded-[8px]' type="text" placeholder='+7 (___) ___-__-__' />
                <div className='md:w-[207px] w-full mt-3 md:mt-0 bg-main-yellow rounded-[8px] py-[18px] text-[14px] text-main-dark font-semibold flex items-center justify-center gap-2'>
                    <p>Отправить заявку</p>
                    <img className='mt-1' src={arrow} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SecondaryHero
