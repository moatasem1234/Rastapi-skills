import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" w-full flex ">
      <nav className="w-full">
        <ul className="flex mt-3">
          <li className=" m-2 ">
            <Link
              to="/"
              className=" p-2 bg-indigo-700 hover:bg-indigo-900 text-white rounded-md "
            >
              Home
            </Link>
          </li>
          <li className="  m-2 ">
            <Link
              to="/skills"
              className=" p-2 bg-indigo-700 hover:bg-indigo-900 text-white rounded-md "
            >
              skills
            </Link>
          </li>
        </ul>
      </nav>
      <div className=" mt-5 flex ">
        <div>
          <Link
            to="/Register"
            className=" m-2 p-2 bg-indigo-700 hover:bg-indigo-900 text-white rounded-md "
          >
            Register
          </Link>
        </div>
        <div className="">
          <Link
            to="/login"
            className=" m-2 p-2 bg-indigo-700 hover:bg-indigo-900 text-white rounded-md "
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
