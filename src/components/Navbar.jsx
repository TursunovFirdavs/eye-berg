import React from 'react'
import logo from '../assets/logo.svg'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import image from '../assets/image.png'
import speedometer from '../assets/speedometer.png'
import settings from '../assets/settings.png'

const Navbar = () => {
  return (
    <div className='container flex items-center gap-8'>
      <img className='w-[54px] h-[70px]' src={logo} alt="rasm" />
      <div className='flex-1'>

        <div className='flex items-center justify-between py-2.5 border-b'>
          <div className='flex items-center gap-1'>
            <img className='w-[20px] h-[20px]' src={location} alt="rasm" />
            <p className='text-[14px] text-text-gray'>Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>
          </div>
          <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
              <img src={settings} alt="rasm" />
              <p className='text-[14px] font-semibold'>Записаться на сервис</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={speedometer} alt="rasm" />
              <p className='text-[14px] font-semibold'>Тест-драйв</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between pt-[14px] pb-5'>
          <div className='flex items-center'>
            <h1 className='text-[30px] font-bold pr-5'>АВТОРУСЬ TANK</h1>
            <p className='pl-5 border-l py-1'>Официальный дилер</p>
          </div>
          <div className='flex items-center gap-10'>
            <div className='flex flex-col justify-center items-end'>
              <p className='text-[20px] font-semibold'>+7 (999) 999-99-99</p>
              <img src={image} alt="rasm" />
            </div>
            <div className='bg-main-yellow px-[30px] py-[11px] flex items-center gap-2 text-black rounded-[8px]'>
              <img src={phone} alt="rasm" />
              <p className='text-[14px] font-semibold'>Заказать звонок</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
