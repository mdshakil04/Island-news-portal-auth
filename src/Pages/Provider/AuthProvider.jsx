import { useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from './../../firebase.config';
import { useEffect } from "react";

export const AuthContext = createContext(null);
// 3.Import get Auth
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    // 2. State declaration
    const [user, setUser] = useState(null);
    // -------------------------
    const [loading, setLoading] = useState(true)
    // 4 Create User
    const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect( () =>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])
    // 1. Set value
    const authInfo ={
        // send data to other components
        user,
        createUser,
        logIn,
        logOut,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;