import React from 'react'
import Banner from '../components/Banner'
import WomenCategoriesCarousel from '../components/WomenCategoriesCarousel'
import { MdEnergySavingsLeaf } from 'react-icons/md'
import MensFashionCarousel from '../components/MensFashionCarousel'
import MostPopularProduct from '../components/product/MostPupularProduct'
import AllProduct from '../components/product/AllProduct'
import CategoryBar from '../components/CategoryBar'




const Home = () => {
  return (
   <div className='w-[80%]'>
   
   <Banner></Banner>
   <CategoryBar></CategoryBar>
  <WomenCategoriesCarousel></WomenCategoriesCarousel>
 <MensFashionCarousel></MensFashionCarousel>
 <MostPopularProduct></MostPopularProduct>
 <AllProduct></AllProduct>
   </div>
  )
}



export default Home