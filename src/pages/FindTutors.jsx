import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TutorCard from './TutorCard';
import { useSearchParams } from 'react-router-dom';


const FindTutors = () => {
    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState('');
    
    const [searchParams] = useSearchParams();
    const language = searchParams.get('language')
    console.log(language)

    // const fetchTutor = async()=>{
    //     const query = language? `?language=${language}`:''
    //     const res = await fetch(`/all-tutors${query}`)
    //     const data = await res.json(data)
    //     setTutors(data)
    // }

    useEffect(() => {
    
        const fetchAllTutors = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutors?language=${language}&search=${search}`)
            setTutors(data)
        }
        fetchAllTutors()

        // fetchTutor()
        // fetchTutorByCategory()
    }, [search, language])

    

    // const fetchTutorByCategory = async ()=>{
    //     const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/tutors/${language}`)
    //     setTutors(data)
    // }

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