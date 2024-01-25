import React from 'react'
import BrowseFilters from './BrowseFilters/BrowseFilters'
import BrowseProducts from './BrowseProducts/BrowseProducts'

const Browse = () => {
  return (
    <section className='container mx-auto p-8 flex flex-col items-center gap-8'>
      <BrowseFilters />

      <hr className='w-full'/>

      <BrowseProducts />

    </section>
  )
}

export default Browse