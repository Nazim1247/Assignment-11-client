import React, { useContext } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { Zoom } from 'react-awesome-reveal';
import loginAnimation from '../assets/login-lottie.json';
import Lottie from 'lottie-react';

const Login = () => {

    const navigate = useNavigate();
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    
    // console.log(googleUser)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                console.log(result.user.email);
                const user = { email: email };
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                        toast.success('user login successfully !!')
                    })

                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(async(result) => {

                const userName = result .user.displayName;
                const userEmail = result.user.email;
                const userPhoto = result.user.photoURL;
                const googleUser = {userName,userEmail,userPhoto}

                try {
                    await axios.post(`${import.meta.env.VITE_API_URL}/users`, googleUser)
                   
                } catch (err) {
                    toast.error(err)
                }

                toast.success('user login successfully !!')
                navigate('/')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <Zoom>
            <div className='w-11/12 mx-auto'>
            <Helmet>
            <title>Online Tutor Booking Platform | Login</title>
            </Helmet>
            <div className="hero py-2">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        
                        <Lottie animationData={loginAnimation}></Lottie>

                    </div>
                    <div className="card w-full shadow dark:bg-gray-800">
                    <h1 className="text-2xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label>
                                    <span>Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered dark:bg-gray-700" required />
                            </div>
                            <div className="form-control">
                                <label>
                                    <span>Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered dark:bg-gray-700" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Login</button>
                            </div>
                            <button onClick={handleGoogleLogin} type='button' className='btn btn-ghost mt-2 dark:bg-gray-700'>Login With Google</button>
                            <Link to='/register' className='text-center mt-2' type='button'>New to this Page? <span className='text-red-600'>Register</span></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </Zoom>
    );
};

export default Login;