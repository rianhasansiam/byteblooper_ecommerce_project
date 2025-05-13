import React from 'react'
import Banner from '../components/Banner'
import WomenCategoriesCarousel from '../components/WomenCategoriesCarousel'
import { MdEnergySavingsLeaf } from 'react-icons/md'
import MensFashionCarousel from '../components/MensFashionCarousel'
import MostPopularProduct from '../components/newArrival/MostPupularProduct'
import AllProduct from '../components/newArrival/AllProduct'



const Home = () => {
  return (
   <div className='w-[80%]'>
   
   <Banner></Banner>
  <WomenCategoriesCarousel></WomenCategoriesCarousel>
 <MensFashionCarousel></MensFashionCarousel>
 <MostPopularProduct></MostPopularProduct>
 <AllProduct></AllProduct>
   </div>
  )
}



export default Home