import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    name: string;
    routeLink: string;
    icon: JSX.Element;
}

const CategoryLink = ({ name, routeLink, icon }: Props) => {
  return (
    <Link to={routeLink} className='flex flex-col justify-center items-center hover:cursor-pointer w-[64px] h-[64px] rounded-xl hover:bg-white transition duration-400 ease-in-out hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
        <span className='text-[16px]'>
            {name}
        </span>
            {icon}
    </Link>
  )
}

export default CategoryLink