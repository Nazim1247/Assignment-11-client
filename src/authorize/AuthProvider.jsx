import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState([]);

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const loginWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser =(updateData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, updateData);
    }

    const logoutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)

            if(currentUser?.email){
                const user = {email: currentUser.email}

                axios.post(`${import.meta.env.VITE_API_URL}/jwt`,user,{
                    withCredentials:true})
                .then(res => {
                    console.log('login',res.data);
                    setLoading(false)
                })
            }
            else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`,{},{
                    withCredentials:true})
                .then(res => {
                    console.log('logout',res.data);
                    setLoading(false)
                })
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        loginUser,
        loginWithGoogle,
        updateUser,
        logoutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;