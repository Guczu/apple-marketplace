import React from 'react'
import { categories } from '../../constants/categories'
import CategoryLink from './CategoryLink/CategoryLink'

const Categories = () => {
  return (
    <div className='w-full bg-main-soft mx-auto hidden lg:flex justify-center items-center gap-24 p-4 pt-8 pb-8'>
        {categories.map((product, index) => {
            return (
                <CategoryLink key={index} {...product} />
            )
        })}
    </div>
  )
}

export default Categories