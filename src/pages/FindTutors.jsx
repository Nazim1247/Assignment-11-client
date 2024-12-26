import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TutorCard from './TutorCard';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const FindTutors = () => {
    
    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState('');

    const [searchParams] = useSearchParams();
    const language = searchParams.get('language');

    useEffect(() => {
        
        const fetchAllTutors = async () => {
            
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tutors?${language?'language='+language:''}&search=${search}`)
            setTutors(data)

        }
        fetchAllTutors()
    }, [search, language])

    return (
        <div className='w-11/12 mx-auto my-8'>
            <Helmet>
            <title>Online Tutor Booking Platform | Find Tutor</title>
            </Helmet>
            <div className='text-center text-gray-500 mb-6'>
                <input type="text" name='search' onChange={e => setSearch(e.target.value)} placeholder="Find Your Language" className="input input-border w-full max-w-xs" />
            </div>
            <div className='border-2 rounded-lg'>
            <h2 className='text-xl py-1 px-4 rounded-lg bg-orange-400 mb-6'>({tutors.length}) Experienced Tutors</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
                }
            </div>
            </div>
        </div>
    );
};
export default FindTutors;