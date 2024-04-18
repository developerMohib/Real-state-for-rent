import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.init";
import { GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const authCustomContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
  const notifyLogIn = () => toast("Log in Successfully!");
  const notifyLogOut = () => toast("Log Out Successfully!");
  const notifyRegister = () => toast("Register Successfully!");
  const pleaseRegister = () => toast.warning(" Please Register !");

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
    }
    const signInGithub = () => {
        setLoading(true);
        signInWithPopup(auth, gitHubProvider)
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
    const updateProfileFromUser = (name, url) => {
        updateProfile (auth.currentUser, {
            displayName: name, 
            photoURL: url,
        });
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        } )
        return () => unsubscribe()
    },[])

    const authInfo = {
        user,
        createUser,
        logInUser,
        signInGoogle,
        logOut,
        loading,
        updateProfileFromUser,
        signInGithub, 
        notifyLogIn, 
        notifyLogOut,
        notifyRegister,
        pleaseRegister
    }

    return (
        <authCustomContext.Provider value={authInfo}>
            {children}
          <ToastContainer />
        </authCustomContext.Provider>
    );
};
Provider.propTypes = {
    children: PropTypes.node,
}
export default Provider;