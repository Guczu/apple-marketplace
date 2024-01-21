import React from 'react'
import { Link } from "react-router-dom"

type Props = {
    children: string | JSX.Element;
    route: string;
    styles?: string;
}

const NavbarLink = ({ children }: Props) => {
  return (
    <Link to="/" className='group transition-all duration-300 ease-in-out'>
        <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            {children}
        </span>
    </Link>
  )
}

export default NavbarLink