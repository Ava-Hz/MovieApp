import React from "react";
import { TbMovie } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="border-b border-gray-800  bg-[#0A0F1D] backdrop-blur-sm sticky top-0 z-50">
      <div className="sticky flex flex-cols-2  justify-between items-center ">
        <div className=" py-4 gest font-bold text-xl flex items-center space-x-2">
          <TbMovie color="#C084FC" className="text-4xl" />
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold ">
            MovieApp
          </div>
        </div>
        <div className="gest   flex items-center space-x-2 mr-2">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#9333EA] text-xl text-white hover:shadow-lg hover:shadow-purple-600/25 rounded"
                  : "text-lg text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              }`
            }
          >
            <button className=" py-2 px-5 flex items-center space-x-2 cursor-pointer ">
              <TbMovie /> Home
            </button>
          </NavLink>
          <NavLink
            to={"/mymovies"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#2563EB] text-xl text-white hover:shadow-lg hover:shadow-purple-600/25 rounded"
                  : "text-lg text-gray-300 hover:text-white hover:bg-gray-800 rounded"
              }`
            }
          >
            <button className="py-2 px-5  rounded flex items-center space-x-2">
              <CiHeart className="text-xl" />
              My Movies
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
