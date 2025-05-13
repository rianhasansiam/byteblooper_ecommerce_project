import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';

const AllProduct = () => {
  // Sample product data (replace with your actual data)
  const allProducts = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    originalPrice: Math.random() > 0.5 ? (Math.random() * 150 + 30).toFixed(2) : null,
    brand: ["Express", "Nike", "Adidas", "Zara", "H&M"][Math.floor(Math.random() * 5)],
    image: `/product-${(i % 4) + 1}.jpg`, // Cycles through 4 sample images
    isNew: Math.random() > 0.7,
    rating: Math.floor(Math.random() * 3) + 3 // 3-5 stars
  }));

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Reset to page 1 when component mounts (optional)
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
            <p className="text-gray-500 mt-2">
              Showing {(currentPage - 1) * productsPerPage + 1}-{Math.min(currentPage * productsPerPage, allProducts.length)} of {allProducts.length} products
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="text-sm text-gray-700">Sort by:</span>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
              <option>Best Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
                {product.originalPrice && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Sale
                  </span>
                )}
                <button className="absolute bottom-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
                  <FiHeart className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-2 flex items-center">
                  <span className="font-medium text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-xs text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <button className="mt-3 w-full py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{(currentPage - 1) * productsPerPage + 1}</span> to{' '}
                <span className="font-medium">{Math.min(currentPage * productsPerPage, allProducts.length)}</span> of{' '}
                <span className="font-medium">{allProducts.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span className="sr-only">Previous</span>
                  <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                
                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === number
                        ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {number}
                  </button>
                ))}
                
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span className="sr-only">Next</span>
                  <FiChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;