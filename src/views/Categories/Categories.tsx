import React from 'react'
import { categories } from '../../constants/categories'
import CategoryLink from './CategoryLink/CategoryLink'

const Categories = () => {
  return (
    <section className='w-full mx-auto hidden md:flex justify-center items-center gap-24 p-4 pt-8 pb-8'>
        {categories.map((product, index) => {
            return (
                <CategoryLink key={index} {...product} />
            )
        })}
    </section>
  )
}

export default Categories