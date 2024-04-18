import PropTypes from 'prop-types';
import { useContext } from 'react';
import { authCustomContext } from '../../utilitis/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loading} = useContext(authCustomContext);
    const location = useLocation() ;
    // console.log(location, 'mylocation')
    if(loading){
        return <span> Loading..... </span> ;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' > </Navigate>
};
Private.propTypes = {
    children: PropTypes.node,
}

export default Private;