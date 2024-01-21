import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import NavbarLink from './NavbarLink/NavbarLink';

const Navbar = () => {
  return (
    <nav className='w-full h-[100px] font-primary font-medium flex flex-row justify-between lg:justify-center items-center gap-16 xl:gap-48 p-12 lg:p-0'>
        <div>
            <span className='text-[32px] hover:text-[#242424] hover:cursor-pointer'>
                Marketplace
            </span>
        </div>

        <div className='hidden lg:flex'>
            <ul className='flex gap-8 lg:gap-16 w-max'>
                <NavbarLink route="/">
                    O Nas
                </NavbarLink>
                <NavbarLink route="/">
                    Usługi
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
            <PrimaryButton>
                <span>Wystaw ogłoszenie</span>
            </PrimaryButton>
        </div>

        <div className='block lg:hidden'>
            <RxHamburgerMenu className='w-8 h-8 hover:cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Navbar