import React from 'react'
import Banner from '../components/Banner'
import WomenCategoriesCarousel from '../components/WomenCategoriesCarousel'
import { MdEnergySavingsLeaf } from 'react-icons/md'
import MensFashionCarousel from '../components/MensFashionCarousel'
import MostPopularProduct from '../components/product/MostPupularProduct'
import AllProduct from './AllProduct'
import CategoryBar from '../components/CategoryBar'




const Home = () => {
  return (
   <div className='w-[95vw] mx-auto lg:w-[80%]'>
   
   <Banner></Banner>
   <CategoryBar></CategoryBar>
  <WomenCategoriesCarousel></WomenCategoriesCarousel>
 <MensFashionCarousel></MensFashionCarousel>
 <MostPopularProduct></MostPopularProduct>

   </div>
  )
}



export default Home