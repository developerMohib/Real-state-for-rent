import { useContext } from "react";
import { MdMenuOpen } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { authCustomContext } from "../../utilitis/Provider";
const Navbar = () => {
  const { user, logOut, notifyLogOut } = useContext(authCustomContext);
  const handleLogOut = () => {
    notifyLogOut()
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navlinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded"
        }
        to="/"
      > 
        Home 
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded"
        }
        to="/about"
      >  
        About Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded"
        }
        to="/contact"
      > 
        Contact 
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded"
        }
        to="/advantage"
      >
         
        Advantage 
      </NavLink>

      {/* Private Link */}
      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded"
            }
            to="/profile"
          >
            Profile 
          </NavLink>

          <details className="dropdown leading-7 ">
            <summary className="m-1 ">User Profile</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <Link
                  className={({ isActive }) =>
                    isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded"
                  }
                  to="/update"
                >
                   
                  Update Profile 
                </Link>
              </li>
              <li>
                <Link
                  className={({ isActive }) =>
                    isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded"
                  }
                  to="/profile"
                >
                   
                  Profile 
                </Link>
              </li>
            </ul>
          </details>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded"
            }
            to="/favorite"
          >
            Favorite 
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="md:px-10 top-menu sticky top-0 w-[100%] z-50 shadow-lg ">
      <div className="navbar p-0 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MdMenuOpen className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a href="/" className="bg-base-300 text-xl">
             
            <img
              src="https://main.wpresidence.net/wp-content/uploads/2020/07/transparentopt.png"
              alt=""
            /> 
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <ul>
            {
            user ? (
              <div className="flex items-center gap-2 " >
              {/* <span> {user.email} </span> */}
                <img className="rounded-full w-14 " data-tip={user?.displayName} alt="profile" src={user?.photoURL}/>
                <Link to="/">
                  <button onClick={handleLogOut} className="btn btn-outline">
                    log Out 
                  </button> 
                </Link>
              </div>
            ) : (
              <>
                <Link className="btn btn-outline" to="/login">
                  Log In 
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
