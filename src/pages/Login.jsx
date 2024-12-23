import React, { useContext } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <div className="hero py-8">
                <div className="hero-content flex-col lg:w-2/3 mx-auto border-2 rounded-lg">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card w-full shadow-xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <button onClick={handleGoogleLogin} type='button' className='btn mt-2'>Login With Google</button>
                            <Link to='/register' className='text-center mt-2' type='button'>New to this Page? <span className='text-red-600'>Register</span></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;