import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const CardAddtocart = ({ item, quantity, onQuantityChange, onDelete }) => {
  const [productQuantities, setProductQuantities] = useState(quantity || 1);

  useEffect(() => {
    setProductQuantities(quantity || 1);
  }, [quantity]);

  const increasingQuantity = () => {
    setProductQuantities((prev) => prev + 1);
  };

  const decreasingQuantity = () => {
    setProductQuantities((prev) => Math.max(1, prev - 1));
  };

  // Notify parent about quantity change
  useEffect(() => {
    if (onQuantityChange && item?._id) {
      onQuantityChange(item._id, productQuantities);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productQuantities]);

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
            {item.availableAmount !== undefined && (
              <div className="mt-2 text-sm text-gray-600">
                Available: {item.availableAmount}
              </div>
            )}
          </div>
          <button
            className="text-gray-400 hover:text-red-500"
            onClick={onDelete}
            type="button"
            aria-label="Remove item"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <button
              onClick={decreasingQuantity}
              className="border border-gray-300 rounded-l-md px-3 py-1"
              type="button"
              disabled={productQuantities <= 1}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="border-t border-b border-gray-300 px-4 py-1">
              {productQuantities}
            </span>
            <button
              onClick={increasingQuantity}
              className="border border-gray-300 rounded-r-md px-3 py-1"
              type="button"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-bold">
              ${((Number(item.price) || 0) * productQuantities).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAddtocart;

