import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import '../index.css';

const Content = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);


  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/MostPopularMovies/k_iio9a455")
      .then((response) => {
        setMovies(response.data.items);
        console.log(movies);
      });
  }, []);


  const moviesPerPage = 10;
  const pagesVisited = pageNumber * moviesPerPage;

  const displayMovies = movies
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => {
      return (
          <div className="three wide column" key={movie.id}>
          <div className="polaroid">
          <img src={movie.image} />
          <div className="container"><p>{movie.title}</p></div> 
          </div>
          </div>
      );
    });

  const pageCount = Math.ceil(movies.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
    <div className="ui grid">
      {displayMovies}
      </div>
      <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div>
      </div>
  );
}

export default Content;

/* return (
  <div>
    <div className="ui grid" style = {{marginTop: '20px'}}>
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
}; */
