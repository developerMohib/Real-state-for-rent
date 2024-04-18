import { useContext } from "react";
import { authCustomContext } from "../../utilitis/Provider";

const Update = () => {
    const {user, url} = useContext(authCustomContext);
    console.log(user , 'user form profile')
  return (
    <div>
      <div
        data-aos="fade-up"
        className="card card-side bg-base-100 shadow-xl my-10 "
      >
        <figure>
          <img
            src={user.photoURL}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Name : {user.displayName} </h2>
          <p> Email : {user.email} </p>
          <p> Photo Url : {url} </p>
        </div>
      </div>

      <div>
      <form noValidate="" className="space-y-6">
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
          <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-indigo-600">
            Update Profile
          </button>
        </form>
      </div>

    </div>
  );
};

export default Update;