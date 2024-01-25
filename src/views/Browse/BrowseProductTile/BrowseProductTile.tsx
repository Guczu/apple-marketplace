import React from 'react'

const BrowseProductTile = () => {
  return (
    <div className='w-full h-[200px] flex rounded-sm p-2 hover:cursor-pointer shadow-primary'>
        <div className='w-[300px] h-full'>
            <img 
                src="https://ae01.alicdn.com/kf/Sbe7a3cc6428946508be6f9a32945dfcad/Used-Original-Apple-iPhone-5-Unlocked-Cell-Phone-iOS-16-32-64GB-Silver-Black-For-Option.jpg" 
                alt="product photo" 
                className='w-full h-full object-fit rounded-t-sm'
            />
        </div>
        <div className='w-full relative p-4 flex flex-col gap-2'>
            <div className='flex justify-between'>
                <span className='text-[20px]'>
                    Nazwa przedmiotu
                </span>
                <span className='font-medium'>
                    9999 $
                </span>
            </div>
            <div className='flex'>
                <div className='bg-main-soft p-6 pt-1 pb-1 rounded-xl text-[14px]'>
                    Używany
                </div>
            </div>
            <div className='absolute bottom-0 mb-2 flex justify-between'>
                <span>
                    Adres - data
                </span>
            </div>
        </div>
    </div>
  )
}

export default BrowseProductTile