import React from 'react'
import arrow from '../assets/arrow.png'
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Offer = () => {
    const navigate =useNavigate()
  return (
    <div className='flex items-center justify-center md:h-[100vh]'>
      <div className='bg-secondary-dark md:w-[555px] w-[345px] relative md:px-[80px] px-4 my-[100px] md:my-0 rounded-[10px] py-10'>
        <p className='text-[30px] font-bold text-center leading-[30px]'>Получить предложение</p>
        <p className='text-center mt-4 mb-10 w-[266px] md:w-[380px] m-auto'>Пожалуйста, укажите свои данные. Наш менеджер свяжется с вами в течение 15 минут.</p>
        <p className='text-[14px] text-text-gray'>Модель</p>
        <select className='w-full h-[52px] rounded-[8px] bg-secondary-dark border border-gray-500 mt-2 mb-6 ' name="" id="Модель"></select>
        <p className='text-[14px] text-text-gray'>Телефон</p>
        <input className='w-full h-[52px] rounded-[8px] bg-secondary-dark border border-gray-500 pl-5 mt-2 mb-6' type="text" placeholder='+7 (___) ___-__-__' />
        <div className='bg-main-yellow cursor-pointer pb-[18px] pt-[14px] rounded-[8px] w-full mt-7 flex gap-2 items-center justify-center'>
        <p className='text-[14px] text-main-dark font-semibold'>Получить предложение</p>
            <img className='mt-0.5' src={arrow} alt="" />
        </div>
        <div className='flex gap-[10px] md:items-center items-start mt-[30px]'>
            <input className='w-[14px] h-[14px] bg-secondary-dark border mt-2 md:mt-0 border-gray-500 rounded-[4px]' type="checkbox" />
            <p>Согласен на обработку персональных данных.</p>
        </div>
        <IoClose onClick={() => navigate(-1)} className='absolute top-5 cursor-pointer right-5 text-2xl' />
      </div>
    </div>
  )
}

export default Offer
