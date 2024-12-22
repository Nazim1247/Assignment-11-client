import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

import carousel1 from '../assets/carousel1.png'
import carousel2 from '../assets/carousel2.jpeg'
import carousel3 from '../assets/carousel3.jpg'

const Home = () => {
    return (
        <div className='w-11/12 mx-auto py-8'>
        <Swiper navigation={true} modules={[Navigation,Autoplay]} autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} className="mySwiper text-center">
                <SwiperSlide><img className='w-full h-56 md:h-[480px] rounded-lg' src={carousel1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-56 md:h-[480px] rounded-lg' src={carousel2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-56 md:h-[480px] rounded-lg' src={carousel3} alt="" /></SwiperSlide>
                
            </Swiper>
      </div>
    );
};

export default Home;