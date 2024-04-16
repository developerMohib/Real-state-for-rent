
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='checka flex bg-base-300 justify-center h-screen items-center'>
            <div className='text-center space-y-5'>
                <h1 className='font-bold text-3xl '> Oops! </h1>
                <p> Your link path is wrong. Plese check Or go to home </p>
                <NavLink to='./' > <button className='btn btn-primary my-10'> Go Home </button> </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;