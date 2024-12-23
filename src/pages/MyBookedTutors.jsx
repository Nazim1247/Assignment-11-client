import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import axios from 'axios';

const MyBookedTutors = () => {
    const {user} = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchAllBooks()
    }, [])
    const fetchAllBooks = async () => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/books/${user?.email}`)
        setBooks(data)
    }
console.log(books)

    return (
        <div className='w-11/12 mx-auto py-8'>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Language</th>
                    <th>Price</th>
                    <th>Review</th>
                    {/* <th>Description</th>
                    <th>Delete</th>
                    <th>Update</th> */}
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
                        <td><button className='btn btn-primary'>Review</button></td>
                        {/* <td>{book.description.substring(0,10)}...</td> */}
                        {/* <th>
                          <button onClick={()=>handleDelete(tutor._id)} className="btn btn-ghost btn-xs">x</button>
                        </th> */}
                        {/* <th>
                          <Link to={`/updateTutor/${tutor._id}`} className="btn btn-ghost btn-xs">e</Link>
                        </th> */}
                      </tr>)
                  }
                  
                </tbody>
                
              </table>
            </div>
        </div>
    );
};

export default MyBookedTutors;