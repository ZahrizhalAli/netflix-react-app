import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
function Row({ title, fetchUrl, isLargePoster }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    // if [], run the code , and never run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((m, index) => (
          <img
            key={index}
            className={`row__poster ${isLargePoster && "row__posterlarger"}`}
            src={`${base_url}${
              isLargePoster ? m.poster_path : m.backdrop_path
            }`}
            alt={m.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
