import { useContext } from "react";
import { authCustomContext } from "../../utilitis/Provider";

const Update = () => {
    const {user, updateProfileFromUser} = useContext(authCustomContext);
    console.log(user , 'user form profile');

    const updateProfilePicture = (e) => {
     
      const photoLink = e.target.url.value; 
      const name = e.target.name.value;
      console.log(photoLink, name);
      e.target.reset();

      updateProfileFromUser(name, photoLink)
    }


  return (
    <div>
      <div
        data-aos="fade-up"
        className="card card-side bg-base-100 shadow-xl my-10 "
      >
        <figure>
          <img className="w-[6rem] rounded-md "
            src={user?.photoURL}
            alt="Profile"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Name : {user.displayName} </h2>
          <p> Email : {user.email} </p>
          <p> Photo Url : {user?.photoURL} </p>
        </div>
      </div>

      <div>


      <form onSubmit={updateProfilePicture} noValidate="" className="space-y-6">
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