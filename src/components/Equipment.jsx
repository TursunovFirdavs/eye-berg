import React from 'react'
import car from '../assets/white.png'
import tag from '../assets/tag.png'
import gift from '../assets/gift.png'
import arrow from '../assets/arrow.png'
import { IoIosArrowForward } from "react-icons/io";


const Equipment = () => {
    const data = [1,2,3]
    return (
        <div className='container pb-[80px]'>
            <p className='text-center md:text-[40px] text-[28px] font-bold md:mt-[100px] mt-[80px] mb-10'>ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ</p>
            <div className='md:flex justify-between'>
                <div>
                    <p className='text-[14px] text-text-gray mb-2'>Модель</p>
                    <select className='md:w-[416px] w-full bg-secondary-dark border border-gray-600 rounded-[8px] h-[52px]'></select>
                </div>
                <div>
                    <p className='text-[14px] text-text-gray mb-2'>Комплектация</p>
                    <select className='md:w-[416px] w-full bg-secondary-dark border border-gray-600 rounded-[8px] h-[52px]'></select>
                </div>
                <div>
                    <p className='text-[14px] text-text-gray mb-2'>Двигатель</p>
                    <select className='md:w-[416px] w-full bg-secondary-dark border border-gray-600 rounded-[8px] h-[52px]'></select>
                </div>
            </div>
            <div className='mt-10 flex flex-col gap-[10px]'>
                {data.map(item => (
                    <div className='md:flex items-start justify-between border border-gray-500 md:p-6 p-4 rounded-[10px]'>
                    <img className='w-[416px]' src={car} alt="" />
                    <div className='flex-1'>
                        <p className='text-[30px] font-bold'>TANK 300</p>
                        <p className='text-[18px] text-text-gray md:mb-8 mb-6'>2.0 л. Бензин, Полный, Автоматическая</p>
                        <p className='text-[24px] font-bold'>3 649 000 ₽</p>
                        <div className='md:flex gap-6 mt-6 mb-10 md:mb-0'>
                            <div className='flex items-start gap-[10px]'>
                                <img src={tag} alt="" />
                                <p>Выгода по Trade-in до 450 000 ₽ </p>
                            </div>
                            <div className='flex items-start w-[304px] gap-[10px]'>
                                <img src={gift} alt="" />
                                <p>Керамическое покрытие подарок!</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[136px]'>
                        <div key={item} className=' md:w-[320px] w-full bg-main-yellow text-main-dark text-[14px] font-semibold flex items-center justify-center gap-2 py-4 rounded-[8px]'>
                            <p>Получить предложение</p>
                            <img src={arrow} alt="" />
                        </div>
                        <div className=' md:w-[320px] w-full border border-main-yellow text-[14px] font-semibold mt-3 flex items-center justify-center gap-2 py-4 rounded-[8px]'>
                            <p>Тест-драйв</p>
                            <IoIosArrowForward className='mt-1'/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Equipment
