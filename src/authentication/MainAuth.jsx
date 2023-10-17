import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)


const MainAuth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const socialLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    } 

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        }); 
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe();
    },[])
    const myRef = {user, loading, createUser, logIn, socialLogIn, logOut, updateUserProfile}

    return (
        <div>
            <AuthContext.Provider value={myRef}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default MainAuth;