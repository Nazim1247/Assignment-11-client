import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-[1280px] mx-auto bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100'>
            <Header></Header>
            <div className='min-h-[230px] mt-16 pt-8'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;