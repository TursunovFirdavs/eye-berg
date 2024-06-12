import React, { useEffect, useState } from 'react'
import car from '../assets/car.png'
import sign from '../assets/sign.png'
import arrow from '../assets/arrow.png'
import { IoIosArrowForward } from "react-icons/io";
import carMobile from '../assets/CarMobile.png'
import sale from '../assets/sale.png'
import check from '../assets/check.png'
import tag from '../assets/tag.png'
import sertificate from '../assets/certificate.png'
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'
import car4 from '../assets/car4.png'
import car5 from '../assets/car5.png'


const CarInfo = () => {
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

    const data = [
        {
            img: check,
            info: 'Автомобили в наличии с ПТС'
        },
        {
            img: sertificate,
            info: 'Сервисная поддержка до 5 лет / 150 000 км'
        },
        {
            img: tag,
            info: 'Улучшим любое предложение'
        },
        {
            img: sale,
            info: 'Кредит 0,01%'
        }
    ]

    const images = [car1, car2, car3, car4, car5]

    return (
        <div className='bg-secondary-dark md:py-[80px] py-10'>
            <div className='container'>
                <div className='md:flex gap-[23px]'>
                    <img src={windowWidth > 770 ? car : carMobile} alt="" />
                    <div className='flex-1 mt-6 md:mt-0'>
                        <p className='text-main-yellow md:text-[20px] text-[14px]'>Только в АВТОРУСЬ!</p>
                        <p className='md:text-[40px] text-[28px] font-bold'>TANK 500</p>
                        <p className='md:text-[30px] text-[24px] font-semibold'>Выгода до 700 000 ₽ </p>
                        <div className='bg-[#FF2B00] w-[264px] text-[14px] mb-10 rounded-[10px] flex items-center justify-between px-[10px] py-1'>
                            <img src={sign} alt="" />
                            <p>Ограниченное предложение!</p>
                            <img src={sign} alt="" />
                        </div>
                        <div className='border mt-[10px] cursor-pointer border-main-yellow rounded-[10px] flex items-center justify-center py-4 w-full bg-main-yellow text-black '>
                            <p className='text-[14px] font-semibold'>Узнать стоимость по акции</p>
                            <img src={arrow} alt="" />
                        </div>
                        <div className='border mt-[10px] cursor-pointer border-main-yellow rounded-[10px] flex items-center justify-center py-4 w-full '>
                            <p className='text-[14px] font-semibold'>Тест-драйв</p>
                            <IoIosArrowForward/>
                        </div>
                        <div className='border mt-[10px] cursor-pointer border-main-yellow rounded-[10px] flex items-center justify-center py-4 w-full '>
                            <p className='text-[14px] font-semibold'>Рассчитать кредит</p>
                            <IoIosArrowForward/>
                        </div>
                    </div>
                </div>
                <div className='md:flex justify-between py-[30px]'>
                    {data.map(item => (
                        <div key={item.info} className='md:w-[306px] rounded-[10px] py-[10px] px-[14px] flex mt-1 md:mt-0 items-center gap-2 bg-main-dark'>
                            <img src={item.img} alt="" />
                            <p className='md:w-[168px] w-[173px] leading-[18px]'>{item.info}</p>
                        </div>
                    ))}
                </div>
                <div className='flex gap-[10px] justify-between container overflow-auto'>
                    {images.map((item, i) => (
                        <img className='w-[120px] md:w-[200px]' key={i} src={item} alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarInfo
