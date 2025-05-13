import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const WomenCategoriesCarousel = () => {
  const categories = [
    { 
      name: "Summer Lawn '25", 
      image: "https://i.ibb.co/rGd6fyR8/images.jpg",
      description: "Fresh summer collection for 2025"
    },
    { 
      name: "Women Festive", 
      image: "https://i.ibb.co/rGd6fyR8/images.jpg",
      description: "Elegant outfits for special occasions"
    },
    { 
      name: "Women Luxury", 
      image: "https://i.ibb.co/rGd6fyR8/images.jpg",
      description: "Premium high-end fashion"
    },
    { 
      name: "Women Daily", 
      image: "https://i.ibb.co/rGd6fyR8/images.jpg",
      description: "Comfortable everyday wear"
    },
    { 
      name: "Modest Wear", 
      image: "https://i.ibb.co/rGd6fyR8/images.jpg",
      description: "Stylish yet conservative outfits"
    },
    { 
      name: "Western", 
      image: "https://i.ibb.co/rGd6fyR8/images.jpg",
      description: "Contemporary western styles"
    },
    { 
      name: "Girl Eastern", 
      image: "https://i.ibb.co/rGd6fyR8/images.jpg",
      description: "Traditional eastern wear for girls"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Show 4 items at a time

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= categories.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? categories.length - itemsPerPage : prevIndex - 1
    );
  };

  // Get current items to display
  const visibleCategories = categories.slice(
    currentIndex, 
    Math.min(currentIndex + itemsPerPage, categories.length)
  );

  // If we're at the end and don't have enough items, take from beginning
  const remainingItems = itemsPerPage - visibleCategories.length;
  if (remainingItems > 0) {
    visibleCategories.push(...categories.slice(0, remainingItems));
  }

  return (
    <div className="relative bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Women's Collections</h2>
        
        <div className="relative group">
          {/* Carousel container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleCategories.map((category, index) => (
              <div 
                key={`${category.name}-${index}`}
                className=" transition-all duration-300 "
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className=" w-28 h-28 rounded-full mx-auto" 
                />
                
<div className=" text-center   flex flex-col justify-end p-4">
                  <h3 className="text-black font-semibold text-lg">{category.name}</h3>
                  <p className="text-black text-sm">{category.description}</p>
                  <button className="mt-2 self-start text-white border border-white px-3 py-1 text-sm rounded hover:bg-white hover:text-gray-900 transition-colors">
                    Shop Now
                  </button>
                </div>

              </div>
              


            ))}
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
            aria-label="Next slide"
          >
            <FiChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots indicator (optional) */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(categories.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              className={`w-3 h-3 rounded-full ${currentIndex >= index * itemsPerPage && currentIndex < (index + 1) * itemsPerPage ? 'bg-gray-800' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenCategoriesCarousel;


