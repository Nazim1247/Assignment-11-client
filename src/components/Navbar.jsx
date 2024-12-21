import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authorize/AuthProvider';

const Navbar = () => {
  const navigate = useNavigate();
  const {user,logoutUser} = useContext(AuthContext);

    const links = <div className='flex lg:flex-row flex-col space-x-3'>
    <NavLink to='/' className={({isActive})=>isActive?'text-blue-600':'text-black'}>Home</NavLink>
    <NavLink to='/findTutors' className={({isActive})=>isActive?'text-blue-600':''}>Find tutors</NavLink>
    {
      user && <>
      <NavLink to='/addTutorials' className={({isActive})=>isActive?'text-blue-600':''}>Add Tutorials</NavLink>
    <NavLink to='/myTutorials' className={({isActive})=>isActive?'text-blue-600':''}>My Tutorials</NavLink>
    <NavLink to='/myBookedTutorials' className={({isActive})=>isActive?'text-blue-600':''}>My booked tutors</NavLink>
      </>
    }
    </div>

    const handleLogout = ()=>{
      logoutUser()
      .then(() =>{
        console.log('logout successfully!')
        navigate('/login')
      })
      .catch(error =>{
        console.log(error.message)
      })
    }
    return (
        <div className='w-11/12 mx-auto py-4'>
            <div className="navbar">
  <div className="navbar-start w-full">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

            {links}
        {/* <li><a>Home</a></li>
        <li><a>Find tutors</a></li> */}
        {/* <li>
          <a>Private</a>
          <ul className="p-2">
          <li><a>Add Tutorials</a></li>
            <li><a>My Tutorials</a></li>
            <li><a>My booked tutors</a></li>
          </ul>
        </li> */}
        
      </ul>
    </div>
    <a className="text-xl md:text-2xl font-bold">Online Tutor Booking Platform</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        {links}
    {/* <li><a>Home</a></li>
    <li><a>Find tutors</a></li> */}
      {/* <li>
        <details>
          <summary>Private</summary>
          <ul className="p-2">
            <li><a>Add Tutorials</a></li>
            <li><a>My Tutorials</a></li>
            <li><a>My booked tutors</a></li>
          </ul>
        </details>
      </li> */}
      
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    {
      user ? 
      <>
      <div className='flex items-center gap-2'>
        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
        <img title={user?.displayName} src={user?.photoURL} className='w-12 h-12 rounded-full' alt="" />
      </div>
      </>
      :
      <Link to='/login' className="btn btn-primary">Login</Link>
    }
    
    
  </div>
</div>
        </div>
    );
};

export default Navbar;