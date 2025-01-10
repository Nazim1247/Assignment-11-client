import React from 'react';
import { GiBookCover } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const PlatformFeatures = () => {
    const features = [
        {
            id: 1,
            title: "Expert Tutors",
            description: "Connect with highly qualified tutors for any subject or language.",
        },
        {
            id: 2,
            title: "Flexible Scheduling",
            description: "Book sessions at your convenience with our easy-to-use scheduler.",
        },
        {
            id: 3,
            title: "Secure Payments",
            description: "Make hassle-free and secure payments directly on our platform.",
        },
        {
            id: 4,
            title: "Personalized Learning",
            description: "Get tailored sessions that match your learning style and goals.",
        },
        {
            id: 5,
            title: "User Reviews",
            description: "Read reviews from other learners to choose the best tutor for you.",
        },
        {
            id: 6,
            title: "Global Accessibility",
            description: "Access tutors from around the world anytime, anywhere.",
        },
    ];

    return (
        <div className='my-8'>
            <div className='text-center lg:w-2/3 mx-auto p-6'>
                <h2 className='text-2xl font-bold '>Features of Our Platform</h2>
                <p>Our platform is designed to provide you with the best tools and support for effective learning.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    features.map(feature => <div key={feature.id} className='text-center p-6 border rounded-md space-y-2 shadow-md'>
                        <p><GiBookCover className='mx-auto text-5xl' /></p>
                        <h2 className='text-xl text-orange-500 font-semibold'>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>)
                }
            </div>
            <div className='text-center mt-4'>
                <Link to='/find-tutors' className='btn btn-secondary'>Collect Tutor</Link>
            </div>
        </div>
    );
};

export default PlatformFeatures;