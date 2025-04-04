import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { Zoom } from 'react-awesome-reveal';

const AddTutorials = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const language = form.language.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const review = parseInt(form.review.value);
        const formData = {
            name,
            email,
            photo,
            language,
            price,
            description,
            review,
        };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/tutorials`, formData)
            navigate('/myTutorials')
            toast.success('tutor added successfully !!')
                
        } catch (err) {
            toast.error(err)
        }
    }
    
    return (
        <Zoom>
            <div>
            <Helmet>
            <title>Online Tutor Booking Platform | Add Tutorial</title>
            </Helmet>
            <div className="hero">
                <div className="hero-content flex-col w-11/12 lg:w-2/3 mx-auto py-8">
                    <div className="text-center w-full">
                        <h1 className="text-2xl py-1 px-4 rounded-t-lg bg-orange-400">Add Tutorials</h1>

                    </div>
                    <div className="card w-full shadow-xl dark:bg-gray-800">
                        <form onSubmit={handleSubmit} className="card-body">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Name</span>
                                </label>
                                <input type="text" name='name'
                                defaultValue={user.displayName}
                                    placeholder="name" className="input input-bordered dark:bg-gray-700" required />
                            </div>
                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Email</span>
                                </label>
                                <input type="email" name='email'
                                defaultValue={user.email}
                                    placeholder="email" className="input input-bordered dark:bg-gray-700" required />
                            </div>
                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Photo url</span>
                                </label>
                                <input type="text" name='photo'
                                    placeholder="photo url" className="input input-bordered dark:bg-gray-700" required />
                            </div>
                            {/* language */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Language</span>
                                </label>
                                <select className="select select-bordered w-full dark:bg-gray-700" name='language'>
                                    <option >Select Your Language</option>
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>Arabic</option>
                                    <option>French</option>
                                    <option>Hindi</option>
                                    <option>Bengali</option>
                                    <option>Japanese</option>
                                    <option>German</option>
                                    <option>Chinese</option>
                                </select>
                                
                            </div>
                            {/* price */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Price</span>
                                </label>
                                <input type="text" name='price' placeholder="price" className="input input-bordered dark:bg-gray-700" required />
                            </div>
                            {/* description */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Description</span>
                                </label>
                                <input type="text" name='description' placeholder="description" className="input input-bordered dark:bg-gray-700" required />
                            </div>
                            {/* review */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Review</span>
                                </label>
                                <input type="text" name='review'
                                defaultValue={0}
                                placeholder="review" className="input input-bordered dark:bg-gray-700" readOnly />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </Zoom>
    );
};

export default AddTutorials;