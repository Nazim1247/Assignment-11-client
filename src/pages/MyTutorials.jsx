import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import useAxiosSecure from '../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { Zoom } from 'react-awesome-reveal';
import { FaEdit } from 'react-icons/fa';

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchAllTutors()
  }, [])
  const fetchAllTutors = async () => {

    axiosSecure.get(`/all-tutors/${user?.email}`)
      .then(res => setTutors(res.data));
  }

  const handleDelete =  (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          await axios.delete(`${import.meta.env.VITE_API_URL}/tutor/${id}`)
          .then(res => {
            if(res.data.deletedCount >0){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = tutors.filter(t => t._id !== id);
              setTutors(remaining);
            }
          })
        }
      });

      fetchAllTutors()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Zoom>
      <div className='w-11/12 mx-auto my-8 border rounded-lg'>
      <Helmet>
      <title>Online Tutor Booking Platform | My Tutorials</title>
      </Helmet>
      <h2 className='text-xl py-1 px-4 rounded-lg bg-orange-400'>({tutors.length}) Tutorials Added</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className='text-gray-400'>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Language</th>
              <th>Price</th>
              <th>Review</th>
              <th>Description</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              tutors.map(tutor => <tr key={tutor._id}>
                <th>
                  <img
                    className='w-12 h-12 rounded-full'
                    src={tutor.photo}
                    alt="" />
                </th>
                <td>
                  {tutor.name}
                </td>
                <td>
                  {tutor.language}
                </td>
                <td>{tutor.price}</td>
                <td>{tutor.review}</td>
                <td>{tutor.description.substring(0, 10)}...</td>
                <th>
                  <button title='Delete' onClick={() => handleDelete(tutor._id)} className="btn btn-ghost btn-xs text-2xl text-red-600"><MdDeleteForever /></button>
                </th>
                <th>
                  <Link title='Update' to={`/updateTutor/${tutor._id}`} className="btn btn-ghost btn-xs text-xl text-orange-400"><FaEdit /></Link>
                </th>
              </tr>)
            }

          </tbody>

        </table>
      </div>
    </div>
    </Zoom>
  );
};

export default MyTutorials;