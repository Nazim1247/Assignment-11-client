import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import TutorCard from './TutorCard';
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '../authorize/AuthProvider';


const FindTutors = () => {
    const {setCountTutor} = useContext(AuthContext);
    
    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState('');

    const [searchParams] = useSearchParams();
    const language = searchParams.get('language');

    useEffect(() => {
        
        const fetchAllTutors = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tutors?${language?'language='+language:''}&search=${search}`)
            setTutors(data)

            setCountTutor(data.length)
        }
        fetchAllTutors()
    }, [search, language])

    return (
        <div className='w-11/12 mx-auto py-8'>
            <div className='text-center text-gray-500'>
                <input type="text" name='search' onChange={e => setSearch(e.target.value)} placeholder="Find Your Language" className="input input-border w-full max-w-xs" />
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