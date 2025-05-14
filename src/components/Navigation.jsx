import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [openMenus, setOpenMenus] = useState({
    women: false,
    men: false,
    kids: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="w-[18%] h-full bg-white  p-6 overflow-y-auto  sticky top-0  max-lg:hidden">
      <ul className="space-y-10 text-gray-800  ">


        <li>
          <Link to="/allProducts" className="block font-medium hover:text-blue-600 transition">All</Link>
        </li>
        <li>
          <Link to="/new-arrivals" className="block font-medium hover:text-blue-600 transition">New Arrivals</Link>
        </li>

        {/* Women Section */}
        <li>
          <button
            onClick={() => toggleMenu('women')}
            className="w-full flex justify-between items-center font-medium hover:text-blue-600 transition"
          >
            Women
            {openMenus.women ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
          {openMenus.women && (
            <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
              <li><Link to="/women/clothing" className="hover:text-blue-500">Clothing</Link></li>
              <li><Link to="/women/accessories" className="hover:text-blue-500">Accessories</Link></li>
              <li><Link to="/women/footwear" className="hover:text-blue-500">Footwear</Link></li>
            </ul>
          )}
        </li>

        {/* Men Section */}
        <li>
          <button
            onClick={() => toggleMenu('men')}
            className="w-full flex justify-between items-center font-medium hover:text-blue-600 transition"
          >
            Men
            {openMenus.men ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
          {openMenus.men && (
            <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
              <li><Link to="/men/clothing" className="hover:text-blue-500">Clothing</Link></li>
              <li><Link to="/men/accessories" className="hover:text-blue-500">Accessories</Link></li>
              <li><Link to="/men/footwear" className="hover:text-blue-500">Footwear</Link></li>
            </ul>
          )}
        </li>

        {/* Kids Section */}
        <li>
          <button
            onClick={() => toggleMenu('kids')}
            className="w-full flex justify-between items-center font-medium hover:text-blue-600 transition"
          >
            Kids
            {openMenus.kids ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
          {openMenus.kids && (
            <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
              <li><Link to="/kids/boys" className="hover:text-blue-500">Boys</Link></li>
              <li><Link to="/kids/girls" className="hover:text-blue-500">Girls</Link></li>
            </ul>
          )}
        </li>

        {/* Static Links */}
        {[
          { label: 'Brands', path: '/brands' },
         
          { label: 'Orders', path: '/orders' },
      
          { label: 'Wishlist', path: '/wishlist' },
   
        
        ].map((item, idx) => (
          <li key={idx}>
            <Link to={item.path} className="block font-medium hover:text-blue-600 transition">
              {item.label}
            </Link>
          </li>
        ))}

        <li>
          <Link to="/login" className="block font-medium  hover:underline">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
