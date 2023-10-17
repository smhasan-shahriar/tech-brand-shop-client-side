import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../authentication/MainAuth";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(()=> toast('logged out'))
    .catch(error => console.error(error.message))
  }
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
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar max-w-[1600px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img
            className="md:w-16 w-12"
            src="https://i.ibb.co/yVqW2pp/icons8-technology-64.png"
            alt=""
          />
          <a className="md:text-3xl font-black">Super Brand Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {user ? (
          <div className="navbar-end md:space-x-4 space-x-1">
            <p>{user?.displayName}</p>
            <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
            <Link onClick={handleLogOut} className="btn">
              Log Out
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            <p>{user?.displayName}</p>
            <Link to="/login" className="btn">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
