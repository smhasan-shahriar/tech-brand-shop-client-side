import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
          <NavLink to="/">
            Home
          </NavLink>
      </li>
      <li>
          <NavLink to="/addproduct">
            Add Product
          </NavLink>
      </li>
      <li>
          <NavLink to="/mycart">
            My Cart
          </NavLink>
      </li>
      <li>
          <NavLink to="/register">
            Register
          </NavLink>
      </li>
     
    </>
  );
  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
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
            className="w-16"
            src="https://i.ibb.co/yVqW2pp/icons8-technology-64.png"
            alt=""
          />
          <a className="btn btn-ghost normal-case text-3xl">Super Brand Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
