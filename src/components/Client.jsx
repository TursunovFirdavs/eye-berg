import React from 'react'
import arrow from '../assets/arrow.png'
import user from '../assets/user.png'

const Client = () => {
    return (
        <div className='container bg-secondary-dark rounded-[10px] md:p-10 p-5 my-[80px] md:flex items-center justify-between'>
            <div className='mb-10 md:mb-0'>
                <p className='md:w-[524px] text-[30px] font-bold leading-[30px] mb-10'>Индивидуальное предложение для корпоративных клиентов</p>
                <div className='md:w-[207px] bg-main-yellow py-4 rounded-[8px] flex items-center justify-center gap-2 text-[14px] text-main-dark font-semibold'>
                    <p>Отправить заявку</p>
                    <img className='mt-1 md:mt-0' src={arrow} alt="" />
                </div>
            </div>
            <div className='flex gap-5 items-center pr-10'>
                <img className='w-[90px] md:w-[140px]' src={user} alt="" />
                <div>
                    <p className='md:text-[24px] text-[18px] font-bold'>Татьяна Санникова</p>
                    <p className='w-[170px] text-[14px] text-text-gray'>Отдел корпоративных продаж АВТОРУСЬ</p>
                </div>
            </div>
        </div>
    )
}

export default Client
