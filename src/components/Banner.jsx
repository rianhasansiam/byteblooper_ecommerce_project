

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {
    return (
        <div className='w-[70%]  rounded-2xl overflow-hidden mt-8 mx-auto ' >
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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper relative"
            >
                <SwiperSlide>
                    <img className='w-[100%] h-[40vh] object-cover  ' src="https://i.ibb.co.com/NLJT1kC/done1.jpg" alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[100%] h-[40vh] object-cover  ' src="https://i.ibb.co.com/TvD0Gd9/done33.jpg" alt="" />
                   
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[100%] h-[40vh] object-cover  ' src="https://i.ibb.co.com/1zWmgdz/done4.jpg" alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[100%] h-[40vh] object-cover  ' src="https://i.ibb.co.com/0snksLv/donn2.jpg" alt="" />
                    
                </SwiperSlide>





            </Swiper>





        </div>
    )
}

Banner.propTypes = {}

export default Banner