import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { MdLanguage, MdOutlineRateReview } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TutorCard = ({ tutor }) => {
    const { _id, name, photo, language, review, price } = tutor || {};
    return (
        <div className='border shadow-sm rounded-lg'>
            <img referrerPolicy='no-referrer' className='w-full h-40 p-4 object-cover' src={photo} alt="" />
            <div className='p-4'>
                <div className='flex items-center gap-2'>
                <p><FaUserGraduate /></p>
                <h2 className='text-xl font-semibold'>{name}</h2>
                </div>
                <div className='flex items-center gap-2'>
                    <p><MdLanguage /></p>
                <p className='font-semibold'>Language:</p>
                <p>{language}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p><HiOutlineCurrencyDollar /></p>
                <p className='font-semibold'>price:</p>
                <p>${price}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p><MdOutlineRateReview /></p>
                <p className='font-semibold'>Review:</p>
                <p>{review}</p>
                </div>
                <Link to={`/details/${_id}`} className='btn btn-xs btn-secondary w-full'>View Details</Link>
            </div>
        </div>
    );
};

export default TutorCard;