import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TutorCard from './TutorCard';
import { FiSearch } from 'react-icons/fi';

const FindTutors = () => {
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        fetchAllTutors()
    }, [])
    const fetchAllTutors = async () => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutors`)
        setTutors(data)
    }
    return (
        <div className='w-11/12 mx-auto py-8'>
            <div className='text-center text-gray-500'>
            <input type="text" placeholder="Find Your Language" className="input input-border w-full max-w-xs" />
            </div>
            <h2>{tutors.length}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
                tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
            }
            </div>
        </div>
    );
};

export default FindTutors;