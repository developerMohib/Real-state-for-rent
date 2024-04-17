import PropTypes from 'prop-types';
import { useContext } from 'react';
import { authCustomContext } from '../../utilitis/Provider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user} = useContext(authCustomContext)
    
    if(user){
        return children
    }
    return <Navigate to='/login' > </Navigate>
};
Private.propTypes = {
    children: PropTypes.node,
}

export default Private;