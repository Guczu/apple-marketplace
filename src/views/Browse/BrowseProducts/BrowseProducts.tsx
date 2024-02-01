import React from 'react'
import PrimaryInput from '../../../components/PrimaryInput/PrimaryInput'
import BrowseProductTile from '../BrowseProductTile/BrowseProductTile'
import SelectList from '../../../components/SelectList/SelectList'

const BrowseProducts = () => {
  return (
    <>
        <div className='w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-0'>
            <span className='text-[18px] font-medium'>
                Znaleziono X ogłoszeń
            </span>
            
            <SelectList id="sort" styles="w-full lg:w-1/6 bg-white">
                <>
                    <option value="Używany">Od najnowszych</option>
                    <option value="Używany">Cena: od najwyższej</option>
                    <option value="Nowy">Cena: od najniższej</option>
                </>
            </SelectList>
        </div>
        <BrowseProductTile />
        <BrowseProductTile />
        <BrowseProductTile />
        <BrowseProductTile />
    </>
  )
}

export default BrowseProducts