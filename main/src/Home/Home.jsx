import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 py-8">
        <h1 className="gest text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-bold mb-4">
          Discover Movies
        </h1>
        <p className="text-gray-400 text-xl gest">
          Find your next favorite film
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
