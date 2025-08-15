import React from "react";
import Navbar from "../Home/Navbar";
import { TbMovie } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const MyMovies = ({ selectedMovies, setSelectedMovies }) => {
  return (
    <div className="max-h-full gest">
      <Navbar />
      <div>
        <h1 className="text-[#5DA8FA] text-4xl font-bold p-5">My Whatchlist</h1>
        <div className="text-xl text-[#88A3AF] px-5">
          Movies you want to watch
        </div>
      </div>
      {/* Container Section */}

      {selectedMovies.length === 0 ? (
        // Show this if whatchlist is empty
        <div className="text-center mt-10 h-[100vh] ">
          <div>
            <CiHeart className="text-8xl text-white m-auto block" />
          </div>
          <p className="text-gray-400 text-xl">Your watchlist is empty.</p>
          <p className="text-gray-500">Add some movies to see them here!</p>
          <div className="gest flex items-center space-x-2 mr-2 justify-center p-10">
            <NavLink
              to={"/"}
              className=" text-gray-300 bg-[#9333EA] p-1 px-2 hover:text-white hover:bg-[#6624a3] rounded-lg"
            >
              <button className=" py-2 px-4 flex items-center space-x-2 cursor-pointer  ">
                <TbMovie />
                <span className="px-[0.1rem]">Browse Movies</span>
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        // Show selected movie if any Exists

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-10">
          {selectedMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 text-white rounded-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-76 object-cover"
              />
              <h2 className="p-2 font-semibold">{movie.title}</h2>
              {/* Optional remove button */}
              <button
                onClick={() =>
                  setSelectedMovies(
                    selectedMovies.filter((m) => m.id !== movie.id)
                  )
                }
                className="bg-red-600 text-white px-2 py-1 m-2 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyMovies;
