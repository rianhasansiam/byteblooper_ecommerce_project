import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgShoppingBag } from "react-icons/cg";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Function to update cart count
    const updateCartCount = () => {
      let cart = [];
      try {
        cart = JSON.parse(localStorage.getItem('addtocart'));
        if (!Array.isArray(cart)) cart = [];
      } catch (e) {
        cart = [];
      }
      // Defensive: ensure cart is always an array before reduce
      const totalItems = Array.isArray(cart)
        ? cart.reduce((total, item) => total + (item.quantity || 1), 0)
        : 0;
      setCartCount(totalItems);
    };

    // Initial update
    updateCartCount();

    // Listen for storage changes (other tabs)
    window.addEventListener('storage', updateCartCount);

    // Listen for custom event (same tab updates)
    window.addEventListener('cart-updated', updateCartCount);

    // Cleanup
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cart-updated', updateCartCount);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white  overflow-x-hidden shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <Link to="/" className="text-4xl  text-gray-600">
              N&10
            </Link>
            <Link to="/addto-cart" className='block text-3xl mr-3 lg:hidden relative'>
            <CgShoppingBag />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-4xl ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search fashion..."
                className="w-full py-2 px-2 pr-10 border bg-gray-100 border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          <div className="hidden lg:flex gap-8 text-2xl items-center">
            <Link to="/addto-cart" className='block relative'>
            <CgShoppingBag />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;