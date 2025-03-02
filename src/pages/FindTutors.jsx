import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TutorCard from './TutorCard';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Zoom } from 'react-awesome-reveal';

const FindTutors = () => {

    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState('');
    // const [sortedTutors, setSortedTutors] = useState([])

    const [searchParams] = useSearchParams();
    const language = searchParams.get('language');

    useEffect(() => {

        const fetchAllTutors = async () => {

            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tutors?${language ? 'language=' + language : ''}&search=${search}`)
            setTutors(data)
            // console.log(data)
        }
        fetchAllTutors()

        // handleSort()
    }, [search, language])

    const handleSort = async ()=>{
        const {data: sortedData} = await axios.get(`${import.meta.env.VITE_API_URL}/sorted-tutors`)
        setTutors(sortedData)

        // fetch(`${import.meta.env.VITE_API_URL}/sorted-tutors`)
        // .then(res => res.json())
        // .then(data => setTutors(data))
    }

    return (
        <Zoom>
            <div className='w-11/12 mx-auto my-2'>
                <Helmet>
                    <title>Online Tutor Booking Platform | Find Tutor</title>
                </Helmet>
                <div className='flex flex-col md:flex-row items-center justify-center gap-3 text-gray-500 mb-6'>
                    <button className='btn btn-secondary' onClick={handleSort} >Sort By Price</button>
                    <label className="input input-bordered flex items-center gap-2 w-full max-w-xs bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                        <input type="text" name='search' onChange={e => setSearch(e.target.value)} className="grow" placeholder="Search By Language" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <div className=''>
                    <h2 className='text-xl py-1 px-4 rounded-t-lg bg-orange-400 mb-6'>({tutors.length}) Experienced Tutors</h2>
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                        {
                            tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)
                        }
                    </div>
                </div>
            </div>
        </Zoom>
    );
};
export default FindTutors;