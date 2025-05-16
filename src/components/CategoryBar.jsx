import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

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

const CategoryBar = () => {
  return (
    <div className="w-full bg-white py-6 mt-2 ">
      <div className="w-full mx-auto">
        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          freeMode={true}
          loop={true} // Enable infinite loop
          loopAddBlankSlides={true} // Helps with loop mode
          modules={[FreeMode]}
          className="!px-4"
          breakpoints={{
            640: {
              spaceBetween: 16
            },
            1024: {
              spaceBetween: 32
            }
          }}
        >
          {categories.map((cat, idx) => (
            <SwiperSlide 
              key={cat.name + idx} 
              className="!w-[70px] sm:!w-[100px] flex justify-center "
            >
              <div className="pt-8 flex flex-col items-center group w-full ">
                <div className="relative w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]">
                  <img
                    src={cat.picture}
                    alt={cat.name}
                    className=" w-full h-full rounded-full border border-gray-300 object-cover bg-white 
                    group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="text-center mt-2 text-xs sm:text-base font-medium text-gray-700 leading-tight break-words h-[2.7em] flex items-center justify-center px-1">
                  {cat.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryBar;