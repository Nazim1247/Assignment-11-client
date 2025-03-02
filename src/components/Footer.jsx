import React from 'react';
import logo from '../assets/logo.png'
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer footer-center bg-black text-white rounded p-10">
  <nav className="text-2xl">
    <img className='w-20 h-20 rounded-full' src={logo} alt="" />
    <a href="">Online Tutor Booking Platform</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4 text-2xl">
      <a href='https://www.linkedin.com/in/nazim-uddin-a85aba345/'>
        
        <FaLinkedin className='text-blue-400' />
      </a>
      <a href='https://youtube.com/@najimuddin-cv5eb?si=muFnCh-RxYEQ2ub5'>
        
        <FaYoutube className='text-red-600' />
      </a>
      <a href='https://www.facebook.com/share/1BPK8VijLn/'>
        
        <FaFacebook className='text-blue-500' />
      </a>
      <a href='https://github.com/Nazim1247'>
        
        <FaGithub />
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;