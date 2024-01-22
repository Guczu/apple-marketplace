import React from 'react'
import { FaApple } from "react-icons/fa";
import { footerLinks } from '../../constants/footer';
import FooterLink from './FooterLink/FooterLink';
import { GrSend } from "react-icons/gr";
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const Footer = () => {
  return (
    <footer className='w-full bg-main-nav flex flex-col items-center p-8 gap-8 text-typography-soft'>
        <div className='flex flex-col justify-center items-center gap-1'>
            <FaApple className='w-8 h-8 text-typography-soft'/>
            <span className='font-medium'>MarketPlace</span>
        </div>

        <div className='w-full flex justify-center items-center text-center flex-wrap pb-12 gap-16'>
            <div className='w-[45vw] max-w-[800px] xl:h-[120px] flex flex-col flex-wrap justify-center items-center xl:justify-start xl:items-start'>
                {footerLinks.map((link, index) => {
                    return (
                        <FooterLink key={index} {...link}/>
                    )
                })}
            </div>

            <div className='flex flex-col gap-4 pb-12'>
                <span className='text-[20px]'>
                    Zapisz się do Newslettera
                </span>
                <div className='flex gap-4'>
                    <input 
                        type="text" 
                        className='p-2 rounded-lg text-typography-dark focus:outline-none'
                        placeholder='Wpisz adres e-mail'
                    />
                    <PrimaryButton styles="bg-main-soft text-typography-dark hover:bg-white w-min">
                        <GrSend className='w-6 h-6'/>
                    </PrimaryButton>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer