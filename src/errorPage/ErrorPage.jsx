import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-8 space-y-3'>
            <h2 className='text-2xl'>Opps!!</h2>
            <h2 className='text-5xl'>404</h2>
            <h2 className='text-xl text-red-600'>Not Found Data</h2>
            <Link to={'/'}><button className='btn btn-secondary mt-4'><FaArrowLeft /> Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;