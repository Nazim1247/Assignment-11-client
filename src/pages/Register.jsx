import React, { useContext } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const {user,setUser,createUser,loginWithGoogle,updateUser}=useContext(AuthContext);
    const navigate = useNavigate();
        const handleSubmit = e =>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;
    
            console.log(name,photo,email,password)
    
            createUser(email,password)
            .then(result =>{
                console.log(result.user)
                setUser(user)
                updateUser({displayName: name, photoURL: photo})
                navigate('/')
                // .then(()=>{
                  
                // })
                // .catch(err =>{
                //   console.log(err.message)
                // })
            })
            .catch(error =>{
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
                  <h1 className="text-2xl font-bold">Register now!</h1>
                  
                </div>
                <div className="card w-full shadow-xl">
                  <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo url</span>
                      </label>
                      <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Register</button>
                    </div>
                    <button onClick={handleGoogleLogin} type='button' className='btn mt-2'>Login With Google</button>
                    <Link to='/login' className='text-center mt-2' type='button'>Already Have an account? <span className='text-red-600'>Login</span></Link>
                  </form>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Register;