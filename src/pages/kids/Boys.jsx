import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from '../../components/ProductCard';

const Boys = () => {
  const products = [
    {
      id: 1,
      name: "Eian · Eian-SOLENE (EL25-03 A)",
      price: 61.99,
      originalPrice: null,
      brand: "Express",
      image: "https://i.ibb.co/tZPkkGX/day-10-removebg-preview.png"
    },
    {
      id: 2,
      name: "KIDS CLUB · Steel Blue Waistcoat Suit",
      price: 11.18,
      originalPrice: 21.99,
      brand: "Express",
      image: "https://i.ibb.co/tZPkkGX/day-10-removebg-preview.png"
    },
    {
      id: 3,
      name: "Amar · NO-AL-4089-25 G",
      price: 77.53,
      originalPrice: 110.99,
      brand: "Express",
      image: "https://i.ibb.co/tZPkkGX/day-10-removebg-preview.png"
    },
    {
      id: 4,
      name: "Casual Lite · Farshi Shahvar | Beige",
      price: 28.80,
      originalPrice: 31.99,
      brand: "Express",
      image: "https://i.ibb.co/tZPkkGX/day-10-removebg-preview.png"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 w-[95vw] md:w-[100%] mx-auto">
      <ToastContainer />
      <div className="w-[100%] mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-lg md:text-3xl font-bold text-gray-900">Boys Collection</h1>
            <p className="text-gray-500 mt-2">
              Showing {products.length} products
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex max-sm:flex-col items-center space-x-2">
            <span className="text-sm text-gray-700">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Boys
