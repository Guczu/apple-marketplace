import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import NavbarLink from './NavbarLink/NavbarLink';

const Navbar = () => {
  return (
    <nav className='w-full h-[80px] bg-main-nav text-typography-soft font-medium flex flex-row justify-between lg:justify-center items-center gap-16 xl:gap-48 p-12 lg:p-0'>
        <div>
            <span className='text-[32px] hover:cursor-pointer'>
                Marketplace
            </span>
        </div>

        <div className='hidden lg:flex'>
            <ul className='flex gap-8 lg:gap-16 w-max'>
                <NavbarLink route="/">
                    O Nas
                </NavbarLink>
                <NavbarLink route="/">
                    Ogłoszenia
                </NavbarLink>
                <NavbarLink route="/">
                    Blog
                </NavbarLink>
                <NavbarLink route="/">
                    Kontakt
                </NavbarLink>
            </ul>
        </div>

        <div className='hidden lg:flex'>
            <PrimaryButton styles="bg-white text-typography-dark hover:bg-white">
                <span>Twoje konto</span>
            </PrimaryButton>
        </div>

        <div className='block lg:hidden'>
            <RxHamburgerMenu className='w-8 h-8 hover:cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Navbar