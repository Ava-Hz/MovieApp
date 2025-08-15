import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyMovies from "./My Movies/MyMovies";
import { useState } from "react";

function App() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  return (
    <div className="bg-[#030712] w-full h-full">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}
              />
            }
          />
          <Route
            path="/mymovies"
            element={
              <MyMovies
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
