import React from 'react';
import { FiHome, FiGrid, FiTag, FiClock, FiUser } from 'react-icons/fi';

const FooterNavigation = () => {
  const links = [
    { name: "Home", icon: <FiHome size={20} />, path: "/" },
    { name: "Categories", icon: <FiGrid size={20} />, path: "/categories" },
    { name: "Brands", icon: <FiTag size={20} />, path: "/brands" },
    { name: "New Arrivals", icon: <FiClock size={20} />, path: "/new-arrivals" },
    { name: "Account", icon: <FiUser size={20} />, path: "/account" }
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 lg:hidden">
      <div className="max-w-md mx-auto px-4">
        <nav className="flex justify-between items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="flex flex-col items-center py-3 px-2 text-center text-xs font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <div className="mb-1">
                {link.icon}
              </div>
              <span>{link.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default FooterNavigation;