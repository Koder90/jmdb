import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactPaginate from "react-paginate";
import "../index.css";
import "semantic-ui-css/semantic.min.css";

const Content = ({ loggedIn, movieList, setMovieList, title }) => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getMovieList").then((response) => {
      setMovieList(response.data);
    });
  }, []);

 

  useEffect(() => {
    Axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_iio9a455")
      .then((response) => {
        setMovies(response.data.items);
      });
  }, []);

  const moviesPerPage = 10;
  const pagesVisited = pageNumber * moviesPerPage;

  const displayMovies = movies
    .filter((val) => {
      if (searchTerm == "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => {
      return (
        <div className="three wide column" key={movie.id}>
          <div className="polaroid">
            <img src={movie.image} />
            <div className="container">
              <p>{movie.title}</p>
              <p>{loggedIn ? <button onClick={ () => {
    Axios.post("http://localhost:3001/createMovieList", {
      title: movie.title,
    }).then((response) => {
      setMovieList([...movieList, { title }]);
      console.log('clicked')
      console.log(movieList);
    });
  }} className = "ui secondary button" type="button">Add</button> : null}</p>
            </div>
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
      <div className="ui action input" style={{ marginBottom: "40px" }}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="ui button">Search</button>
      </div>
      <div className="ui grid">{displayMovies}</div>
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
};

export default Content;
