import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

type Props = {
    children: string | JSX.Element;
    styles?: string;
    title: string;
    expanded: boolean;
    handleExpand: () => void;
}

const DropdownDiv = ({ children, styles, title, expanded, handleExpand }: Props) => {
  return (
    <div className={`w-3/4 p-4 bg-main-soft rounded-lg ${styles}`}>
        <div className='flex justify-between p-2 hover:cursor-pointer' onClick={handleExpand}>
            <span>{title}</span>
            <IoIosArrowDown className='w-6 h-6'/>
        </div>
        <div className={expanded ? "flex p-4" : "hidden"}>
            {children}
        </div>
    </div>
  )
}

export default DropdownDiv