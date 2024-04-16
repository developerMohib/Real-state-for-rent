import { MdMenuOpen } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navlinks = <>
    <NavLink className={({ isActive}) => isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded"
  } to="/" > Home </NavLink>
    <NavLink className={({ isActive}) => isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded" } to="/about" > About Us</NavLink>
    <NavLink className={({ isActive}) => isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded" }  to="/contact" > Contact </NavLink>
    <NavLink className={({ isActive}) => isActive ? "bg-gray-400 p-2 rounded" : " p-2 rounded" }  to="/advantage" > Advantage </NavLink>
  </>
  return (
    <div className="md:px-10">
      <div className="navbar p-0 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdMenuOpen />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
              
            </ul>
          </div>
          <a href="/" className="bg-base-300 text-xl"> <img src="https://main.wpresidence.net/wp-content/uploads/2020/07/transparentopt.png" alt="" /> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-outline" to="/login"> Log In </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
