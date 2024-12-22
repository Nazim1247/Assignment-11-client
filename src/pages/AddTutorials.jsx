import axios from 'axios';
import React from 'react';

const AddTutorials = () => {
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
        const formData = { name, email, photo, language, price, description, review, };

        // fetch('http://localhost:5000/tutorials', {
        //     method: 'POST',
        //     headers: {
        //         'content-type':'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))

        try{
            await axios.post(`${import.meta.env.VITE_API_URL}/tutorials`,formData)
            .then(data => console.log(data.data))
        }catch(err){
            console.log(err)
        }
        // console.log(formData)
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col w-11/12 lg:w-2/3 mx-auto py-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold">Add Tutorials</h1>

                    </div>
                    <div className="card bg-base-100 w-full shadow-xl border-2">
                        <form onSubmit={handleSubmit} className="card-body">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                            </div>
                            {/* language */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Language</span>
                                </label>
                                <input type="text" name='language' placeholder="language" className="input input-bordered" required />
                            </div>
                            {/* price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                            </div>
                            {/* description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' placeholder="description" className="input input-bordered" required />
                            </div>
                            {/* review */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>
                                <input type="text" name='review' placeholder="review" className="input input-bordered" required />

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

export default AddTutorials;