import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TutorCard from './TutorCard';

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
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
                tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
            }
            </div>
        </div>
    );
};

export default FindTutors;