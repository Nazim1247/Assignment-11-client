// import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight, MdOutlineLanguage } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const CategoryCard = ({language}) => {
  const navigate = useNavigate();

  const handleCategory = (language)=>{
    navigate(`/find-tutors?language=${language}`)
  }
  
  return (
    <div onClick={()=>handleCategory(language.title)} className='flex items-center justify-between border-2 px-10 rounded-md text-lg btn btn-secondary'>
      <p><MdOutlineLanguage /></p>
      <h2>{language.title}</h2>
      <p><MdKeyboardArrowRight /></p>
    </div>
  );
};

export default CategoryCard;