import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useSwipeable } from 'react-swipeable';

const categories = [
  { name: "Summer ", picture: 'https://i.ibb.co/rGd6fyR8/images.jpg' },
  { name: 'Women Festive Pret', picture: 'https://i.ibb.co/rGd6fyR8/images.jpg' },
  { name: 'Women Luxury Pret', picture: 'https://i.ibb.co/rGd6fyR8/images.jpg' },
  { name: 'Women Daily', picture: 'https://i.ibb.co/rGd6fyR8/images.jpg' },
  { name: 'Modest Wear', picture: 'https://i.ibb.co/rGd6fyR8/images.jpg' },
  { name: 'Western', picture: 'https://i.ibb.co/rGd6fyR8/images.jpg' },
  { name: 'Girl Eastern', picture: 'https://i.ibb.co/rGd6fyR8/images.jpg' },
  { name: 'Girl Western', picture: 'https://i.ibb.co/rGd6fyR8/images.jpg' },
  { name: 'Kids', picture: 'https://i.ibb.co/rGd6fyR8/images.jpg' },
];

const DESKTOP_VISIBLE = 7;
const MOBILE_VISIBLE = 6;

const CategoryBar = () => {
  const [startIdx, setStartIdx] = useState(0);

  // Responsive: show 7 on desktop, 5 on mobile/tablet
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1024) return MOBILE_VISIBLE; // lg breakpoint
      return DESKTOP_VISIBLE;
    }
    return DESKTOP_VISIBLE;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const endIdx = startIdx + visibleCount;
  let visibleCategories = categories.slice(startIdx, endIdx);
  // If at the end, wrap around
  if (visibleCategories.length < visibleCount) {
    visibleCategories = visibleCategories.concat(categories.slice(0, visibleCount - visibleCategories.length));
  }

  const canGoLeft = categories.length > visibleCount;
  const canGoRight = categories.length > visibleCount;

  const prevSlide = () => {
    setStartIdx((prev) => (prev - 1 + categories.length) % categories.length);
  };
  const nextSlide = () => {
    setStartIdx((prev) => (prev + 1) % categories.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (canGoRight) nextSlide();
    },
    onSwipedRight: () => {
      if (canGoLeft) prevSlide();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="w-full bg-white py-6 mt-2">
      <div className="w-full lg:w-[100%] mx-auto">
        <div {...handlers} className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-8 relative select-none cursor-grab active:cursor-grabbing">
          {visibleCategories.map((cat, idx) => (
            <div key={cat.name + idx} className="flex flex-col items-center w-[70px] sm:w-[100px]">
              <div className="relative flex items-center justify-center">
                {/* Left Arrow Overlay */}
                {idx === 0 && canGoLeft && (
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full border border-gray-300 p-1 shadow-sm hover:bg-gray-100"
                    style={{ transform: 'translate(-50%, -50%)' }}
                    aria-label="Previous"
                  >
                    <FiChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                )}
                {/* Right Arrow Overlay */}
                {idx === visibleCategories.length - 1 && canGoRight && (
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full border border-gray-300 p-1 shadow-sm hover:bg-gray-100"
                    style={{ transform: 'translate(50%, -50%)' }}
                    aria-label="Next"
                  >
                    <FiChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                )}
                <img
                  src={cat.picture}
                  alt={cat.name}
                  className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full border border-gray-300 object-cover bg-white"
                />
              </div>
              <div className="text-center mt-2 text-xs sm:text-base font-medium leading-tight break-words h-[2.7em] flex items-center justify-center">
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;