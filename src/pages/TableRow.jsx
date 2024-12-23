import axios from 'axios';
import React from 'react';

const TableRow = ({tutor}) => {
    const { _id, tutor: t, language, review, price, description } = tutor || {};
    // console.log(tutor)
    const handleDelete = async(id)=>{
        try{
            await axios.delete(`${import.meta.env.VITE_API_URL}/tutor/${id}`)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <tr>
        <th>
        <img
        className='w-12 h-12 rounded-full'
            src={t?.photo}
            alt="" />
        </th>
        <td>
          {t?.name}
        </td>
        <td>
          {language}
        </td>
        <td>{price}</td>
        <td>{review}</td>
        <td>{description.substring(0,10)}...</td>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">x</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">e</button>
        </th>
      </tr>
    );
};

export default TableRow;