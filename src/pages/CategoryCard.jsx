// import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight, MdOutlineLanguage } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
  // const [categories, setCategories]=useState([]);
  // useEffect(()=>{
  //   fetch('categories.json')
  //   .then(res => res.json())
  //   .then(data => setCategories(data))
  //   .catch(err => console.log(err))
  // },[])
  return (
    <Link to='/findTutors' className='flex items-center justify-between border-2 py-4 px-10 rounded-md btn btn-secondary'>
      <p><MdOutlineLanguage /></p>
      <h2>{category.title}</h2>
      <p><MdKeyboardArrowRight /></p>
    </Link>
  );
};

export default CategoryCard;