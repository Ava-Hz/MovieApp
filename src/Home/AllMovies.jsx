import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";

const AllMovies = ({ searchedMovie, selectedMovies, setSelectedMovies }) => {
  // For each movie
  const [movies, setMovies] = useState([]);
  // For pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // For error handling and loading
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // selected movies that are favorite
  const toggleMovieSelect = (movie) => {
    if (selectedMovies?.find((m) => m.id === movie.id)) {
      setSelectedMovies(selectedMovies.filter((m) => m.id !== movie.id));
    } else {
      setSelectedMovies([...selectedMovies, movie]);
    }
  };

  // pagination + error handling
  useEffect(() => {
    setLoading(true);
    setError("");

    axios
      .get(`https://moviesapi.ir/api/v1/movies?page=${page}`)
      .then((res) => {
        setMovies(res.data.data);
        setTotalPages(res.data.metadata.page_count);
      })
      .catch(() => {
        setError("❌ ERROR!! PLEASE TRY AGAIN!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  // If a movie is selected from search, show only that
  const displayMovies = searchedMovie ? [searchedMovie] : movies;

  return (
    <div>
      {/* LOADING */}
      {loading && (
        <p className="text-center text-white text-lg my-4">Loading ...</p>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-center text-red-500 font-bold my-4">{error}</p>
      )}

      {/* SHOW ALL MOVIES*/}
      {!loading && !error && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {displayMovies.map((item) => (
            <div
              key={item.id}
              className="relative bg-gray-800 text-white hover:text-[#B59AD9] rounded-lg overflow-hidden group hover:scale-105 transition duration-300"
            >
              <img
                src={item.poster}
                alt={item.title}
                className="w-full h-76 object-cover group-hover:scale-105 transition duration-300"
              />
              <button
                onClick={() => toggleMovieSelect(item)}
                className={`absolute top-2 right-2 text-white text-lg px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition ${
                  selectedMovies?.find((m) => m.id === item.id)
                    ? "bg-green-600"
                    : "bg-purple-600"
                }`}
              >
                {selectedMovies?.find((m) => m.id === item.id) ? (
                  <IoCheckmarkSharp />
                ) : (
                  <GoPlus />
                )}
              </button>

              <h1 className="mt-4 gest font-bold pl-2">{item.title}</h1>
              <div className="gest flex flex-wrap gap-2 mt-2 mb-8 pl-2">
                {item.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full hover:bg-[#9333EA]"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* IF THERE IS NO SEARCH */}
      {!searchedMovie && !loading && !error && (
        <div className="flex justify-center items-center mt-6 gap-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <FaLongArrowAltLeft />
          </button>
          <span className="text-white">
            {page} of {totalPages}
          </span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default AllMovies;
