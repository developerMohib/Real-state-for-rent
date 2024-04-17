import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authCustomContext } from "../../utilitis/Provider";

const Register = () => {
	const localNavigate = useNavigate();
	const {createUser, updateProfile} = useContext(authCustomContext)

	const hanldeRegister = (e) => {
		e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;

        e.target.reset()
        localNavigate('/')
        console.log(name,email,password, url);

		createUser (email, password)
        .then((result) => {
            // Signed up 
            const user = result.user;
            console.log(user, 'user from create user')
          })
          .catch((error) => {
            console.error(error)
          });
          updateProfile(name, url) 
          .then((result) => {
            // Signed up 
            const user = result.user;
            console.log(user, 'user from create user')
          })
          .catch((error) => {
            console.error(error)
          });     
	}

  return (
    <div>
      <div data-aos="fade-up" className="w-full m-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form noValidate="" onSubmit={hanldeRegister} className="space-y-6">
		<div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoUrl" className="block text-gray-600">
              PhotoUrl
            </label>
            <input
              type="url"
              name="url"
              id="photoUrl"
              placeholder="PhotoUrl"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
            <div className="flex justify-end text-xs text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-indigo-600">
            Resigter
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-600">
          Alrady have an account?
          <Link className="underline text-gray-800" to="/login">
             Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
