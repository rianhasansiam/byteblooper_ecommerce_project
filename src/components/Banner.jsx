import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='w-full max-w-screen-xl lg:w-[90%] rounded-2xl overflow-hidden mt-8 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper relative"
            >
                {/* Custom Navigation Buttons (visible on sm and up) */}
                <div className="custom-prev swiper-button-prev hidden sm:block"></div>
                <div className="custom-next swiper-button-next hidden sm:block"></div>

                {/* Slides */}
                <SwiperSlide>
                    <img
                        className="w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] object-cover"
                        src="https://i.ibb.co.com/NLJT1kC/done1.jpg"
                        alt="Banner 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] object-cover"
                        src="https://i.ibb.co.com/TvD0Gd9/done33.jpg"
                        alt="Banner 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] object-cover"
                        src="https://i.ibb.co.com/1zWmgdz/done4.jpg"
                        alt="Banner 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] object-cover"
                        src="https://i.ibb.co.com/0snksLv/donn2.jpg"
                        alt="Banner 4"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
