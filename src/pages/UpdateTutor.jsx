import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTutor = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [tutor, setTutor] = useState([]);

    useEffect(() => {
        fetchTutorData()
    }, [id])
    const fetchTutorData = async () => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutor/${id}`)
        setTutor(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const language = form.language.value;
        const price = form.price.value;
        const description = form.description.value;
        const review = form.review.value;
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
            await axios.put(`${import.meta.env.VITE_API_URL}/update-tutor/${id}`, formData)
            toast.success('Data Updated successfully !!')
            navigate('/myTutorials')
                
        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <Zoom>
            <div>
            <Helmet>
            <title>Online Tutor Booking Platform | Update Tutor</title>
            </Helmet>
             <div className="hero">
                <div className="hero-content flex-col w-11/12 lg:w-2/3 mx-auto py-8">
                    <div className="text-center w-full">
                        <h1 className="text-2xl py-1 px-4 rounded-t-lg bg-orange-400">Update Tutorials</h1>

                    </div>
                    <div className="card w-full shadow-xl border text-gray-500">
                        <form onSubmit={handleSubmit} className="card-body">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Name</span>
                                </label>
                                <input type="text" name='name'
                                    defaultValue={tutor.name}
                                    placeholder="name" className="input input-bordered bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100" readOnly />
                            </div>
                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Email</span>
                                </label>
                                <input type="email" name='email'
                                    defaultValue={tutor.email}
                                    placeholder="email" className="input input-bordered bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100" readOnly />
                            </div>
                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Photo url</span>
                                </label>
                                <input type="text" name='photo'
                                    defaultValue={tutor.photo}
                                    placeholder="photo url" className="input input-bordered bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                            {/* language */}
                            {
                                tutor.language && <div className="form-control">
                                <label className="label">
                                    <span>Language</span>
                                </label>
                                <select className="select select-bordered w-full bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                                defaultValue={tutor.language}
                                name='language'>
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
                            }
                            {/* price */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Price</span>
                                </label>
                                <input type="text" name='price'
                                defaultValue={tutor.price}
                                placeholder="price" className="input input-bordered bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                            {/* description */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Description</span>
                                </label>
                                <input type="text" name='description' 
                                defaultValue={tutor.description}
                                placeholder="description" className="input input-bordered bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100" required />
                            </div>
                            {/* review */}
                            <div className="form-control">
                                <label className="label">
                                    <span>Review</span>
                                </label>
                                <input type="text" name='review'
                                defaultValue={tutor.review}
                                placeholder="review" className="input input-bordered bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100" readOnly />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </Zoom>
    );
};

export default UpdateTutor;