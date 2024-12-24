import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

import carousel1 from '../assets/carousel1.png'
import carousel2 from '../assets/carousel2.jpeg'
import carousel3 from '../assets/carousel3.jpg'
import CategoryCard from '../pages/CategoryCard';
import PublicFeedbacks from '../extraSection/PublicFeedbacks';
import PlatformFeatures from '../extraSection/PlatformFeatures';


const Home = () => {

  const [categories, setCategories]=useState([]);
  useEffect(()=>{
      fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.log(err))
    },[])
  return (
    <div className='w-11/12 mx-auto py-8'>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }} className="mySwiper text-center">
        <SwiperSlide><img className='w-full h-56 md:h-[480px] rounded-lg' src={carousel1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-56 md:h-[480px] rounded-lg' src={carousel2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-56 md:h-[480px] rounded-lg' src={carousel3} alt="" /></SwiperSlide>

      </Swiper>
      <div>
        <h2 className='text-2xl text-center font-bold mt-8'>Language Categories</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4'>
        {
        categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
        }
      </div>
      </div>
      <div>
        <PublicFeedbacks></PublicFeedbacks>
      </div>
      <div>
        <PlatformFeatures></PlatformFeatures>
      </div>
    </div>
  );
};

export default Home;