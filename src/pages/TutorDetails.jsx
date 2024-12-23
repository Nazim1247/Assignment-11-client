import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../authorize/AuthProvider';

const TutorDetails = () => {
    const {user} = useContext(AuthContext);
    const { id } = useParams();
    const [tutor,setTutor] = useState([]);
    // // console.log(id)

    useEffect(()=>{
        fetchTutorData()
    },[])

    const fetchTutorData = async ()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutor/${id}`)
        setTutor(data)
    }
    const { name, photo, language, review, price, email, description } = tutor || {};

    const userEmail = user.email;
    // console.log(userEmail)
    const handleBook = async ()=>{
        const bookData = { name, photo, language, price, email, userEmail  }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/add-book`, bookData)
                .then(data => console.log(data.data))
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='w-11/12 mx-auto py-8'>
            <div className='flex flex-col md:flex-row items-center gap-2 border-2 shadow-sm rounded-lg lg:w-2/3 mx-auto'>
                    <img className='w-full h-52 lg:w-96 lg:h-80 p-4' src={photo} alt="" />
                    <div>
                        <h2 className='text-xl font-semibold'>{name}</h2>
                        <div className='flex items-center gap-2'>
                        <p className='font-semibold'>Email:</p>
                        <p>{email}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                        <p className='font-semibold'>Language:</p>
                        <p>{language}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                        <p className='font-semibold'>Review:</p>
                        <p>{review}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                        <p className='font-semibold'>Price:</p>
                        <p>{price}</p>
                        </div>
                        <div className=''>
                        <p className='font-semibold'>Description:</p>
                        <p>{description}</p>
                        </div>
                        <button onClick={handleBook} className='btn btn-sm bg-blue-300 w-full mt-4'>Book</button>
                    </div>
                </div>
        </div>
    );
};

export default TutorDetails;