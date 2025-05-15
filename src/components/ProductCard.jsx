import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
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

  return (
    <div className="group relative flex flex-col h-full">
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
      <div className="mt-4 flex flex-col flex-grow">
        <div className="h-10">
          <h3 className="text-sm  line-clamp-2">{product.name}</h3>
        </div>
        <p className="text-xs  mt-1">{product.brand}</p>
        <div className="mt-2 flex items-center">
          <span className={product.originalPrice?"font-medium text-red-500":"font-medium "}>${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="ml-2 text-xs  line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <Link to="/product-detail" className="mt-3 w-full py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors block text-center">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard; 