import React from 'react'
import Banner from '../components/Banner'
import WomenCategoriesCarousel from '../components/WomenCategoriesCarousel'
import { MdEnergySavingsLeaf } from 'react-icons/md'
import MensFashionCarousel from '../components/MensFashionCarousel'
import MostPopularProduct from '../components/product/MostPupularProduct'
import AllProduct from './AllProduct'
import CategoryBar from '../components/CategoryBar'
import { Link } from 'react-router-dom'




const Home = () => {
  return (
   <div className='w-[100vw] md:mx-auto lg:w-[80%]'>
   
   <Banner></Banner>
   <CategoryBar></CategoryBar>
  {/* <WomenCategoriesCarousel></WomenCategoriesCarousel>
 <MensFashionCarousel></MensFashionCarousel> */}
 <MostPopularProduct></MostPopularProduct>
<Link
  to="/allProducts"
  className="mx-auto block mb-10 w-40 sm:w-48 md:w-56 lg:w-64 rounded-3xl bg-gray-200 py-2 px-4 text-sm sm:text-base font-semibold text-gray-800 hover:bg-gray-300 transition-colors text-center"
>
  Explore All <i className="fa-solid fa-right-long"></i>
</Link>

   </div>
  )
}



export default Home