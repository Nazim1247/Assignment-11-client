import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Zoom } from 'react-awesome-reveal';
import { toast } from 'react-toastify';

const MyBookedTutors = () => {
  
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchAllBooks()

  }, [])

  const fetchAllBooks = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books/${user?.email}`)
    setBooks(data)
  }

  const handleReview = async (tutorId) => {
  
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/update-book/${tutorId}`)
      toast.success('Review Done successfully !!')
    } catch (err) {
      toast.error(err)
    }
  }

  return (
    <Zoom>
      <div className='w-11/12 mx-auto my-2'>
      <Helmet>
      <title>Online Tutor Booking Platform | My Booked Tutors</title>
      </Helmet>
      <h2 className='text-xl py-1 px-4 rounded-t-lg bg-orange-400'>({books.length}) Tutors Booked</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className='text-gray-400'>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Language</th>
              <th>Price</th>
              <th>Review</th>

            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              books.map(book => <tr key={book._id}>
                <th>
                  <img
                    className='w-12 h-12 rounded-full'
                    src={book.photo}
                    alt="" />
                </th>
                <td>
                  {book.name}
                </td>
                <td>
                  {book.language}
                </td>
                <td>{book.price}</td>
                <td><button onClick={()=>handleReview(book.tutorId)} className='btn btn-xs text-white bg-orange-400'>Review</button></td>

              </tr>)
            }

          </tbody>

        </table>
      </div>
    </div>
    </Zoom>
  );
};

export default MyBookedTutors;