import React, { useContext } from 'react';
import { AuthContext } from '../authorize/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <p className='text-center'><span className="loading loading-spinner loading-lg"></span></p>
    }

    if(user){
        return children;
    }

    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;