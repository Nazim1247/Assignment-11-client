import React from 'react';

const TableRow = ({tutor}) => {
    const { tutor: t, language, review, price, description } = tutor || {};
    console.log(tutor)
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
          <button className="btn btn-ghost btn-xs">x</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">e</button>
        </th>
      </tr>
    );
};

export default TableRow;