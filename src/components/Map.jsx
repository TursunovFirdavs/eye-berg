import React, { useEffect, useState } from 'react'
import map1 from '../assets/map1.png'
import map2 from '../assets/map2.png'
import image from '../assets/image.png'
import phone from '../assets/phone.png'
import speedometer from '../assets/speedometer.png'
import settings from '../assets/settings.png'

const Map = () => {
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
    return (
        <div className='container'>
            <img src={windowWidth > 770 ? map1 : map2} alt="" />
            <p className='md:mt-[100px] mb-5 mt-[60px]'>Дисклеймер</p>
            <p className='text-text-gray'>TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK (ТЭНК) 300 в комплектации Adventure (Эдвенчер) с двигателем 2,0T 4WD, 2023 года производства, цвет автомобиля: белый, с учетом выгоды по трейд-ин 300 000 рублей. В трейд-ин принимаются автомобили с пробегом со сроком владения и регистрации (постановки на учет) в органах ГИБДД не менее 6 месяцев (в отношении автомобилей бренда TANK, Haval, Great Wall – 3 месяца) до сдачи автомобиля в трейд-ин. В качестве документов, подтверждающих срок владения сдаваемого в трейд-ин автомобиля, собственнику необходимо предоставить копию ПТС или СТС или карточку учета ТС из ГИБДД с печатью и подписью. Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой и действует с 01.04.2024г.</p>
            <p className='text-text-gray md:pb-[60px] mb-10 pb-10 border-b border-gray-500 md:mb-[60px]'>TANK 500 за 5 349 000 руб с учетом поддержек. Цена на модель TANK (ТЭНК) 500 в комплектации Adventure (Эдвенчер) с двигателем 3,0T 4WD, 2023 года производства, цвет автомобиля: белый, с учетом прямой выгоды в 950 000 рублей. Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой и действует с 01.04.2024г.</p>
            <div className='md:flex justify-between md:pb-[60px] pb-[40px] border-b border-gray-500'>
                <div>
                    <div>
                        <p className='font-semibold'>АВТОРУСЬ TANK Лосиный Остров</p>
                        <p className='text-[14px] text-text-gray'>Официальный дилер</p>
                    </div>
                    <p className='text-[14px] text-text-gray md:my-10 my-7 '>Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>
                    <div>
                        <p className='text-[14px] text-text-gray'>Официальный дилер</p>
                        <p>ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903</p>
                    </div>
                </div>
                <div className='md:flex flex-col items-end'>
                    <div className='md:flex items-center gap-10'>
                        <div className='flex flex-col my-10 md:my-0 justify-center md:items-end items-start'>
                            <p className='text-[20px] font-semibold'>+7 (999) 999-99-99</p>
                            <img src={image} alt="rasm" />
                        </div>
                        <div className='bg-main-yellow md:w-[207px] w-full  py-[11px] flex items-center justify-center gap-2 text-black rounded-[8px]'>
                            <img src={phone} alt="rasm" />
                            <p className='text-[14px] font-semibold'>Заказать звонок</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-9 md:gap-10 gap-6'>
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
            </div>
        </div>
    )
}

export default Map
