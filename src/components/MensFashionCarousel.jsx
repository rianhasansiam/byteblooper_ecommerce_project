import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const MensFashionCarousel = () => {
  const categories = [
    { 
      name: "Unstitched", 
      image: "https://i.ibb.co/b5Fv87Md/images-1.jpg",
      description: "Premium fabrics for custom tailoring"
    },
    { 
      name: "Men Festive", 
      image: "https://i.ibb.co/b5Fv87Md/images-1.jpg",
      description: "Elegant outfits for celebrations"
    },
    { 
      name: "Men Luxury", 
      image: "https://i.ibb.co/b5Fv87Md/images-1.jpg",
      description: "High-end premium collections"
    },
    { 
      name: "Men Kurta", 
      image: "https://i.ibb.co/b5Fv87Md/images-1.jpg",
      description: "Traditional and contemporary styles"
    },
    { 
      name: "Western", 
      image: "https://i.ibb.co/b5Fv87Md/images-1.jpg",
      description: "Modern western attire"
    },
    { 
      name: "Boy Eastern", 
      image: "https://i.ibb.co/b5Fv87Md/images-1.jpg",
      description: "Traditional wear for boys"
    },
    { 
      name: "Boy Western", 
      image: "https://i.ibb.co/b5Fv87Md/images-1.jpg",
      description: "Casual western outfits"
    }
  ];

  // Responsive: 4 on desktop, 2 on mobile
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1024) return 2; // below lg
      return 4;
    }
    return 4;
  };
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  React.useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative bg-white py-6 px-4 lg:px-0">
      <div className="max-w-screen-xl lg:w-[90.5%] mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Men's Collections</h2>
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 sm:-left-5 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors flex items-center justify-center"
            aria-label="Previous slide"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          {/* Carousel container */}
          <div className="w-full flex gap-4 lg:gap-10 overflow-x-hidden">
            {visibleCategories.map((category, index) => (
              <div
                key={`${category.name}-${index}`}
                className="relative flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[22%] aspect-[3/4] rounded-xl overflow-hidden bg-gray-100"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-white font-bold text-lg truncate">{category.name}</h3>
                  <p className="text-white text-sm truncate">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-2 sm:-right-5 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors flex items-center justify-center"
            aria-label="Next slide"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <FiChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MensFashionCarousel;
