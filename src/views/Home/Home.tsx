import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Categories from '../Categories/Categories'
import PromotedProducts from '../PromotedProducts/PromotedProducts'

const Home = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <Banner />
      <PromotedProducts />
    </>
  )
}

export default Home