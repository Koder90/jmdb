import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../index.css";

const WatchedList = ({ loggedIn, movieList }) => {
  return (
    <div>
      <h1 id="watch-list-header">MY LIST</h1>
      {movieList.map((movie) => {
        return (
          <div
            style={{ width: "50%" }}
            className="ui middle aligned divided list"
          >
            <div className="item">
              <div className="right floated content">
                <div className="ui button">Delete</div>
              </div>
              <img className="ui avatar image" src="" />
              <div className="content">{movie.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WatchedList;
