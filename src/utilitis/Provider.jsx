import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

export const authCustomContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        signOut (auth)
        .then((result) => {
            console.log(result.user)
          }).catch((error) => {
            console.error(error);
          });
          
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        } )
        return () => unsubscribe()
    },[])

    const authInfo = {user,createUser,logInUser,signInGoogle,logOut,loading}

    return (
        <authCustomContext.Provider value={authInfo}>
            {children}
        </authCustomContext.Provider>
    );
};
Provider.propTypes = {
    children: PropTypes.node,
}
export default Provider;