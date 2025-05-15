import React from 'react';

const RelatedProducts = ({ title, products }) => (
  <div className="mt-12">
    <h3 className="text-xl font-bold mb-6 text-gray-900">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8">
      {products.map((product, idx) => (
        <div
          key={product.name + idx}
          className="relative rounded-xl overflow-hidden bg-gray-100 aspect-[3/4] flex flex-col"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h4 className="text-white font-bold text-base truncate">{product.name}</h4>
            <p className="text-white text-xs truncate">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedProducts; 