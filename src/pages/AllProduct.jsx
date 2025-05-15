import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProduct = () => {
  // Sample product data (replace with your actual data)
  const allProducts = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    originalPrice: Math.random() > 0.5 ? (Math.random() * 150 + 30).toFixed(2) : null,
    brand: ["Express", "Nike", "Adidas", "Zara", "H&M"][Math.floor(Math.random() * 5)],
    image: `data:image/jpeg;base64,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`, // Cycles through 4 sample images
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

  // Reset to page 1 when component mounts
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  // Add to Cart handler
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('addtocart')) || [];
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('addtocart', JSON.stringify(cart));
    toast.success('Added to cart!', { position: 'top-right', autoClose: 1500 });
  };
console.log(currentProducts)
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 w-[95vw]  md:w-[70%] mx-auto ">
      <ToastContainer />
      <div className=" w-[100%]  mx-auto">
        {/* Section Header */}
        <div className="flex   justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-lg md:text-3xl font-semibold text-gray-900">All Products</h1>
            <p className="text-gray-500 mt-2">
              Showing {(currentPage - 1) * productsPerPage + 1}-{Math.min(currentPage * productsPerPage, allProducts.length)} of {allProducts.length} products
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
        <div className="grid grid-cols-2  lg:grid-cols-3 lx:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="cursor-pointer absolute bottom-40 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block"
                  aria-label="Add to cart"
                >
                  <i className="fa-solid text-white fa-cart-shopping text-2xl"></i>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-sm  line-clamp-2">{product.name}</h3>
                <p className="text-xs font-light  mt-1">{product.brand}</p>
                <div className="mt-2 flex items-center">
                  <span className={product.originalPrice?"font-medium text-red-500":"font-medium "}>${product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-xs  line-through">${product.originalPrice}</span>
                  )}
                </div>
                <Link to="/product-detail" className="mt-3 w-full py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors block text-center">
                  View Details
                </Link>
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
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
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
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === number
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
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
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