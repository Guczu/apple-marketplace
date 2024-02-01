import React from 'react'
import { FaRegHeart } from "react-icons/fa";

const ProductTile = () => {
  return (
    <div className='w-[280px] h-[350px] rounded-lg flex flex-col justify-center shadow-primary hover:cursor-pointer'>
        <div className='w-full h-3/5 rounded-t-lg'>
            <img 
                src="https://luxtrade.pl/4756-large_default/apple-iphone-14-czarny.jpg" 
                alt="product photo" 
                className='w-full h-full object-contain rounded-t-lg'
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