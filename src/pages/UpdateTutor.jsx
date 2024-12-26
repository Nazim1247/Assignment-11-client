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
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Update Tutorials</h1>

                    </div>
                    <div className="card w-full shadow-xl border-2 text-gray-800">
                        <form onSubmit={handleSubmit} className="card-body">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name'
                                    defaultValue={tutor.name}
                                    placeholder="name" className="input input-bordered" readOnly />
                            </div>
                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email'
                                    defaultValue={tutor.email}
                                    placeholder="email" className="input input-bordered" readOnly />
                            </div>
                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photo'
                                    defaultValue={tutor.photo}
                                    placeholder="photo url" className="input input-bordered" required />
                            </div>
                            {/* language */}
                            {
                                tutor.language && <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Language</span>
                                </label>
                                <select className="select select-bordered w-full"
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
                                    <option>Mandarin Chinese</option>
                                </select>
                                
                            </div>
                            }
                            {/* price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price'
                                defaultValue={tutor.price}
                                placeholder="price" className="input input-bordered" required />
                            </div>
                            {/* description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' 
                                defaultValue={tutor.description}
                                placeholder="description" className="input input-bordered" required />
                            </div>
                            {/* review */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>
                                <input type="text" name='review'
                                defaultValue={tutor.review}
                                placeholder="review" className="input input-bordered" readOnly />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
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