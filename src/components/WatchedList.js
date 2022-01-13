import React from "react";
import "semantic-ui-css/semantic.min.css";

const WatchedList = ({ loggedIn, movieList }) => {
  return (
    <div>
      <h1 id="watch-list-header">MY LIST</h1>
      {movieList.map((movie) => {
        return (
          <div className="ui inverted segment">
            <div className="ui inverted relaxed divided list">
             <div className="item">
               {movie.title}
             </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WatchedList;
