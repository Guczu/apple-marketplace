import React from 'react'
import Header from '../../components/Header/Header'
import ProductTile from './ProductTile/ProductTile'

const PromotedProducts = () => {
  return (
    <section className='container flex flex-col mx-auto justify-center pb-24'>
        <Header styles="pt-12 pb-6">
            Promowane ogłoszenia
        </Header>

        <div className='container flex flex-wrap justify-evenly gap-16 mt-6'>
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
        </div>
    </section>
  )
}

export default PromotedProducts