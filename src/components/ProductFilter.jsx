import React, { useState } from 'react';

const colors = ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow', 'Pink', 'Purple', 'Gray'];
const priceRanges = [
  { label: 'Any', value: '' },
  { label: 'Under 500 TK', value: '0-500' },
  { label: '500 TK - 1000 TK', value: '500-1000' },
  { label: '1000 TK - 2000 TK', value: '1000-2000' },
  { label: '2000 TK+', value: '2000-' },
];

const ProductFilter = ({ onFilter }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    onFilter && onFilter({ color: e.target.value, price: selectedPrice });
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
    onFilter && onFilter({ color: selectedColor, price: e.target.value });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-2 sm:p-4 mb-4 flex flex-row gap-2 sm:gap-4 items-center w-full max-w-4xl mx-auto">
      <div className="flex-1">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Color</label>
        <select
          value={selectedColor}
          onChange={handleColorChange}
          className="border border-gray-300 rounded-md px-2 py-2 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-xs sm:text-sm"
        >
          <option value="">All Colors</option>
          {colors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Price</label>
        <select
          value={selectedPrice}
          onChange={handlePriceChange}
          className="border border-gray-300 rounded-md px-2 py-2 sm:px-3 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full text-xs sm:text-sm"
        >
          {priceRanges.map((range) => (
            <option key={range.value} value={range.value}>{range.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter; 