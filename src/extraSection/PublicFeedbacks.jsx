import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { FcFeedback } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const PublicFeedbacks = () => {
    const feedbacks = [
        {
            id: 1,
            name: "John Doe",
            feedback: "This platform helped me find the perfect tutor for learning French!",
        },
        {
            id: 2,
            name: "Jane Smith",
            feedback: "Excellent experience! The tutors are very professional and friendly.",
        },
        {
            id: 3,
            name: "Alex Johnson",
            feedback: "I improved my math skills in just a few weeks. Highly recommend!",
        },
        {
            id: 4,
            name: "Emily Davis",
            feedback: "Great platform for learning languages. The tutors are amazing!",
        },
        {
            id: 5,
            name: "Michael Brown",
            feedback: "Booking tutors is so easy and convenient. I love using this service.",
        },
        {
            id: 6,
            name: "Sophia Wilson",
            feedback: "My daughter’s grades have improved significantly after using this platform.",
        },
    ];
    return (
        <div className='my-8'>
            <div className='text-center lg:w-2/3 mx-auto p-6'>
            <h2 className='text-2xl font-bold '>See Feedback of the Peoples</h2>
            <p>Discover what people are saying about their experiences with our platform. Real feedback from real users who have transformed their learning journey with our expert tutors.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    feedbacks.map(feedback => <div key={feedback.id} className='text-center p-6 border-2 rounded-md space-y-2 shadow-md'>
                        <p><FcFeedback className='mx-auto text-5xl'/></p>
                        <div className='flex gap-2 items-center justify-center text-orange-700'>
                        <p><FaUserGraduate /></p>
                        <h2 className='text-xl font-semibold'>{feedback.name}</h2>
                        </div>
                        <p>{feedback.feedback}</p>
                    </div>)
                }
            </div>
            <div className='text-center mt-4'>
            <Link to='/find-tutors' className='btn btn-secondary'>See All Tutors</Link>
            </div>
        </div>
    );
};

export default PublicFeedbacks;