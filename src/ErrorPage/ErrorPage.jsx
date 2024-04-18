
import { NavLink } from 'react-router-dom';
import { IoSadOutline } from "react-icons/io5";
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
    return (
        <div className='checka flex bg-base-300 justify-center h-screen items-center'>
            <Helmet> <title> ErrorPage | Find Your Dream Home </title> </Helmet>
            <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
    <IoSadOutline className='text-8xl' />
		<p className="text-3xl">Looks like You are currently Wrong Path</p>
        <NavLink className=" btn btn-ghost px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50" to="/">Back to homepage</NavLink>
	</div>
</section>
        </div>
    );
};

export default ErrorPage;