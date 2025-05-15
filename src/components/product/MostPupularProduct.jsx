import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MostPopularProduct = () => {
    const products = [
    {
      id: 1,
      name: "Eian · Eian-SOLENE (EL25-03 A)",
      price: 61.99,
      originalPrice: null,
      brand: "Express",
      image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?ga=GA1.1.864221037.1741283291&semt=ais_hybrid&w=740"
    },
    {
      id: 2,
      name: "KIDS CLUB · Steel Blue Waistcoat Suit",
      price: 11.18,
      originalPrice: 21.99,
      brand: "Express",
      image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?ga=GA1.1.864221037.1741283291&semt=ais_hybrid&w=740"
    },
    {
      id: 3,
      name: "Amar · NO-AL-4089-25 G",
      price: 77.53,
      originalPrice: 110.99,
      brand: "Express",
      image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?ga=GA1.1.864221037.1741283291&semt=ais_hybrid&w=740"
    },
    {
      id: 4,
      name: "Casual Lite · Farshi Shahvar | Beige",
      price: 28.80,
      originalPrice: 31.99,
      brand: "Express",
      image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?ga=GA1.1.864221037.1741283291&semt=ais_hybrid&w=740"
    }
  ];

  return (
    <section className="pb-5 px-4 sm:px-6 lg:px-8 bg-white">
      <ToastContainer />
      <div className="max-w-[97%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Most Popular</h1>
          </div>
          <Link to="/allProducts" className="mt-4 md:mt-0 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MostPopularProduct