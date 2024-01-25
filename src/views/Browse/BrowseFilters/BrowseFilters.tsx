import React from 'react'
import PrimaryInput from '../../../components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'
import SelectList from '../../../components/SelectList/SelectList'

const BrowseFilters = () => {
  return (
    <>
        <span className='text-[26px] font-medium'>
            Znajdź coś dla siebie!
        </span>

        <div className='w-full flex flex-col lg:flex-row gap-4 justify-center'>
            <PrimaryInput styles="w-full lg:w-9/12" placeholder="Czego szukasz?" id="browser" />
            <SelectList id="location" styles="w-full lg:w-2/12 bg-white">
                <>
                    <option value="Kraków">Kraków</option>
                    <option value="Warszawa">Warszawa</option>
                </>
            </SelectList>
            <PrimaryButton styles="w-full lg:w-2/12 h-[50px]">
            <span>
                Wyszukaj
            </span>
            </PrimaryButton>
        </div>
        <div className='w-full flex flex-col lg:flex-row gap-4 justify-center'>
            <SelectList id="category" styles="w-full lg:w-1/6 bg-white">
                <>
                    <option value="Mac">Mac</option>
                    <option value="iPad">iPad</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Watch">Watch</option>
                    <option value="AirPods">AirPods</option>
                </>
            </SelectList>
            <SelectList id="product" styles="w-full lg:w-2/6 bg-white">
                <>
                    <option value="model">Model</option>
                </>
            </SelectList>
            <PrimaryInput styles="w-full lg:w-1/6" placeholder="Od" id="price-from" />
            <PrimaryInput styles="w-full lg:w-1/6" placeholder="Do" id="price-to" />
            <SelectList id="condition" styles="w-full lg:w-1/6 bg-white">
                <>
                    <option value="Używany">Używany</option>
                    <option value="Nowy">Nowy</option>
                    <option value="Uszkodzony">Uszkodzony</option>
                </>
            </SelectList>
        </div>
    </>
  )
}

export default BrowseFilters