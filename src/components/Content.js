import axios from "axios";
import React, { useState, useEffect } from "react";

const Content = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    await axios
      .get("https://imdb-api.com/en/API/MostPopularMovies/k_iio9a455")
      .then((response) => {
        const result = response.data.items;
        setMovies(result);
        console.log(movies);
      });
  };

  return (
    <div>
      <button onClick={loadMovies}>Load</button>
      <div className="ui grid">
        {movies.map((movie) => (
          <div className="four wide column" key={movie.id}>
            <div className="polaroid">
            <img src={movie.image} />
            <div className="container"><p>{movie.title}</p></div> 
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
