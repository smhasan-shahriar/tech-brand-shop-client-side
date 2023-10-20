import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../authentication/MainAuth";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import ThemeChanger from "../components/ThemeChanger";
import { useState } from "react";

const NavBar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => toast("logged out"))
      .catch((error) => console.error(error.message));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/mycart">My Cart</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="py-2">
      <div className="navbar max-w-[1600px] mx-auto">
        <div className="navbar-start">
          <div
            className="dropdown"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            )}
          </div>
          <img
            className="md:w-16 w-10"
            src="https://i.ibb.co/yVqW2pp/icons8-technology-64.png"
            alt=""
          />
          <a className="md:text-3xl font-black">Tech Brand Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {user ? (
          <div className="navbar-end lg:space-x-4 md:space-x-2 space-x-1">
            <ThemeChanger></ThemeChanger>
            <p>{user?.displayName}</p>
            <img
              className="w-12 h-12 rounded-full"
              src={user.photoURL}
              alt=""
            />
            <Link onClick={handleLogOut} className="btn font-bold">
              Log Out
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            <ThemeChanger></ThemeChanger>
            <Link to="/login" className="btn font-bold">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
