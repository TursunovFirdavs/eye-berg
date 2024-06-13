import React from 'react'
import day from '../assets/day.svg'
import arrow from '../assets/arrow.png'
import medal from '../assets/medal.png'
import note from '../assets/note.png'
import timer from '../assets/timer.png'
import red from '../assets/red.png'
import white from '../assets/white.png'
import { useNavigate } from 'react-router-dom'

const Pointer = () => {
    const navigation = useNavigate()
    const data = [
        {
            img: medal,
            title: 'Официальный дилер',
            info: "Гарантируем высокое качество обслуживания."
        },
        {
            img: timer,
            title: 'ПОКУПКА АВТО ЗА 1 ДЕНЬ',
            info: "Удобный процесс покупки, включая оформление всех документов."
        },
        {
            img: note,
            title: 'ВСЕ КОМПЛЕКТАЦИИ В НАЛИЧИИ',
            info: "Широкий выбор комплектаций, с полным пакетом документов"
        },
    ]
    return (
        <div className='container'>
            <div className='bg-secondary-dark md:flex items-center justify-between rounded-[10px] md:px-10 px-4 py-5 mt-5 mb-[60px]'>
                <p className='w-[318px] md:text-[30px] text-[28px] font-bold leading-[30px]'>Срок действия спецпредложения:</p>
                <img className='my-6 md:my-0' src={day} alt="rasm" />
                <div onClick={() => navigation('/offer')} className='bg-main-yellow cursor-pointer pb-[18px] pt-[14px] rounded-[8px] md:w-[248px] flex gap-2 items-center justify-center'>
                    <p className='text-black text-[14px] font-semibold'>Узнать цену с выгодами</p>
                    <img className='mt-1' src={arrow} alt="rasm" />
                </div>
            </div>
            <div className='md:flex gap-[10px] justify-between'>
                {data.map(item => (
                    <div className='md:w-[416px] w-full border rounded-[10px] p-5 flex md:items-start items-center gap-7 mb-[10px] md:mb-0' key={item.title}>
                        <img src={item.img} alt="rasm" />
                        <div>
                            <p className='text-[20px] font-bold md:mb-[14px] leading-[22px]'>{item.title}</p>
                            <p className='hidden md:block'>{item.info}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className='md:w-[1158px] w-full m-auto md:text-[40px] text-[28px] font-bold text-center uppercase md:mt-[100px] mt-[60px] mb-10'>ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ 100 000 ₽</p>
            <div className='flex justify-center gap-6 mb-[60px]'>
                <div className='flex flex-col items-center'>
                    <img className='w-[140px] md:w-[196px]' src={red} alt="rasm" />
                    <p>TANK 300</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='w-[140px] md:w-[196px]' src={white} alt="rasm" />
                    <p>TANK 500</p>
                </div>
            </div>
        </div>
    )
}

export default Pointer
