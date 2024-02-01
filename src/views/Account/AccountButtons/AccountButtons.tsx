import React from 'react'
import OptionButton from '../../../components/OptionButton/OptionButton'
import { MdOutlineAccountBox } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";

const AccountButtons = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:gap-24 mt-4'>
        <OptionButton>
            <div className='flex gap-2 justify-center items-center '>
                <MdOutlineAccountBox className='w-8 h-8'/>
                <span className='font-medium'>Dane</span>
            </div>
        </OptionButton>

        <OptionButton>
            <div className='flex gap-2 justify-center items-center '>
                <FaRegNewspaper className='w-7 h-7'/>
                <span className='font-medium'>Ogłoszenia</span>
            </div>
        </OptionButton>

        <OptionButton>
            <div className='flex gap-2 justify-center items-center '>
                <LuMessagesSquare className='w-8 h-8'/>
                <span className='font-medium'>Wiadomości</span>
            </div>
        </OptionButton>
    </div>
  )
}

export default AccountButtons