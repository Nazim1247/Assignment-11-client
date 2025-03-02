import React, { useContext } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Zoom } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import registerAnimation from '../assets/register-lottie.json';

const Register = () => {
    const {user,setUser,createUser,loginWithGoogle,updateUser}=useContext(AuthContext);
    const navigate = useNavigate();
        const handleSubmit = (e) =>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;
    
            createUser(email,password)
            .then(async(result) =>{
              setUser({
                ...result.user,photoURL:photo
              })

              // send user to database 
              const newUser = {name,email,photo};
              
              try {
                await axios.post(`${import.meta.env.VITE_API_URL}/users`, newUser)
               
            } catch (err) {
                toast.error(err)
            }

                console.log(result.user)
                
                // update profile
                updateUser({displayName: name, photoURL: photo})
                toast.success('user Register successfully !!')
                navigate('/')                        
            })
            .catch(error =>{
                toast.error(error.message)
            })
        }

        const handleGoogleLogin = () => {
            loginWithGoogle()
                .then(async(result) => {
                  console.log(result.user)
                    toast.success('user Register successfully !!')
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
          <title>Online Tutor Booking Platform | Register</title>
          </Helmet>
            <div className="hero py-2">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left lg:w-[600px]">
                  
                  <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card w-full shadow dark:bg-gray-800">
                <h1 className="text-2xl text-center font-bold">Register now!</h1>
                  <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                      <label>
                        <span>Name</span>
                      </label>
                      <input type="text" name='name' placeholder="name" className="input input-bordered dark:bg-gray-700" required />
                    </div>
                    <div className="form-control">
                      <label>
                        <span>Photo url</span>
                      </label>
                      <input type="text" name='photo' placeholder="photo url" className="input input-bordered dark:bg-gray-700" required />
                    </div>
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
                      <button className="btn btn-secondary">Register</button>
                    </div>
                    <button onClick={handleGoogleLogin} type='button' className='btn btn-ghost mt-2 dark:bg-gray-700'>Login With Google</button>
                    <Link to='/login' className='text-center mt-2' type='button'>Already Have an account? <span className='text-red-600'>Login</span></Link>
                  </form>
                </div>
              </div>
            </div>
        </div>
        </Zoom>
    );
};

export default Register;