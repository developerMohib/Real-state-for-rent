import { useContext } from "react";
import { authCustomContext } from "../../utilitis/Provider";

const Profile = () => {
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
    </div>
  );
};

export default Profile;
