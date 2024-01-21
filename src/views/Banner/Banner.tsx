import React from 'react'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const Banner = () => {
  return (
    <div className='w-full lg:h-[600px] bg-gradient-to-b from-[#f2f2f2] to-white flex justify-center items-center 2xl:gap-36'>
        <div className='flex justify-center items-center'>
            <div className='w-full lg:w-[600px] flex flex-col justify-center items-center xl:items-start gap-8 p-8 text-justify'>
                <span className='font-bold text-[36px] text-left'>Odkryj Marketplace - ogłoszenia produktów Apple</span>

                <span className='text-[20px]'>Marketplace to platforma, gdzie pasjonaci Apple mogą swobodnie wystawiać na sprzedaż swoje używane produkty. Dołącz do społeczności, która dzieli miłość do technologii Apple!</span>

                <PrimaryButton styles="w-[10vw] h-[50px]">
                    <span>Sprzedaj teraz</span>
                </PrimaryButton>
            </div>
        </div>

        <div className='w-[400px] h-full justify-center items-center hidden xl:flex'>
            <img 
                src="https://shop.belong.com.au/cdn/shop/files/removal.ai__tmp-64a2306d1c556_0OSCKW_1445x.png?v=1688350868" 
                alt="iphone image" 
                className='w-[350px]'
            />
        </div>
    </div>
  )
}

export default Banner