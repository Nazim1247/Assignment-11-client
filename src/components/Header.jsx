import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='bg-secondary fixed top-0 left-0 w-full z-50 shadow-md'>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;