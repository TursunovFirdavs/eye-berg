import React from 'react'

const Footer = () => {
  return (
    <div className='container md:flex text-[14px] justify-between py-5 text-text-gray'>
      <p className='order-2 md:order-1 mb-3 md:mb-0'>© 2024, АВТОРУСЬ ТАНК</p>
      <div className='flex gap-[60px] justify-between order-1 md:order-2' >
        <p>Правовая информация</p>
        <p>Условия акции</p>
      </div>
    </div>
  )
}

export default Footer
