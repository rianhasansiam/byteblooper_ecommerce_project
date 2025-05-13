import React from 'react'


const MostPopularProduct = props => {
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Most Popular</h1>
            
          </div>
          <button className="mt-4 md:mt-0 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
                <div className="mt-2 flex items-center">
                  <span className="font-medium text-gray-900">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-xs text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <button className="mt-3 w-full py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



export default MostPopularProduct