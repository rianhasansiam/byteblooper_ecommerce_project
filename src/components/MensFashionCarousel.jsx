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

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

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

  const visibleCategories = categories.slice(
    currentIndex,
    Math.min(currentIndex + itemsPerPage, categories.length)
  );

  const remainingItems = itemsPerPage - visibleCategories.length;
  if (remainingItems > 0) {
    visibleCategories.push(...categories.slice(0, remainingItems));
  }

  return (
   <div className="relative bg-white py-6 pl-4  lg:px-8">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-2xl font-bold mb-8 text-gray-900">Men's Collections</h2>
 
         <div className="relative group">
           {/* Carousel container */}
           <div className="flex  overflow-x-auto gap-4 lg:gap-6 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-x-visible">
             {visibleCategories.map((category, index) => (
               <div
                 key={`${category.name}-${index}`}
                 className="min-w-[65vw]  md:min-w-0 lg:transition-all lg:duration-300 shadow-xl"
               >
                 <img
                   src={category.image}
                   alt={category.name}
                   className="w-32 h-32 md:w-28 md:h-28 rounded-full mx-auto object-cover mt-4"
                 />
                 <div className="text-center flex flex-col justify-end p-4">
                   <h3 className="text-black font-semibold lg:text-lg">{category.name}</h3>
                   <p className="text-black text-sm h-10">{category.description}</p>
                   <button className="mt-2 self-start  border  px-3 py-1 text-sm rounded hover:bg-white hover:text-gray-900 transition-colors">
                     Shop Now
                   </button>
                 </div>
               </div>
             ))}
           </div>
 
           {/* Navigation arrows */}
           <button
             onClick={prevSlide}
             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10 hidden lg:visible"
             aria-label="Previous slide"
           >
             <FiChevronLeft className="w-6 h-6 text-gray-700" />
           </button>
 
           <button
             onClick={nextSlide}
             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10 hidden lg:visible"
             aria-label="Next slide"
           >
             <FiChevronRight className="w-6 h-6 text-gray-700" />
           </button>
         </div>
 
         {/* Dots indicator (optional) */}
         {/* <div className="flex justify-center mt-6 space-x-2">
           {Array.from({ length: Math.ceil(categories.length / itemsPerPage) }).map((_, index) => (
             <button
               key={index}
               onClick={() => setCurrentIndex(index * itemsPerPage)}
               className={`w-3 h-3 rounded-full ${currentIndex >= index * itemsPerPage && currentIndex < (index + 1) * itemsPerPage ? 'bg-gray-800' : 'bg-gray-300'}`}
               aria-label={`Go to slide ${index + 1}`}
             />
           ))}
         </div> */}
       </div>
     </div>
  );
};

export default MensFashionCarousel;
