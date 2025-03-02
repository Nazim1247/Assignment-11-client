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
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Slide, Zoom } from 'react-awesome-reveal';

const Home = () => {
  
  const [users, setUsers] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.log(err))

    fetchAllTutors()
    fetchAllUser()
    
  }, [])

  const fetchAllTutors = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutors`)
    setTutors(data)
  }

  const fetchAllUser = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-users`)
    setUsers(data)
  }

  const totalReview = tutors.reduce((sum, tutor) =>  sum + tutor.review, 0 );

  return (
    <div className='w-11/12 mx-auto py-2'>
      <Helmet>
        <title>Online Tutor Booking Platform | Home</title>
      </Helmet>

      <Zoom>
      <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }} className="mySwiper text-center">
        <SwiperSlide><img className='w-full h-56 md:h-[480px] rounded-lg' src={carousel1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-56 md:h-[480px] rounded-lg' src={carousel2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-56 md:h-[480px] rounded-lg' src={carousel3} alt="" /></SwiperSlide>

      </Swiper>
      </Zoom>

      <Slide duration={2000} delay={100} direction='right'>
      <div className='grid md:grid-cols-4 gap-6 my-12'>
        <div className='text-center rounded-md shadow-md py-4 px-2 dark:bg-gray-800'>
          <h2 className='text-3xl font-bold text-secondary'>+{tutors?.length}</h2>
          <p className='text-orange-500'>Experienced Tutors</p>
        </div>
        <div className='text-center rounded-md shadow-md py-4 px-2 dark:bg-gray-800'>
          <h2 className='text-3xl font-bold text-secondary'>+{totalReview}</h2>
          <p className='text-orange-500'>5-Star Tutor Reviews</p>
        </div>
        <div className='text-center rounded-md shadow-md py-4 px-2 dark:bg-gray-800'>
          <h2 className='text-3xl font-bold text-secondary'>+9</h2>
          <p className='text-orange-500'>Subjects Taught</p>
        </div>
        <div className='text-center rounded-md shadow-md py-4 px-2 dark:bg-gray-800'>
          <h2 className='text-3xl font-bold text-secondary'>+{users?.length}</h2>
          <p className='text-orange-500'>All Users</p>
        </div>
      </div>
      </Slide>
      <Slide duration={2000} delay={100}>
      <div>
        <h2 className='text-2xl text-center font-bold mt-8'>Find Your Languages</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4'>
          {
            categories.map(language => <CategoryCard key={language.id} language={language}></CategoryCard>)
          }
        </div>
      </div>
      </Slide>
      <Zoom>
      <div>
        <PublicFeedbacks></PublicFeedbacks>
      </div>
      </Zoom>
      <Zoom>
      <div>
        <PlatformFeatures></PlatformFeatures>
      </div>
      </Zoom>
    </div>
  );
};

export default Home;