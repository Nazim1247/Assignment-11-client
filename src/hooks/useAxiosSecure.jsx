import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    withCredentials: true
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logoutUser} = useAuth();

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
            return response;
        }, error =>{
            console.log('error catch', error)

            if(error.status === 401 || error.status === 403){
                console.log('need to logout')
                logoutUser()
                .then(()=>{
                    console.log('logout done')
                    navigate('/login')
                })
                .catch(err => console.log(err.message))
            }
            return Promise.reject(error)
        }
    )
    },[])
    return axiosInstance;
};

export default useAxiosSecure;