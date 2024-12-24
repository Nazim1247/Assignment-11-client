import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdOutlineSecurityUpdate } from 'react-icons/md';
import useAxiosSecure from '../hooks/UseAxiosSecure';



const MyTutorials = () => {
    const {user} = useContext(AuthContext);
    const [tutors, setTutors] = useState([]);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        fetchAllTutors()
    }, [])
    const fetchAllTutors = async () => {
        // const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutors/${user?.email}`,{withCredentials:true})
        // setTutors(data)

        axiosSecure.get(`/all-tutors/${user?.email}`)
        .then(res => setTutors(res.data));
    }
    // console.log(tutors)
    
    const handleDelete = async(id)=>{
        try{
            await axios.delete(`${import.meta.env.VITE_API_URL}/tutor/${id}`)
            fetchAllTutors()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='w-11/12 mx-auto'>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
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
            <td>{tutor.description.substring(0,10)}...</td>
            <th>
              <button onClick={()=>handleDelete(tutor._id)} className="btn btn-ghost btn-xs text-2xl"><MdDeleteForever /></button>
            </th>
            <th>
              <Link to={`/updateTutor/${tutor._id}`} className="btn btn-ghost btn-xs text-2xl"><MdOutlineSecurityUpdate /></Link>
            </th>
          </tr>)
      }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyTutorials;