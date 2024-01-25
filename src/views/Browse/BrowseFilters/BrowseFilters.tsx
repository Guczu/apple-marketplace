import React from 'react'
import PrimaryInput from '../../../components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'

const BrowseFilters = () => {
  return (
    <>
        <span className='text-[26px] font-medium'>
            Znajdź coś dla siebie!
        </span>

        <div className='w-full flex gap-4 justify-center'>
            <PrimaryInput styles="w-9/12" placeholder="Czego szukasz?" id="browser" />
            <PrimaryInput styles="w-2/12" placeholder="Cała Polska" id="location" disabled />
            <PrimaryButton styles="w-2/12 h-[50px]">
            <span>
                Wyszukaj
            </span>
            </PrimaryButton>
        </div>
        <div className='w-full flex gap-4 justify-center'>
            <PrimaryInput styles="w-1/4" placeholder="iPhone" id="category" disabled />
            <PrimaryInput styles="w-1/4" placeholder="Od" id="price-from" disabled />
            <PrimaryInput styles="w-1/4" placeholder="Do" id="price-to" disabled />
            <PrimaryInput styles="w-1/4" placeholder="Stan" id="condition" disabled />
        </div>
    </>
  )
}

export default BrowseFilters