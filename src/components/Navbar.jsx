import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import call from '../assets/call.svg'
import menu from '../assets/menu.svg'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import image from '../assets/image.png'
import speedometer from '../assets/speedometer.png'
import settings from '../assets/settings.png'
import Menu from './Menu'
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='container flex items-center md:gap-8 gap-2'>
      <img className='md:w-[54px] w-[31px] md:h-[70px] h-[40px]' src={logo} alt="rasm" />
      <div className='flex-1'>

        <div className='md:flex hidden items-center justify-between py-2.5 border-b'>
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

        <div className='flex items-center justify-between pt-[10px] mt-1 pb-5'>
          <div className='md:flex items-center'>
            <h1 className='md:text-[30px] text-[13.5px] md:font-bold font-semibold md:pr-5'>АВТОРУСЬ TANK <span className='md:hidden'>Лосиный Остров</span></h1>
            <p className='md:pl-5 text-text-gray md:text-white text-[12px] md:border-l md:py-1'>Официальный дилер</p>
          </div>
          <div className='md:hidden flex gap-3'>
            <img src={call} alt="rasm" />
            {!isOpen ? 
            <img onClick={() => setIsOpen(true)} className='cursor-pointer' src={menu} alt="rasm" />
            :
            <IoClose onClick={() => setIsOpen(false)} className='text-2xl pt-[1px] cursor-pointer' />
          }
          </div>
          <div className='md:flex hidden items-center gap-10'>
            <div className='flex flex-col justify-center items-end'>
              <p className='text-[20px] font-semibold'>+7 (999) 999-99-99</p>
              <img src={image} alt="rasm" />
            </div>
            <div onClick={() => navigate('/offer')} className='bg-main-yellow px-[30px] py-[11px] flex items-center gap-2 text-black cursor-pointer rounded-[8px]'>
              <img src={phone} alt="rasm" />
              <p className='text-[14px] font-semibold'>Заказать звонок</p>
            </div>
          </div>
        </div>

      </div>

      {isOpen && 
      <Menu
      handleClose={setIsOpen}
    />
      }
    </div>
  )
}

export default Navbar
