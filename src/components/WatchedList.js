import React, { useEffect, useState } from "react";
import Axios from "axios";
import "semantic-ui-css/semantic.min.css";
import "../index.css";
import { BiMoviePlay } from "react-icons/bi";

const WatchedList = ({ movieList, setMovieList }) => {
  const [watchList, setWatchList] = useState([]);

  //fix this
  useEffect(() => {
    Axios.get("http://localhost:3001/getMovieList").then((response) => {
      setWatchList(response.data.map((item) => item.title));
    });
  }, []);

  return (
    <div>
      <h1 id="watch-list-header">MY LIST</h1>
      {watchList.length < 1 ? (
        <h1>empty list</h1>
      ) : (
        watchList.map((movie) => {
          return (
            <div
              style={{ width: "50%" }}
              className="ui middle aligned divided list"
              key={movie.index}
            >
              <div className="item">
                <div className="right floated content">
                  <div className="ui button">Delete</div>
                </div>
                <BiMoviePlay />
                <div className="content">{movie}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default WatchedList;
