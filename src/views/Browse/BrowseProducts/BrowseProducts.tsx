import React from 'react'
import PrimaryInput from '../../../components/PrimaryInput/PrimaryInput'
import BrowseProductTile from '../BrowseProductTile/BrowseProductTile'

const BrowseProducts = () => {
  return (
    <>
        <div className='w-full flex justify-between'>
            <span className='text-[18px] font-medium'>
                Znaleziono X ogłoszeń
            </span>
            
            <PrimaryInput placeholder='Sortuj' id="sort"/>
        </div>
        <BrowseProductTile />
        <BrowseProductTile />
        <BrowseProductTile />
        <BrowseProductTile />
    </>
  )
}

export default BrowseProducts