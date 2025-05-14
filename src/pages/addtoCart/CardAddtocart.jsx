import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const CardAddtocart = ({ item, quantity, onQuantityChange, onDelete }) => {
  const [productQuantities, setProductQuantities] = useState(quantity || 1);

  useEffect(() => {
    setProductQuantities(quantity || 1);
  }, [quantity]);

  // Update parent on quantity change
  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(item._id, productQuantities);
    }
  }, [productQuantities]);

  const incresingQuantity = () => {
    setProductQuantities((prev) => prev + 1);
  };
  const decreasingQuantity = () => {
    setProductQuantities((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="py-6 flex flex-col sm:flex-row">
      <div className="flex-shrink-0 mb-4 sm:mb-0">
        <img
          className="h-32 w-32 rounded-md object-cover"
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="ml-0 sm:ml-4 flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.shortDescription}</p>
            {item.availableAmount && (
              <div className="mt-2 text-sm text-gray-600">
                Available: {item.availableAmount}
              </div>
            )}
          </div>
          <button
            className="text-gray-400 hover:text-red-500"
            onClick={onDelete}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <button
              onClick={decreasingQuantity}
              className="border border-gray-300 rounded-l-md px-3 py-1"
            >
              -
            </button>
            <span className="border-t border-b border-gray-300 px-4 py-1">
              {productQuantities}
            </span>
            <button
              onClick={incresingQuantity}
              className="border border-gray-300 rounded-r-md px-3 py-1"
            >
              +
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-bold">
              ${(item.price * productQuantities).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAddtocart;
