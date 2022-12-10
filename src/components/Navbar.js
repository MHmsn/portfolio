import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const navbarOptions = (
    <React.Fragment>
      <li className="mx-2 my-2 lg:my-0">
        <a href='#skills' className="btn btn-outline">Skills</a>
      </li>
      <li className="mx-2 my-2 lg:my-0">
        <a href='#projects' className="btn btn-outline">Projects</a>
      </li>
      <li className="mx-2 my-2 lg:my-0">
        <a href='#footer' className="btn btn-outline">Contact Info</a>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar sticky top-0 z-30 bg-black bg-opacity-50 backdrop-blur-xl">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <span className="logoText text-3xl text-white ">{'/* '}Moinul Hassan  {' */'}</span>
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars/>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black  bg-opacity-80 rounded-box w-52"
          >
            {navbarOptions}
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden mr-10 lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navbarOptions}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
