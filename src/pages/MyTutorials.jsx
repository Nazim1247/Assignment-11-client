import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import axios from 'axios';
import TableRow from './TableRow';

const MyTutorials = () => {
    const {user} = useContext(AuthContext);
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        fetchAllTutors()
    }, [])
    const fetchAllTutors = async () => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/tutor/${user?.email}`)
        setTutors(data)
    }
    // console.log(tutors)
    return (
        <div className='w-11/12 mx-auto'>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
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
        tutors.map(tutor => <TableRow key={tutor._id} tutor={tutor}></TableRow>)
      }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyTutorials;