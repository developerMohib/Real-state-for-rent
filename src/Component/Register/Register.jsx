import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authCustomContext } from "../../utilitis/Provider";
import { FaFaceGrin, FaFaceFrown } from "react-icons/fa6";

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const localNavigate = useNavigate();
  const { createUser, updateProfileFromUser, notifyRegister } =
    useContext(authCustomContext);

  console.log(registerError, 'regiter')

  const hanldeRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = e.target.url.value;

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters long.');
      return;
  }
  
  if (!/[A-Z]/.test(password)) {
      setRegisterError("Your password must contain at least one capital letter.");
      return;
  }
  
  if (!/[a-z]/.test(password)) {
      setRegisterError("Your password must contain at least one lowercase letter.");
      return;
  }
  
  if (!/\d/.test(password)) {
      setRegisterError("Your password must contain at least one digit.");
      return;
  }
  

    e.target.reset();
    localNavigate("/");
    setRegisterError('');
    notifyRegister();

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user, "user from create user");
      })
      .catch((error) => {
        alert(error.message)
        setRegisterError(error.message)
      });

    updateProfileFromUser(name, url)
      .then((result) => {
        // Signed up
        const user = result.user;
        console.log(user, "user from create user");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div
        data-aos="fade-up"
        className="w-full m-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800"
      >
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
            <div className="flex relative ">
            <input
              type={ showPass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600"
            />
            <span onClick={ () => setShowPass(!showPass) } >
              {
                showPass ? <FaFaceGrin className="text-2xl text-secondary absolute right-0 top-2 " /> : <FaFaceFrown className="text-2xl text-secondary absolute right-0 top-2 " />
              }
               </span>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-indigo-600">
            Resigter
          </button>
        </form>
        {
          registerError && <p className="bg-secondary" > error :  {registerError} </p>
        }

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
