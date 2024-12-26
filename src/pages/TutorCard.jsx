import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { MdLanguage, MdOutlineRateReview } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TutorCard = ({ tutor }) => {
    const { _id, name, photo, language, review } = tutor || {};
    return (
        <div className='flex items-center gap-2 border-2 shadow-sm rounded-lg'>
            <img referrerPolicy='no-referrer' className='w-36 h-28 p-2' src={photo} alt="" />
            <div>
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
                    <p><MdOutlineRateReview /></p>
                <p className='font-semibold'>Review:</p>
                <p>{review}</p>
                </div>
                <Link to={`/details/${_id}`} className='btn btn-xs bg-blue-300 w-full'>View Details</Link>
            </div>
        </div>
    );
};

export default TutorCard;