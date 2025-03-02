import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authorize/AuthProvider';
import logo from '../assets/logo.png';
import { toast } from 'react-toastify';
import { MdOutlineLightMode } from 'react-icons/md';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logoutUser, theme, toggleTheme } = useContext(AuthContext);
  
  const links = <div className='flex lg:flex-row flex-col space-x-3'>
    <NavLink to='/' className={({ isActive }) => isActive ? 'btn btn-ghost text-black' : 'btn btn-ghost lg:text-white'}>Home</NavLink>
    <NavLink to='/find-tutors' className={({ isActive }) => isActive ? 'btn btn-ghost text-black' : 'btn btn-ghost lg:text-white'}>Find tutors</NavLink>
    {
      user && <>
        <NavLink to='/addTutorials' className={({ isActive }) => isActive ? 'btn btn-ghost text-black' : 'btn btn-ghost lg:text-white'}>Add Tutorials</NavLink>
        <NavLink to='/myTutorials' className={({ isActive }) => isActive ? 'btn btn-ghost text-black' : 'btn btn-ghost lg:text-white'}>My Tutorials</NavLink>
        <NavLink to='/myBookedTutorials' className={({ isActive }) => isActive ? 'btn btn-ghost text-black' : 'btn btn-ghost lg:text-white'}>My booked tutors</NavLink>
      </>
    }
  </div>

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success('user logout successfully !!')
        navigate('/login')
      })
      .catch(error => {
        toast.error(error.message)
      })
  }

  const handleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-11/12 mx-auto'>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-pink-500 rounded-box z-[2] mt-3 w-52 p-2 shadow">

              {links}

            </ul>
          </div>
          <img title='Online Tutor Booking Platform' className='w-10 h-10 rounded-full' src={logo} alt="" />

        <button onClick={toggleTheme} className='btn btn-ghost text-4xl'>
        {theme === 'light'?
      <MdOutlineLightMode className='text-white' title='Click for Dark Mode'/>: 
      <BsFillMoonStarsFill className='text-gray-500' title='Click for Light Mode' />}
          </button>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {links}

          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
              <>
                <div className='flex items-center'>
                  <button onClick={handleLogout} className="btn btn-ghost text-white">Logout</button>
                  
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <div className="w-12 rounded-full">
                        <img onClick={handleDropdown} title={user?.displayName} src={user?.photoURL} className='w-10 h-10 rounded-full' alt="" />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[2] mt-3 p-2 shadow items-center mx-auto dark:bg-gray-900">
                      <li>
                        <img className='w-12 h-12 rounded-full mx-auto' src={user.photoURL} alt="" />
                      </li>
                      <li><a className='font-semibold text-xl'>{user.displayName}</a></li>
                      <li><a>{user.email}</a></li>
                    </ul>
                  </div>
                </div>
              </>
              :
              <Link to='/login' className="btn btn-ghost text-white">Login</Link>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;