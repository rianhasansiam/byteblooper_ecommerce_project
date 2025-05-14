import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState('');
 


  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

   




  // kaklshdasda
  return (
  <header className="bg-white  shadow-sm sticky top-0 z-50 ">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-gray-800">
              LAM
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search fashion..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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

     <div className="  flex gap-8 text-2xl items-center ">
    {/* <Link to="/"  className='block '><i className="fa-solid fa-heart"></i></Link> */}
    <Link to="/" className='block '><i className="fa-solid fa-cart-shopping"></i></Link>
  
</div>
           
          </div>
        </div>
   
    </header>

  );
};

export default Navbar;