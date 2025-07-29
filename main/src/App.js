import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyMovies from "./My Movies/MyMovies";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mymovies" element={<MyMovies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
