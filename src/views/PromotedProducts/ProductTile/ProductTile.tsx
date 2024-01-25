import React from 'react'
import { FaRegHeart } from "react-icons/fa";

const ProductTile = () => {
  return (
    <div className='w-[280px] h-[350px] rounded-sm flex flex-col justify-center shadow-primary hover:cursor-pointer'>
        <div className='w-full h-3/5 rounded-t-sm'>
            <img 
                src="https://ae01.alicdn.com/kf/Sbe7a3cc6428946508be6f9a32945dfcad/Used-Original-Apple-iPhone-5-Unlocked-Cell-Phone-iOS-16-32-64GB-Silver-Black-For-Option.jpg" 
                alt="product photo" 
                className='w-full h-full object-fill rounded-t-sm'
            />
        </div>
        <div className='relative w-full h-2/5 flex flex-col p-4 gap-2'>
            <div className='absolute right-0 top-0 p-5'>
                <FaRegHeart className='w-5 h-5 hover:text-red-600' />
            </div>
            <div className='flex flex-col w-3/4'>
                <span className='text-[16px] truncate '>Product Name</span>
                <span className='font-bold'>Price</span>
            </div>
            <div className='absolute bottom-0 flex pb-4 gap-4 justify-between'>
                <span className='text-[14px]'>Address</span>
                <span className='text-[14px]'>Date</span>
            </div>
        </div>
    </div>
  )
}

export default ProductTile