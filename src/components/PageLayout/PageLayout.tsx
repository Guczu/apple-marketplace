import { Outlet } from "react-router-dom"
import Navbar from "../../views/Navbar/Navbar"
import Categories from "../../views/Categories/Categories"
import Footer from "../../views/Footer/Footer"

const PageLayout = () => {
  return (
    <>
        <Navbar/>
        <Categories/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default PageLayout