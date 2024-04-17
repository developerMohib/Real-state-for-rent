import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

export const authCustomContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        signOut (auth)
        .then((result) => {
            console.log(result.user)
          }).catch((error) => {
            console.error(error);
          });
          
    }

    const authInfo = {user,createUser,logInUser,signInGoogle,logOut}

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