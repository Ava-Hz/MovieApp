import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="relative mb-8 max-w-2xl mt-5">
      <div className="relative">
        <IoSearchOutline className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 " />
        <input
          type="text"
          value={search}
          placeholder="Search For Movies..."
          className="w-full sm:w-96 md:w-[28rem] lg:w-[36rem] pl-10 pr-12 rounded-md  h-12 bg-gray-800 border-gray-700 text-white placeholder-gray-550 text-sm focus:border-purple-500 focus:ring-purple-500 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default SearchBar;
