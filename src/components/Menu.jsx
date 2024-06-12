import { Dialog } from '@headlessui/react'
import React from 'react'
import image from '../assets/image.png'
import clock from '../assets/clock.svg'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import settings from '../assets/settings.png'
import speedometer from '../assets/speedometer.png'

const Menu = ({isOpen, handleClose}) => {
  return (
    <div className='absolute top-[71px] left-0 w-full z-10  bg-main-dark'>
      <div className='container'>
        <p className='text-5 pt-1 font-bold'>АВТОРУСЬ TANK Лосиный Остров</p>
        <p className='text-[14px] text-text-gray'>Официальный дилер</p>
        <p className='text-[30px] font-semibold mt-10'>+7 (999) 999-99-99</p>
        <img src={image} alt="" />
        <div className='flex items-start text-text-gray mt-10 mb-5'>
            <img className='mt-[3px]' src={location} alt="rasm" />
            <p className='text=[14px]'>Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>
        </div>
        <div className='flex items-start text-text-gray'>
            <img className='mt-[3px]' src={clock} alt="rasm" />
            <p className='text=[14px]'>Ежедневно с 09:00 до 21:00</p>
        </div>
        <div className='bg-main-yellow flex items-center justify-center gap-2 text-black font-semibold mt-[80px] mb-10 py-3 rounded-[8px]'>
            <img src={phone} alt="rasm" />
            <p className='text=[14px]'>Заказать звонок</p>
        </div>
        <div className='flex flex-col items-center'>
        <div className='flex items-center gap-2'>
            <img src={settings} alt="rasm" />
            <p className='text-[14px]'>Записаться на сервис</p>
        </div>
        <div className='flex items-center gap-2 mt-6 mb-[60px]'>
            <img src={speedometer} alt="rasm" />
            <p className='text-[14px]'>Тест-драйв</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
