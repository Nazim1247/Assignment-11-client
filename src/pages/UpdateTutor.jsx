import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../authorize/AuthProvider';

const UpdateTutor = () => {

    const { user } = useContext(AuthContext);
    const {id} = useParams();
    // console.log(id)
    const [tutor, setTutor] = useState([]);

    useEffect(() => {
        fetchTutorData()
    }, [id])
    const fetchTutorData = async () => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutors/${id}`)
        setTutor(data)
    }
    // console.log(tutor)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        // const photo = form.photo.value;
        const language = form.language.value;
        const price = form.price.value;
        const description = form.description.value;
        const review = form.review.value;
        const formData = {
            tutor: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            },
            language,
            price,
            description,
            review,
        };

        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/update-tutor/${id}`, formData)
                .then(data => console.log(data.data))
        } catch (err) {
            console.log(err)
        }
        // console.log(formData)
        
    }

    return (
        <div>
             <div className="hero">
                <div className="hero-content flex-col w-11/12 lg:w-2/3 mx-auto py-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Update Tutorials</h1>

                    </div>
                    <div className="card bg-base-100 w-full shadow-xl border-2">
                        <form onSubmit={handleSubmit} className="card-body">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name'
                                    defaultValue={user?.displayName}
                                    placeholder="name" className="input input-bordered" readOnly />
                            </div>
                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email'
                                    defaultValue={user?.email}
                                    placeholder="email" className="input input-bordered" readOnly />
                            </div>
                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photo'
                                    defaultValue={user?.photoURL}
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
    );
};

export default UpdateTutor;