import React from 'react'
import { NavLink } from 'react-router-dom';

type Props = {
    name: string;
    routeLink: string;
    icon: JSX.Element;
}

const CategoryLink = ({ name, routeLink, icon }: Props) => {
  return (
    <NavLink 
      to={routeLink} 
      className={({ isActive }) => 
        isActive ? "flex flex-col justify-center items-center hover:cursor-pointer w-[90px] h-[90px] rounded-xl bg-white shadow-primary" : "flex flex-col justify-center items-center hover:cursor-pointer w-[90px] h-[90px] rounded-xl hover:bg-white transition duration-400 ease-in-out hover:shadow-primary"
      }

    >
        <span className='text-[16px]'>
            {name}
        </span>
            {icon}
    </NavLink>
  )
}

export default CategoryLink