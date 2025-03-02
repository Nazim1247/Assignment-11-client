import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

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

    const toggleTheme = ()=>{
        setTheme((prevTheme)=>(prevTheme === 'light'? 'dark': 'light'))
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser)

            if(theme === 'dark'){
                document.documentElement.classList.add('dark')
            }else{
                document.documentElement.classList.remove('dark')
            }
            localStorage.setItem('theme', theme)

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
    },[theme])

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        loginUser,
        loginWithGoogle,
        updateUser,
        logoutUser,
        theme,
        toggleTheme,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;