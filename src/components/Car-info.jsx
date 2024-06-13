import React, { useEffect, useState } from 'react'
import sign from '../assets/sign.png'
import arrow from '../assets/arrow.png'
import { IoIosArrowForward } from "react-icons/io";
import sale from '../assets/sale.png'
import check from '../assets/check.png'
import tag from '../assets/tag.png'
import sertificate from '../assets/certificate.png'
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'
import car4 from '../assets/car4.png'
import car5 from '../assets/car5.png'
import defaultCar from '../assets/DefaultCar.png'
import blackCar from '../assets/blackCar.png'
import whiteCar from '../assets/whiteCar.png'
import greyCar from '../assets/greyCar.png'
import { IoCheckmarkSharp } from "react-icons/io5";
import discount from '../assets/Frame.png'
import { useNavigate } from 'react-router-dom';



const CarInfo = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const[selected, setSelected] = useState(0)

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
    const cars = [defaultCar, whiteCar, greyCar, blackCar]
    const navigate = useNavigate()

    return (
        <div className='bg-secondary-dark md:py-[80px] py-10'>
            <div className='container'>
                <div className='md:flex gap-[23px]'>
                    <div className='md:flex flex-row-reverse items-center relative'>
                    <img className='min-w-[345px]' src={cars[selected]}/>
                    <div className='flex md:flex-col justify-center mt-[10px] md:mt-0 gap-[10px]'>
                        <p onClick={() => setSelected(0)} className='w-[30px] h-[30px] rounded-full bg-[#B0A798] border flex items-center justify-center'>{selected === 0 && <IoCheckmarkSharp />}</p>
                        <p onClick={() => setSelected(1)} className='w-[30px] h-[30px] rounded-full bg-[#E6E7E8] border flex items-center justify-center'>{selected === 1 && <IoCheckmarkSharp className='text-gray-400' />}</p>
                        <p onClick={() => setSelected(2)} className='w-[30px] h-[30px] rounded-full bg-[#A2A4AB] border flex items-center justify-center'>{selected === 2 && <IoCheckmarkSharp />}</p>
                        <p onClick={() => setSelected(3)} className='w-[30px] h-[30px] rounded-full bg-[#212329] border flex items-center justify-center'>{selected === 3 && <IoCheckmarkSharp />}</p>
                    </div>
                    <img className='absolute md:top-2 top-0 md:right-10 right-0 w-[100px] md:w-[154px]' src={discount} alt="" />
                    </div>
                    <div className='flex-1 mt-6 md:mt-0'>
                        <p className='text-main-yellow md:text-[20px] text-[14px]'>Только в АВТОРУСЬ!</p>
                        <p className='md:text-[40px] text-[28px] font-bold'>TANK 500</p>
                        <p className='md:text-[30px] text-[24px] font-semibold'>Выгода до 700 000 ₽ </p>
                        <div className='bg-[#FF2B00] w-[264px] text-[14px] mb-10 rounded-[10px] flex items-center justify-between px-[10px] py-1'>
                            <img src={sign} alt="" />
                            <p>Ограниченное предложение!</p>
                            <img src={sign} alt="" />
                        </div>
                        <div onClick={() => navigate('/offer')} className='border mt-[10px] cursor-pointer border-main-yellow rounded-[10px] flex items-center justify-center py-4 w-full bg-main-yellow text-black '>
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
                        <img className='w-[120px] md:w-[240px]' key={i} src={item} alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarInfo
