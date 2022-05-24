import "./App.css";
import { useState, useEffect } from "react";
import SearchIcon from "./Search.svg";
import MovieCard from "./MovieCard";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTearm, setSearchTearm] = useState();

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  // this is omdbapi api key
  // d481e22b

  const API_Url = "http://www.omdbapi.com?apiKey=d481e22b";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_Url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          value={searchTearm}
          placeholder="Search for movies"
          onChange={(e) => setSearchTearm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={()=>searchMovies(searchTearm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>No Movies Found !</h3>
        </div>
      )}
    </div>
  );
}

export default App;
