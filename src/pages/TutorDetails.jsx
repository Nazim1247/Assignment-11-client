import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../authorize/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { Zoom } from 'react-awesome-reveal';
import { FaUserGraduate } from 'react-icons/fa';
import { MdDescription, MdLanguage, MdMarkEmailRead, MdOutlineRateReview } from 'react-icons/md';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';

const TutorDetails = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const { id } = useParams();
    const [tutor,setTutor] = useState([]);

    useEffect(()=>{
        fetchTutorData()
    },[])

    const fetchTutorData = async ()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutor/${id}`)
        setTutor(data)
    }
    const { _id, name, photo, language, review, price, email, description } = tutor || {};

    const userEmail = user.email;
    
    const handleBook = async ()=>{
        const bookData = {tutorId:_id, name, photo, language, price, email, userEmail, review  }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/add-book`, bookData)
                
                toast.success('Tutor Booked successfully !!')
                navigate('/myBookedTutorials')

        } catch (err) {
            toast.error(err.message)
        }
    }
    return (
        <Zoom>
            <div className='w-11/12 mx-auto py-8'>
            <Helmet>
            <title>Online Tutor Booking Platform | Tutor Details</title>
            </Helmet>
            <div className='flex flex-col md:flex-row items-center gap-2 border-2 shadow-sm rounded-lg lg:w-2/3 mx-auto'>
                    <img className='w-full h-52 lg:w-96 lg:h-80 p-4' src={photo} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2'>
                        <p><FaUserGraduate /></p>
                        <h2 className='text-xl font-semibold'>{name}</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p><MdMarkEmailRead /></p>
                        <p className='font-semibold'>Email:</p>
                        <p>{email}</p>
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
                        <div className='flex items-center gap-2'>
                            <p><HiOutlineCurrencyDollar /></p>
                        <p className='font-semibold'>Price:</p>
                        <p>{price}</p>
                        </div>
                        <div className=''>
                            <div className='flex items-center gap-2'>
                            <p><MdDescription /></p>
                            <p className='font-semibold'>Description:</p>
                            </div>
                        <p>{description}</p>
                        </div>
                        <button onClick={handleBook} className='btn btn-sm bg-blue-300 w-full mt-4'>Book</button>
                    </div>
                </div>
        </div>
        </Zoom>
    );
};

export default TutorDetails;