import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";

const SearchBar = ({ setSearchedMovie }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fetch all pages of movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const firstPage = await axios.get(
          `https://moviesapi.ir/api/v1/movies?page=1`
        );
        const totalPages = firstPage.data.metadata.page_count;

        const requests = [];
        for (let i = 1; i <= totalPages; i++) {
          requests.push(
            axios.get(`https://moviesapi.ir/api/v1/movies?page=${i}`)
          );
        }

        const responses = await Promise.all(requests);
        const allMovies = responses.flatMap((res) => res.data.data);
        setMovies(allMovies);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative mb-8 max-w-2xl mt-5">
      <div className="relative">
        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // keep dropdown on click
          placeholder="Search For Movies..."
          className="w-full sm:w-96 md:w-[28rem] lg:w-[36rem] pl-10 pr-12 rounded-md h-12 bg-gray-800 border-gray-700 text-white placeholder-gray-550 text-sm focus:border-purple-500 focus:ring-purple-500 transition-all duration-200"
        />
      </div>

      {(showDropdown || search) && (
        <ul className="mt-2 bg-gray-700 rounded-md max-h-64 overflow-auto">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <li
                key={movie.id}
                className="p-2 hover:bg-gray-600 cursor-pointer text-white"
                onMouseDown={() => setSearchedMovie(movie)} // sets selected movie
              >
                {movie.title}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-400">No movies found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
