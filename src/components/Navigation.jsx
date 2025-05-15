import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
    <div className="w-[18%] h-full bg-white  p-6 overflow-y-auto  sticky top-20   max-lg:hidden">
      <ul className="space-y-10 text-gray-800  ">


        <li>
          <NavLink to="/allProducts" className="block font-medium hover:text-blue-600 transition">All</NavLink>
        </li>
        <li>
          <NavLink to="/new-arrivals" className="block font-medium hover:text-blue-600 transition">New Arrivals</NavLink>
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
              <li><NavLink to="/women/clothing" className="hover:text-blue-500">Clothing</NavLink></li>
              <li><NavLink to="/women/accessories" className="hover:text-blue-500">Accessories</NavLink></li>
              <li><NavLink to="/women/footwear" className="hover:text-blue-500">Footwear</NavLink></li>
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
              <li><NavLink to="/men/clothing" className="hover:text-blue-500">Clothing</NavLink></li>
              <li><NavLink to="/men/accessories" className="hover:text-blue-500">Accessories</NavLink></li>
              <li><NavLink to="/men/footwear" className="hover:text-blue-500">Footwear</NavLink></li>
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
              <li><NavLink to="/kids/boys" className="hover:text-blue-500">Boys</NavLink></li>
              <li><NavLink to="/kids/girls" className="hover:text-blue-500">Girls</NavLink></li>
            </ul>
          )}
        </li>

        {/* Static NavLinks */}
        {[
         
         
          { label: 'Orders', path: '/orders' },
         
        
        ].map((item, idx) => (
          <li key={idx}>
            <NavLink to={item.path} className="block font-medium hover:text-blue-600 transition">
              {item.label}
            </NavLink>
          </li>
        ))}

        <li>
          <NavLink to="/login" className="block font-medium  hover:underline">Sign In</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
