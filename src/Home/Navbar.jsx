import React from "react";
import { TbMovie } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="border-b border-gray-800  bg-[#0A0F1D] backdrop-blur-sm sticky top-0 z-50">
      <div className="sticky flex flex-cols-2  justify-between items-center ml-2">
        <div className=" py-3 gest font-bold text-xl flex items-center space-x-2">
          <TbMovie color="#C084FC" className="text-4xl" />
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold ">
            MovieApp
          </div>
        </div>
        <div className="gest flex items-center space-x-2 mr-2">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#9333EA]  text-white hover:shadow-lg hover:shadow-purple-600/25 rounded-lg"
                  : " text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg"
              }`
            }
          >
            <button className=" py-2 px-4 flex items-center space-x-2 cursor-pointer ">
              <TbMovie />
              <span className="px-[0.1rem]">Home</span>
            </button>
          </NavLink>
          <NavLink
            to={"/mymovies"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#2563EB] text-white hover:shadow-lg hover:shadow-purple-600/25 rounded-lg"
                  : " text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg"
              }`
            }
          >
            <button className="py-2 px-4 flex items-center space-x-2 cursor-pointer">
              <CiHeart className="text-xl" />
              <span className="ml-1">My Movies</span>
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
